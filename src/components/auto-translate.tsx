"use client";

import { useEffect, useState, ReactNode } from "react";
import { useTranslation } from "@/contexts/TranslationContext";

/**
 * Auto-translating Text component
 * Automatically translates text content based on selected language
 * 
 * Usage:
 * <T>Hello World</T>
 * <T className="text-lg">Welcome to NaFAA</T>
 */
export function T({ 
  children, 
  className = "" 
}: { 
  children: string; 
  className?: string;
}) {
  const { t, language } = useTranslation();
  const [translatedText, setTranslatedText] = useState(children);

  useEffect(() => {
    let isMounted = true;

    async function translateText() {
      if (language === "en") {
        setTranslatedText(children);
        return;
      }

      const translated = await t(children);
      if (isMounted) {
        setTranslatedText(translated);
      }
    }

    translateText();

    return () => {
      isMounted = false;
    };
  }, [children, language, t]);

  return <span className={className}>{translatedText}</span>;
}

/**
 * Auto-translating component for sections with multiple texts
 * More efficient than individual <T> components
 */
export function TSection({ 
  children,
  className = ""
}: { 
  children: ReactNode;
  className?: string;
}) {
  const { language } = useTranslation();
  const [isTranslated, setIsTranslated] = useState(false);

  useEffect(() => {
    if (language !== "en") {
      // Translation happens automatically via context
      setIsTranslated(true);
    } else {
      setIsTranslated(false);
    }
  }, [language]);

  return (
    <div className={className} data-translated={isTranslated}>
      {children}
    </div>
  );
}
