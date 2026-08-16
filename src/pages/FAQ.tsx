import { PageHero } from '@/components/layout/PageHero';
import { Seo } from '@/components/layout/Seo';
import { Accordion } from '@/components/ui/Accordion';
import { Container } from '@/components/ui/Container';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { useLanguage } from '@/i18n/useLanguage';
import { ROUTES } from '@/config/site';
import { faqJsonLd } from '@/lib/schema';

export function FAQPage() {
  const { t } = useLanguage();

  return (
    <>
      <Seo copy={t.seo.faq} path={ROUTES.faq} jsonLd={faqJsonLd(t.faq.items)} />
      <PageHero eyebrow={t.faq.eyebrow} title={t.faq.title} body={t.faq.intro} />
      <section className="section-y">
        <Container>
          <Accordion items={t.faq.items} />
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
