import { PageHero } from '@/components/layout/PageHero';
import { Seo } from '@/components/layout/Seo';
import { SavingsCalculator } from '@/components/calculator/SavingsCalculator';
import { Container } from '@/components/ui/Container';
import { useLanguage } from '@/i18n/useLanguage';
import { ROUTES } from '@/config/site';

export function CalculatorPage() {
  const { t } = useLanguage();

  return (
    <>
      <Seo copy={t.seo.calculator} path={ROUTES.calculator} />
      <PageHero
        eyebrow={t.calculator.eyebrow}
        title={t.calculator.title}
        body={t.calculator.intro}
      />
      <section className="section-y">
        <Container>
          <p className="mb-6 max-w-3xl text-sm text-muted">{t.details.calculatorAssumptions}</p>
          <SavingsCalculator embedded />
        </Container>
      </section>
    </>
  );
}
