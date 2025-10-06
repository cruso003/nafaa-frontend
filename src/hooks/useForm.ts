"use client";

import { useState, useCallback } from "react";

interface ValidationRules {
  required?: boolean | string;
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
  validate?: (value: any) => boolean | string;
}

interface FieldRules {
  [key: string]: ValidationRules;
}

interface FormErrors {
  [key: string]: string;
}

export function useForm<T extends Record<string, any>>(
  initialValues: T,
  validationRules?: FieldRules
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback(
    (name: string, value: any): string => {
      const rules = validationRules?.[name];
      if (!rules) return "";

      // Required validation
      if (rules.required) {
        if (!value || (typeof value === "string" && value.trim() === "")) {
          return typeof rules.required === "string"
            ? rules.required
            : "This field is required";
        }
      }

      // MinLength validation
      if (rules.minLength && value.length < rules.minLength.value) {
        return rules.minLength.message;
      }

      // MaxLength validation
      if (rules.maxLength && value.length > rules.maxLength.value) {
        return rules.maxLength.message;
      }

      // Pattern validation
      if (rules.pattern && !rules.pattern.value.test(value)) {
        return rules.pattern.message;
      }

      // Custom validation
      if (rules.validate) {
        const result = rules.validate(value);
        if (typeof result === "string") return result;
        if (result === false) return "Invalid value";
      }

      return "";
    },
    [validationRules]
  );

  const handleChange = useCallback(
    (name: keyof T, value: any) => {
      setValues((prev) => ({ ...prev, [name]: value }));

      // Clear error when user starts typing
      if (errors[name as string]) {
        setErrors((prev) => ({ ...prev, [name as string]: "" }));
      }
    },
    [errors]
  );

  const handleBlur = useCallback(
    (name: keyof T) => {
      setTouched((prev) => ({ ...prev, [name as string]: true }));

      // Validate on blur
      const error = validateField(name as string, values[name]);
      if (error) {
        setErrors((prev) => ({ ...prev, [name as string]: error }));
      }
    },
    [validateField, values]
  );

  const validate = useCallback((): boolean => {
    if (!validationRules) return true;

    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach((fieldName) => {
      const error = validateField(fieldName, values[fieldName as keyof T]);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [validateField, validationRules, values]);

  const handleSubmit = useCallback(
    (onSubmit: (values: T) => Promise<void> | void) => {
      return async (e?: React.FormEvent) => {
        e?.preventDefault();

        setIsSubmitting(true);

        // Mark all fields as touched
        if (validationRules) {
          const allTouched: Record<string, boolean> = {};
          Object.keys(validationRules).forEach((key) => {
            allTouched[key] = true;
          });
          setTouched(allTouched);
        }

        // Validate all fields
        const isValid = validate();

        if (isValid) {
          try {
            await onSubmit(values);
          } catch (error) {
            console.error("Form submission error:", error);
          }
        }

        setIsSubmitting(false);
      };
    },
    [validate, values, validationRules]
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValues,
    setErrors,
  };
}
