"use client";

import { useState, useEffect, useCallback } from "react";
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

export function GoogleTranslateSwitcher() {
  const [currentLang, setCurrentLang] = useState<string>("en");
  const [mounted, setMounted] = useState(false);
  const [widgetReady, setWidgetReady] = useState(false);

  // Detect language from cookie
  const getCookieLang = useCallback((): string => {
    if (typeof document === 'undefined') return 'en';
    
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'googtrans') {
        const match = value.match(/\/[a-z]{2}(-[A-Z]{2})?\/([a-z]{2}(-[A-Z]{2})?)/);
        if (match && match[2]) {
          return match[2];
        }
      }
    }
    return 'en';
  }, []);

  // Initialize on mount
  useEffect(() => {
    setMounted(true);
    const detected = getCookieLang();
    setCurrentLang(detected);

    // Wait for widget
    let attempts = 0;
    const interval = setInterval(() => {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        setWidgetReady(true);
        clearInterval(interval);
      } else if (++attempts > 30) {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [getCookieLang]);

  const changeLanguage = useCallback((langCode: string) => {
    if (typeof window === 'undefined') return;
    
    setCurrentLang(langCode);

    // Clear all Google Translate cookies first
    const domain = window.location.hostname;
    const cookieOptions = [
      `path=/`,
      `domain=${domain}`,
      `domain=.${domain}`,
      `path=/; domain=${domain}`,
      `path=/; domain=.${domain}`,
    ];

    // Delete existing cookies
    cookieOptions.forEach(opts => {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; ${opts}`;
      document.cookie = `googtrans=/en/en; expires=Thu, 01 Jan 1970 00:00:00 UTC; ${opts}`;
    });

    // Set new language cookie with multiple attempts
    const newCookieValue = langCode === 'en' ? '/en/en' : `/en/${langCode}`;
    document.cookie = `googtrans=${newCookieValue}; path=/; max-age=31536000`;
    document.cookie = `googtrans=${newCookieValue}; path=/; domain=${domain}; max-age=31536000`;
    if (domain.includes('.')) {
      document.cookie = `googtrans=${newCookieValue}; path=/; domain=.${domain}; max-age=31536000`;
    }

    // Try to trigger via widget if available
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      try {
        select.value = langCode;
        select.dispatchEvent(new Event('change', { bubbles: true }));
      } catch (e) {
        console.error('Widget trigger failed:', e);
      }
    }

    // Always reload to ensure translation applies
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }, []);

  // Don't render until mounted (prevents hydration issues)
  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="gap-2 h-8 px-3 text-white hover:bg-white/10 hover:text-white" disabled>
        <Languages className="h-4 w-4" />
        <span className="text-xs font-medium">English</span>
        <ChevronDown className="h-3 w-3 opacity-70" />
      </Button>
    );
  }

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
        <DropdownMenuSeparator />
        <div className="px-2 py-1">
          <button
            onClick={() => {
              // Force clear all cookies and reload
              document.cookie.split(";").forEach(c => {
                document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
              });
              window.location.reload();
            }}
            className="w-full text-xs text-muted-foreground hover:text-foreground py-1"
          >
            Reset Translation
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
