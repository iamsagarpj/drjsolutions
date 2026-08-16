import { PageHero } from '@/components/layout/PageHero';
import { Seo } from '@/components/layout/Seo';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/i18n/useLanguage';
import { useLeadModal } from '@/components/lead/useLeadModal';
import { ROUTES } from '@/config/site';
import { SUBSIDY_CONFIG } from '@/config/calculator';
import { track } from '@/services/analytics';

export function SubsidyPage() {
  const { t } = useLanguage();
  const { openModal } = useLeadModal();
  const p = t.subsidy;

  return (
    <>
      <Seo copy={t.seo.subsidy} path={ROUTES.subsidy} />
      <PageHero eyebrow={p.eyebrow} title={p.title} body={p.intro} />
      <section className="section-y">
        <div className="wrap">
          <p className="rounded-2xl border border-sun/20 bg-sun-soft px-5 py-4 text-sm leading-relaxed text-navy">
            {p.disclaimer}
            {SUBSIDY_CONFIG.lastVerifiedOn
              ? ` Last verified: ${SUBSIDY_CONFIG.lastVerifiedOn}.`
              : ''}
          </p>
          <div className="mt-8 grid gap-4">
            {p.sections.map((s, i) => (
              <article key={s.title} className="card p-5 sm:p-6">
                <p className="font-display text-sm text-sun-deep">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-1 text-xl">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
              </article>
            ))}
          </div>
          {SUBSIDY_CONFIG.amounts ? (
            <div className="mt-8 card p-6">
              <h2 className="text-xl">Current published amounts</h2>
              <p className="mt-2 text-muted">{SUBSIDY_CONFIG.amounts.residential}</p>
              <p className="mt-2 text-sm text-faint">{SUBSIDY_CONFIG.amounts.notes}</p>
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-line-strong bg-sky p-6">
              <h2 className="text-xl">Subsidy figures</h2>
              <p className="mt-2 text-sm text-muted">
                Amounts are not listed here until they are verified from an official source and
                entered in
                <code className="mx-1 rounded bg-paper px-1.5 py-0.5 text-xs">
                  src/config/calculator.ts
                </code>
                (`SUBSIDY_CONFIG.amounts`).
              </p>
            </div>
          )}
          <ul className="mt-6 text-sm text-muted">
            {SUBSIDY_CONFIG.officialSources.map((src) => (
              <li key={src.url}>
                <a
                  className="underline underline-offset-2 hover:text-navy"
                  href={src.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {src.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-2xl bg-navy px-5 py-8 text-white sm:mt-12 sm:px-8">
            <h2 className="text-xl text-white sm:text-2xl">{p.helpTitle}</h2>
            <p className="mt-3 max-w-2xl text-sm text-white/75 sm:text-base">{p.helpBody}</p>
            <Button
              className="mt-6 w-full sm:w-auto"
              onClick={() => {
                track('subsidy_cta_click', { source: 'page' });
                openModal('subsidy');
              }}
            >
              {t.cta.talkToDrj}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
