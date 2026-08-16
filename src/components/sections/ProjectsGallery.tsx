import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { useLanguage } from '@/i18n/useLanguage';
import { ROUTES } from '@/config/site';
import { track } from '@/services/analytics';

export function ProjectsGallery({
  limit,
  hideHeading = false,
}: {
  limit?: number;
  hideHeading?: boolean;
}) {
  const { t } = useLanguage();
  const items = limit ? t.projects.items.slice(0, limit) : t.projects.items;

  return (
    <section className={hideHeading ? 'section-y' : 'sky-field section-y'}>
      <div className="wrap">
        {hideHeading ? null : (
          <Reveal>
            <SectionHeading title={t.home.projectsTitle} body={t.home.projectsBody} />
          </Reveal>
        )}
        <Stagger className={`${hideHeading ? 'mt-0' : 'mt-10'} grid gap-5 sm:grid-cols-2`}>
          {items.map((item) => (
            <StaggerItem key={item.id}>
              <article className="card overflow-hidden">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.propertyType}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                    onClick={() => track('project_view', { id: item.id })}
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy-muted">
                    {item.propertyType} · {item.location}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        {limit ? (
          <div className="mt-8 text-center">
            <Link to={ROUTES.projects} className="btn btn-ghost">
              {t.common.readMore}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
