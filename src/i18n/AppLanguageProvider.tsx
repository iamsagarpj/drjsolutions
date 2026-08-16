import { useEffect } from 'react';
import { LanguageProvider as Provider } from '@/i18n/LanguageProvider';
import { useLanguage } from '@/i18n/useLanguage';

function HtmlLang() {
  const { lang } = useLanguage();
  useEffect(() => {
    document.documentElement.lang = lang === 'mr' ? 'mr' : 'en';
  }, [lang]);
  return null;
}

export function AppLanguageProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <HtmlLang />
      {children}
    </Provider>
  );
}
