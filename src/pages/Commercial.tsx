import { PageHero } from '@/components/layout/PageHero';
import { Seo } from '@/components/layout/Seo';
import { Button } from '@/components/ui/Button';
import { SurveyPrep } from '@/components/sections/SurveyPrep';
import { useLanguage } from '@/i18n/useLanguage';
import { useLeadModal } from '@/components/lead/useLeadModal';
import { ROUTES } from '@/config/site';
import { Check } from 'lucide-react';

export function CommercialPage() {
  const { t } = useLanguage();
  const { openModal } = useLeadModal();
  const p = t.commercial;

  return (
    <>
      <Seo copy={t.seo.commercial} path={ROUTES.commercial} />
      <PageHero eyebrow={p.eyebrow} title={p.title} body={p.intro} />
      <section className="section-y">
        <div className="wrap grid gap-8 lg:grid-cols-2 lg:gap-10">
          <img
            src="/images/residential.jpg"
            alt="Commercial rooftop solar installation at sunset"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
            loading="lazy"
          />
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl">{p.whoTitle}</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {p.who.map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-leaf" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl bg-sun-soft px-4 py-3 text-sm text-navy">{p.note}</p>
            <Button className="mt-6 w-full sm:w-auto" onClick={() => openModal('commercial')}>
              {t.cta.discussCommercial}
            </Button>
          </div>
        </div>
        <div className="wrap mt-10 grid gap-4 sm:grid-cols-2">
          {p.benefits.map((b) => (
            <article key={b.title} className="card p-5 sm:p-6">
              <h3 className="text-lg">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
            </article>
          ))}
        </div>
      </section>
      <SurveyPrep />
    </>
  );
}
