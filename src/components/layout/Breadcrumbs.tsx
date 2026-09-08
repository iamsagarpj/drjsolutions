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
    [ROUTES.industrial]: t.industrial.eyebrow,
    [ROUTES.onGrid]: t.onGrid.eyebrow,
    [ROUTES.offGrid]: t.offGrid.eyebrow,
    [ROUTES.hybrid]: t.hybrid.eyebrow,
    [ROUTES.maintenance]: t.maintenance.eyebrow,
    [ROUTES.cost]: t.cost.eyebrow,
    [ROUTES.subsidy]: t.nav.find((n) => n.id === 'subsidy')?.label ?? 'Subsidy',
    [ROUTES.howItWorks]: t.nav.find((n) => n.id === 'how')?.label ?? 'How it works',
    [ROUTES.calculator]: t.calculator.title,
    [ROUTES.projects]: t.nav.find((n) => n.id === 'projects')?.label ?? 'Projects',
    [ROUTES.faq]: t.nav.find((n) => n.id === 'faq')?.label ?? 'FAQ',
    [ROUTES.contact]: t.footer.contact,
    [ROUTES.guides]: t.guidesHub.eyebrow,
    [ROUTES.guideSatara]: t.guideSatara.eyebrow,
    [ROUTES.guideSystemTypes]: t.guideSystemTypes.eyebrow,
    [ROUTES.guideSizing]: t.guideSizing.eyebrow,
    [ROUTES.privacy]: t.footer.privacy,
    [ROUTES.terms]: t.footer.terms,
  };

  const current = labels[pathname];
  if (!current) return null;

  const trail: Array<{ to?: string; label: string }> = [{ to: ROUTES.home, label: t.common.homeLabel }];
  if (pathname.startsWith('/guides/') && pathname !== ROUTES.guides) {
    trail.push({ to: ROUTES.guides, label: t.guidesHub.eyebrow });
  }
  trail.push({ label: current });

  return (
    <nav
      aria-label="Breadcrumb"
      className={light ? 'mb-4 text-sm text-paper/55' : 'mb-4 text-sm text-muted'}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {trail.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
            {index > 0 ? (
              <span aria-hidden className={light ? 'text-paper/35' : 'text-faint'}>
                /
              </span>
            ) : null}
            {item.to ? (
              <Link to={item.to} className={light ? 'hover:text-paper' : 'hover:text-navy'}>
                {item.label}
              </Link>
            ) : (
              <span className={light ? 'font-medium text-paper' : 'font-medium text-navy'}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
