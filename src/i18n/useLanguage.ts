import { createContext, useContext } from 'react';
import type { Language, SiteContent } from '@/content/types';

export type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: SiteContent;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
