import { PageHero } from '@/components/layout/PageHero';
import { Seo } from '@/components/layout/Seo';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { ServiceArea } from '@/components/sections/ServiceArea';
import { useLanguage } from '@/i18n/useLanguage';
import { ROUTES } from '@/config/site';

export function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      <Seo copy={t.seo.about} path={ROUTES.about} />
      <PageHero eyebrow={a.eyebrow} title={a.title} body={a.intro} />
      <ServiceArea />
      <section className="section-y">
        <div className="wrap grid gap-4 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          <article className="card p-5 sm:p-6 md:col-span-2 xl:col-span-1">
            <h2 className="text-xl">{a.missionTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{a.mission}</p>
          </article>
          <article className="card p-5 sm:p-6">
            <h2 className="text-xl">{a.approachTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{a.approach}</p>
          </article>
          <article className="card p-5 sm:p-6">
            <h2 className="text-xl">{a.localTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{a.local}</p>
          </article>
        </div>
        <div className="wrap mt-8 grid gap-4 sm:grid-cols-3">
          {a.values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-line bg-paper p-5">
              <h3 className="text-lg">{v.title}</h3>
              <p className="mt-2 text-sm text-muted">{v.text}</p>
            </div>
          ))}
        </div>
        <div className="wrap mt-8 rounded-2xl border border-dashed border-line-strong bg-sky px-5 py-7 sm:px-6 sm:py-8">
          <h2 className="text-xl">{a.ownerPlaceholderTitle}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{a.ownerPlaceholder}</p>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
