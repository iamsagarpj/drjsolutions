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
      <PageHero title={t.legal.termsTitle} />
      <section className="section-y">
        <Container narrow>
          <div className="space-y-5 text-muted leading-relaxed">
            {t.legal.termsBody.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
