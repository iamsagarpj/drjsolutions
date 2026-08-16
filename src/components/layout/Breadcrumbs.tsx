import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/config/site';
import { useLanguage } from '@/i18n/useLanguage';

export function Breadcrumbs({ light = false }: { light?: boolean }) {
  const { pathname } = useLocation();
  const { t } = useLanguage();
  if (pathname === ROUTES.home) return null;

  const labels: Record<string, string> = {
    [ROUTES.about]: t.nav.find((n) => n.id === 'about')?.label ?? 'About',
    [ROUTES.residential]: t.home.residentialCard.title,
    [ROUTES.commercial]: t.home.commercialCard.title,
    [ROUTES.subsidy]: t.nav.find((n) => n.id === 'subsidy')?.label ?? 'Subsidy',
    [ROUTES.howItWorks]: t.nav.find((n) => n.id === 'how')?.label ?? 'How it works',
    [ROUTES.calculator]: t.calculator.title,
    [ROUTES.projects]: t.nav.find((n) => n.id === 'projects')?.label ?? 'Projects',
    [ROUTES.faq]: t.nav.find((n) => n.id === 'faq')?.label ?? 'FAQ',
    [ROUTES.contact]: t.footer.contact,
    [ROUTES.privacy]: t.footer.privacy,
    [ROUTES.terms]: t.footer.terms,
  };

  const current = labels[pathname];
  if (!current) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={light ? 'mb-4 text-sm text-paper/55' : 'mb-4 text-sm text-muted'}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link to={ROUTES.home} className={light ? 'hover:text-paper' : 'hover:text-navy'}>
            {t.common.homeLabel}
          </Link>
        </li>
        <li aria-hidden className={light ? 'text-paper/35' : 'text-faint'}>
          /
        </li>
        <li className={light ? 'font-medium text-paper' : 'font-medium text-navy'}>{current}</li>
      </ol>
    </nav>
  );
}
