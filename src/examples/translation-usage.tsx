"use client";

/**
 * Example: How to use auto-translation in your pages
 * This shows before/after implementation
 */

import { useEffect, useState } from "react";
import { T } from "@/components/auto-translate";
import { useTranslation } from "@/contexts/TranslationContext";

// ❌ OLD WAY (manual i18n with JSON files):
// import { useTranslation } from "react-i18next";

export function OldHero() {
  // const { t } = useTranslation();
  
  return (
    <h1>{/* t("hero.title") */}Old Way Example</h1>
    /* Required en/common.json: { "hero": { "title": "Welcome" } } */
    /* Required fr/common.json: { "hero": { "title": "Bienvenue" } } */
  );
}

// ✅ NEW WAY (automatic Google Translate):
export function NewHero() {
  return (
    <h1>
      <T>Welcome to NaFAA</T>
    </h1>
    /* No JSON files needed! */
    /* Automatically translates to French when user switches language */
  );
}

// ✅ ADVANCED: Multiple texts in one component
export function ServicesCard() {
  return (
    <div className="card">
      <h2 className="text-2xl font-bold">
        <T>Fishing Licenses</T>
      </h2>
      <p className="text-gray-600">
        <T>Apply for commercial, artisanal, or recreational fishing licenses online</T>
      </p>
      <button className="btn">
        <T>Apply Now</T>
      </button>
    </div>
  );
}

// ✅ BEST PRACTICE: Extract to constants for repeated text
const COMMON_PHRASES = {
  readMore: "Read More",
  learnMore: "Learn More",
  submit: "Submit Application",
  cancel: "Cancel",
};

export function ActionButtons() {
  return (
    <div>
      <button><T>{COMMON_PHRASES.submit}</T></button>
      <button><T>{COMMON_PHRASES.cancel}</T></button>
    </div>
  );
}

// ✅ PROGRAMMATIC TRANSLATION (for dynamic content)
export function DynamicContent() {
  const { t } = useTranslation();
  const [translatedTitle, setTranslatedTitle] = useState("");

  useEffect(() => {
    async function translate() {
      const result = await t("Dynamic content from API");
      setTranslatedTitle(result);
    }
    translate();
  }, [t]);

  return <h1>{translatedTitle}</h1>;
}

// ✅ BATCH TRANSLATION (more efficient for lists)
interface Article {
  title: string;
}

export function NewsList({ articles }: { articles: Article[] }) {
  const { tBatch, language } = useTranslation();
  const [translatedTitles, setTranslatedTitles] = useState<string[]>([]);

  useEffect(() => {
    async function translateAll() {
      const titles = articles.map((a: Article) => a.title);
      const translated = await tBatch(titles);
      setTranslatedTitles(translated);
    }
    translateAll();
  }, [articles, language, tBatch]);

  return (
    <div>
      {translatedTitles.map((title: string, i: number) => (
        <h3 key={i}>{title}</h3>
      ))}
    </div>
  );
}

