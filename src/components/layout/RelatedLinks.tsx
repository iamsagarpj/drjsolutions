import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/useLanguage';
import type { RelatedLink } from '@/content/types';

export function RelatedLinks({ links }: { links: RelatedLink[] }) {
  const { t } = useLanguage();
  if (!links.length) return null;

  return (
    <nav className="mt-12 border-t border-line pt-8" aria-label={t.common.relatedTitle}>
      <h2 className="text-xl sm:text-2xl">{t.common.relatedTitle}</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {links.map((link) => (
          <li key={`${link.to}-${link.label}`}>
            <Link
              to={link.to}
              className="inline-flex items-start gap-2 text-sm font-semibold text-navy underline-offset-4 hover:underline"
            >
              <ArrowRight className="mt-0.5 size-4 shrink-0" aria-hidden />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
