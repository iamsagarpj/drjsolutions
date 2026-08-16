import { cn } from '@/lib/cn';
import { useLanguage } from '@/i18n/useLanguage';

export function LanguageSwitcher({ invert = false }: { invert?: boolean }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      className={cn(
        'inline-flex rounded-full border p-0.5 text-[0.68rem] font-semibold sm:text-xs',
        invert ? 'border-white/20' : 'border-line',
      )}
      role="group"
      aria-label={t.common.language}
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        className={cn(
          'min-h-9 min-w-9 rounded-full px-2 py-1 sm:min-h-0 sm:px-2.5',
          lang === 'en'
            ? invert
              ? 'bg-white text-navy'
              : 'bg-navy text-white'
            : invert
              ? 'text-white/70'
              : 'text-muted',
        )}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('mr')}
        className={cn(
          'min-h-9 rounded-full px-2 py-1 sm:min-h-0 sm:px-2.5',
          lang === 'mr'
            ? invert
              ? 'bg-white text-navy'
              : 'bg-navy text-white'
            : invert
              ? 'text-white/70'
              : 'text-muted',
        )}
        aria-pressed={lang === 'mr'}
      >
        मराठी
      </button>
    </div>
  );
}
