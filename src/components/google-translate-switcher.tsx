"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Languages, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
  { code: "pt", name: "Português" },
  { code: "ar", name: "العربية" },
  { code: "zh-CN", name: "中文(简体)" },
  { code: "zh-TW", name: "中文(繁體)" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
  { code: "ru", name: "Русский" },
  { code: "de", name: "Deutsch" },
  { code: "it", name: "Italiano" },
  { code: "nl", name: "Nederlands" },
  { code: "hi", name: "हिन्दी" },
  { code: "sw", name: "Kiswahili" },
  { code: "am", name: "አማርኛ" },
];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
  }
}

export function GoogleTranslateSwitcher() {
  const [currentLang, setCurrentLang] = useState("en");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Detect current language from cookie immediately
    const detectLanguage = () => {
      // Check cookie first
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'googtrans') {
          const lang = value.split('/')[2];
          if (lang && lang !== 'en') {
            setCurrentLang(lang);
            return;
          }
        }
      }
      
      // Check localStorage as backup
      const savedLang = localStorage.getItem('googtrans');
      if (savedLang) {
        const lang = savedLang.split('/')[2];
        if (lang && lang !== 'en') {
          setCurrentLang(lang);
          return;
        }
      }
    };
    
    // Detect immediately on mount
    detectLanguage();
    
    // Wait for Google Translate to be ready
    const checkReady = setInterval(() => {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        setIsReady(true);
        clearInterval(checkReady);
        detectLanguage();
      }
    }, 100);

    return () => clearInterval(checkReady);
  }, []);

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    
    // Find the Google Translate select element
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    
    if (select) {
      // Set the select value
      select.value = langCode;
      
      // Trigger change event to activate translation
      const event = new Event('change', { bubbles: true });
      select.dispatchEvent(event);
    } else {
      // Fallback: Set cookies if widget not ready yet
      const domain = window.location.hostname;
      
      if (langCode === 'en') {
        // Reset to English
        document.cookie = `googtrans=; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        document.cookie = `googtrans=/en/en; path=/; domain=${domain}`;
        localStorage.removeItem('googtrans');
        localStorage.setItem('googtrans', '/en/en');
      } else {
        // Set translation cookie
        document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain}`;
        localStorage.setItem('googtrans', `/en/${langCode}`);
      }
      
      // Reload page to apply translation
      window.location.reload();
    }
  };

  const currentLanguage = languages.find((lang) => lang.code === currentLang) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 h-8 px-3 text-white hover:bg-white/10 hover:text-white">
          <Languages className="h-4 w-4" />
          <span className="text-xs font-medium">{currentLanguage.name}</span>
          <ChevronDown className="h-3 w-3 opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52 max-h-96 overflow-y-auto">
        <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
          Select Language
        </div>
        <DropdownMenuSeparator />
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className="cursor-pointer"
          >
            <span className="flex-1">{lang.name}</span>
            {currentLang === lang.code && (
              <span className="ml-auto text-green-600 font-bold">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
