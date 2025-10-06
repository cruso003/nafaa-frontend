import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "@/config/constants";

// Import translations
import enCommon from "@/locales/en/common.json";
import enHome from "@/locales/en/home.json";
import enAbout from "@/locales/en/about.json";
import enServices from "@/locales/en/services.json";
import enPortal from "@/locales/en/portal.json";

import frCommon from "@/locales/fr/common.json";
import frHome from "@/locales/fr/home.json";
import frAbout from "@/locales/fr/about.json";
import frServices from "@/locales/fr/services.json";
import frPortal from "@/locales/fr/portal.json";

const resources = {
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    services: enServices,
    portal: enPortal,
  },
  fr: {
    common: frCommon,
    home: frHome,
    about: frAbout,
    services: frServices,
    portal: frPortal,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
    defaultNS: "common",
    ns: ["common", "home", "about", "services", "portal"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
