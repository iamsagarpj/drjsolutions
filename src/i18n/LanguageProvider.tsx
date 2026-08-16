import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { getContent } from '@/content';
import type { Language } from '@/content/types';
import { LanguageContext } from '@/i18n/useLanguage';
import { track } from '@/services/analytics';

const STORAGE_KEY = 'drj-language';

function readInitialLang(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'mr') return stored;
  } catch {
    /* ignore */
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(readInitialLang);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = next === 'mr' ? 'mr' : 'en';
    track('language_switch', { lang: next });
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: getContent(lang),
    }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
