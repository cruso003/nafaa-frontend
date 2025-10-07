"use client";

import { useEffect, useState } from 'react';

// Type definitions for Google Translate
declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: {
          new (config: {
            pageLanguage: string;
            includedLanguages: string;
            layout: number;
            autoDisplay: boolean;
            multilanguagePage: boolean;
          }, elementId: string): void;
          InlineLayout: {
            SIMPLE: number;
          };
        };
      };
    };
  }
}

export function GoogleTranslateContainer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only mount after client-side hydration is complete
    setMounted(true);

    // Initialize Google Translate
    if (typeof window !== 'undefined' && !window.googleTranslateElementInit) {
      window.googleTranslateElementInit = function() {
        try {
          const google = window.google;
          if (google && google.translate && google.translate.TranslateElement) {
            new google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'en,fr,es,pt,ar,zh-CN,zh-TW,ja,ko,ru,de,it,nl,hi,sw,am',
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
              multilanguagePage: true
            }, 'google_translate_element');
          }
        } catch (e) {
          console.error('Google Translate initialization failed:', e);
        }
      };

      // Load Google Translate script after a delay to ensure hydration is complete
      const loadScript = () => {
        if (!document.querySelector('script[src*="translate.google.com"]')) {
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
          script.async = true;
          script.onerror = () => {
            console.error('Failed to load Google Translate script');
          };
          document.head.appendChild(script);
        } else {
          // Script already loaded, trigger init
          if (window.google?.translate) {
            window.googleTranslateElementInit?.();
          }
        }
      };

      // Delay script loading to ensure React hydration is complete
      // Increased delay for production reliability
      const timer = setTimeout(loadScript, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  // Don't render anything until after hydration
  if (!mounted) {
    return null;
  }

  return (
    <div 
      id="google_translate_element" 
      style={{ 
        display: 'none', 
        position: 'absolute', 
        left: '-9999px', 
        visibility: 'hidden',
        pointerEvents: 'none'
      }} 
    />
  );
}
