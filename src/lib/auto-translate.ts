/**
 * Auto-Translation Service using MyMemory Free Translation API
 * NO API KEY REQUIRED - 100% FREE
 * Automatically translates content on-the-fly with caching
 */

// In-memory cache to avoid re-translating same content
const translationCache = new Map<string, string>();

// MyMemory Free Translation API (no key needed, 5000 requests/day)
const TRANSLATION_API = 'https://api.mymemory.translated.net/get';

/**
 * Generate cache key for translation
 */
function getCacheKey(text: string, targetLang: string): string {
  return `${targetLang}:${text.substring(0, 100)}`;
}

/**
 * Automatically translate text to target language
 * @param text - Original text in English
 * @param targetLang - Target language code (e.g., 'fr', 'es')
 * @returns Translated text
 */
export async function autoTranslate(
  text: string,
  targetLang: string
): Promise<string> {
  // If target is English, return original
  if (targetLang === 'en' || !targetLang) {
    return text;
  }

  // Check cache first
  const cacheKey = getCacheKey(text, targetLang);
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!;
  }

  try {
    // Translate using MyMemory Free API (no key needed!)
    const url = `${TRANSLATION_API}?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.responseStatus === 200 && data.responseData.translatedText) {
      const translation = data.responseData.translatedText;
      
      // Cache the result
      translationCache.set(cacheKey, translation);
      
      return translation;
    }
    
    return text;
  } catch (error) {
    console.error('Translation error:', error);
    // Fallback to original text if translation fails
    return text;
  }
}

/**
 * Batch translate multiple texts at once (more efficient)
 * @param texts - Array of texts to translate
 * @param targetLang - Target language code
 * @returns Array of translated texts
 */
export async function autoTranslateBatch(
  texts: string[],
  targetLang: string
): Promise<string[]> {
  if (targetLang === 'en' || !targetLang) {
    return texts;
  }

  try {
    // Check which texts are already cached
    const uncachedTexts: string[] = [];
    const cachedResults: Map<number, string> = new Map();

    texts.forEach((text, index) => {
      const cacheKey = getCacheKey(text, targetLang);
      if (translationCache.has(cacheKey)) {
        cachedResults.set(index, translationCache.get(cacheKey)!);
      } else {
        uncachedTexts.push(text);
      }
    });

    // Translate uncached texts one by one using MyMemory API
    if (uncachedTexts.length > 0) {
      const translations = await Promise.all(
        uncachedTexts.map(async (text) => {
          try {
            const url = `${TRANSLATION_API}?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`;
            const response = await fetch(url);
            const data = await response.json();
            
            if (data.responseStatus === 200 && data.responseData.translatedText) {
              return data.responseData.translatedText;
            }
            return text;
          } catch {
            return text;
          }
        })
      );

      // Cache new translations
      let uncachedIndex = 0;
      texts.forEach((text, index) => {
        if (!cachedResults.has(index)) {
          const translation = translations[uncachedIndex];
          const cacheKey = getCacheKey(text, targetLang);
          translationCache.set(cacheKey, translation);
          cachedResults.set(index, translation);
          uncachedIndex++;
        }
      });
    }

    // Return translations in original order
    return texts.map((_, index) => cachedResults.get(index)!);
  } catch (error) {
    console.error('Batch translation error:', error);
    return texts;
  }
}

/**
 * Clear translation cache (useful for memory management)
 */
export function clearTranslationCache(): void {
  translationCache.clear();
}

/**
 * Preload common translations for better performance
 */
export async function preloadCommonTranslations(targetLang: string): Promise<void> {
  const commonPhrases = [
    'Home',
    'About',
    'Services',
    'Contact',
    'Login',
    'Register',
    'Search',
    'Read More',
    'Learn More',
    'Submit',
    'Cancel',
    'Save',
  ];

  await autoTranslateBatch(commonPhrases, targetLang);
}
