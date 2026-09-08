import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Seo } from '@/components/layout/Seo';
import { GuideArticle } from '@/components/layout/GuideArticle';
import { useLanguage } from '@/i18n/useLanguage';
import { breadcrumbJsonLd } from '@/lib/schema';
import { ROUTES } from '@/config/site';

export function GuidesHubPage() {
  const { t } = useLanguage();
  const hub = t.guidesHub;

  return (
    <>
      <Seo
        copy={t.seo.guides}
        path={ROUTES.guides}
        jsonLd={breadcrumbJsonLd([
          { name: t.common.homeLabel, path: '/' },
          { name: hub.title, path: ROUTES.guides },
        ])}
      />
      <PageHero eyebrow={hub.eyebrow} title={hub.title} body={hub.intro} />
      <section className="section-y">
        <div className="wrap grid gap-4 sm:grid-cols-2">
          {hub.items.map((item) => (
            <Link key={item.to} to={item.to} className="card p-5 hover:shadow-lift sm:p-6">
              <h2 className="text-lg sm:text-xl">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy">
                {t.common.readMore} <ArrowRight className="size-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export function GuideSataraPage() {
  const { t } = useLanguage();
  return <GuideArticle seo={t.seo.guideSatara} path={ROUTES.guideSatara} copy={t.guideSatara} />;
}

export function GuideSystemTypesPage() {
  const { t } = useLanguage();
  return (
    <GuideArticle
      seo={t.seo.guideSystemTypes}
      path={ROUTES.guideSystemTypes}
      copy={t.guideSystemTypes}
    />
  );
}

export function GuideSizingPage() {
  const { t } = useLanguage();
  return <GuideArticle seo={t.seo.guideSizing} path={ROUTES.guideSizing} copy={t.guideSizing} />;
}
