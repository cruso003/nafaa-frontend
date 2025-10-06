"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { autoTranslate, autoTranslateBatch, preloadCommonTranslations } from "@/lib/auto-translate";

type Language = "en" | "fr";

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (text: string) => Promise<string>;
  tBatch: (texts: string[]) => Promise<string[]>;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang) {
      setLanguage(savedLang);
      // Preload common translations
      preloadCommonTranslations(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    // Preload common translations for new language
    if (lang !== "en") {
      preloadCommonTranslations(lang);
    }
  };

  const t = async (text: string): Promise<string> => {
    return autoTranslate(text, language);
  };

  const tBatch = async (texts: string[]): Promise<string[]> => {
    return autoTranslateBatch(texts, language);
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage: handleSetLanguage, t, tBatch }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return context;
}
