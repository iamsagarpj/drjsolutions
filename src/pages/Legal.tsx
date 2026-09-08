import { PageHero } from '@/components/layout/PageHero';
import { Seo } from '@/components/layout/Seo';
import { Container } from '@/components/ui/Container';
import { useLanguage } from '@/i18n/useLanguage';
import { BUSINESS, ROUTES } from '@/config/site';

export function PrivacyPage() {
  const { t } = useLanguage();
  return (
    <>
      <Seo copy={t.seo.privacy} path={ROUTES.privacy} />
      <PageHero title={t.legal.privacyTitle} />
      <section className="section-y">
        <Container narrow>
          <div className="space-y-5 text-muted leading-relaxed">
            {t.legal.privacyBody.map((p) => (
              <p key={p}>{p.replaceAll('{email}', BUSINESS.email)}</p>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export function TermsPage() {
  const { t } = useLanguage();
  return (
    <>
      <Seo copy={t.seo.terms} path={ROUTES.terms} />
      <PageHero title={t.legal.termsTitle} body={t.legal.termsIntro} />
      <section className="section-y">
        <Container narrow>
          <div className="space-y-8">
            {t.legal.termsSections.map((section) => (
              <article key={section.title}>
                <h2 className="text-lg text-navy sm:text-xl">{section.title}</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
                  {section.body.map((p) => (
                    <p key={p}>{p.replaceAll('{email}', BUSINESS.email)}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
