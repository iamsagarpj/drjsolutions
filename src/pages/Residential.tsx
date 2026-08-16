import { PageHero } from '@/components/layout/PageHero';
import { Seo } from '@/components/layout/Seo';
import { Button } from '@/components/ui/Button';
import { SystemExplainer } from '@/components/sections/SystemExplainer';
import { SurveyPrep } from '@/components/sections/SurveyPrep';
import { useLanguage } from '@/i18n/useLanguage';
import { useLeadModal } from '@/components/lead/useLeadModal';
import { ROUTES } from '@/config/site';
import { Check } from 'lucide-react';

export function ResidentialPage() {
  const { t } = useLanguage();
  const { openModal } = useLeadModal();
  const p = t.residential;

  return (
    <>
      <Seo copy={t.seo.residential} path={ROUTES.residential} />
      <PageHero eyebrow={p.eyebrow} title={p.title} body={p.intro} />
      <section className="section-y">
        <div className="wrap grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl">{p.whatTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{p.what}</p>
            <img
              src="/images/rooftop-india.jpg"
              alt="Residential rooftop solar close-up"
              className="mt-6 aspect-[16/10] w-full rounded-2xl object-cover"
              loading="lazy"
            />
            <div className="mt-6 rounded-2xl border border-line bg-sky p-5">
              <h3 className="text-lg">{t.details.terraceNoteTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t.details.terraceNote}</p>
            </div>
          </div>
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl">{p.whoTitle}</h2>
            <ul className="mt-4 space-y-3">
              {p.who.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink">
                  <Check className="mt-0.5 size-4 shrink-0 text-leaf" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-4">
              <h2 className="text-xl sm:text-2xl">{p.benefitsTitle}</h2>
              {p.benefits.map((b) => (
                <article key={b.title} className="rounded-2xl border border-line bg-paper p-5">
                  <h3 className="text-base">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted">{b.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="wrap mt-12 sm:mt-14">
          <h2 className="text-xl sm:text-2xl">{p.factorsTitle}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {p.factors.map((f, i) => (
              <article key={f.title} className="card p-5">
                <p className="font-display text-sm text-sun-deep">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 text-base">{f.title}</h3>
                <p className="mt-2 text-sm text-muted">{f.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm text-muted">{p.processNote}</p>
          <Button className="mt-6 w-full sm:w-auto" onClick={() => openModal('residential')}>
            {t.cta.bookSurvey}
          </Button>
        </div>
      </section>
      <SystemExplainer />
      <SurveyPrep />
    </>
  );
}
