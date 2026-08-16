import { Seo } from '@/components/layout/Seo';
import { Hero } from '@/components/sections/Hero';
import { ProblemSolution } from '@/components/sections/ProblemSolution';
import { WhySolar } from '@/components/sections/WhySolar';
import { Advantages } from '@/components/sections/Advantages';
import { SolutionsPreview } from '@/components/sections/SolutionsPreview';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { SubsidyPreview } from '@/components/sections/SubsidyPreview';
import { ProjectsGallery } from '@/components/sections/ProjectsGallery';
import { FAQPreview } from '@/components/sections/FAQPreview';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { ServiceArea } from '@/components/sections/ServiceArea';
import { SystemExplainer } from '@/components/sections/SystemExplainer';
import { SurveyPrep } from '@/components/sections/SurveyPrep';
import { SavingsCalculator } from '@/components/calculator/SavingsCalculator';
import { Container } from '@/components/ui/Container';
import { useLanguage } from '@/i18n/useLanguage';
import { localBusinessJsonLd } from '@/lib/schema';
import { ROUTES } from '@/config/site';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

export function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <Seo copy={t.seo.home} path={ROUTES.home} jsonLd={localBusinessJsonLd()} />
      <Hero />
      <ServiceArea />
      <ProblemSolution />
      <WhySolar />
      <SystemExplainer />
      <Advantages />
      <SolutionsPreview />
      <ProcessTimeline />
      <SurveyPrep />
      <section className="section-y">
        <Container>
          <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            <h2 className="max-w-xl text-[clamp(1.45rem,4vw,2.25rem)] leading-tight">
              {t.cta.checkSavings}
            </h2>
            <Link
              to={ROUTES.calculator}
              className="text-sm font-semibold text-navy underline underline-offset-4"
            >
              {t.common.learnMore}
            </Link>
          </div>
          <p className="mb-6 max-w-3xl text-sm text-muted">{t.details.calculatorAssumptions}</p>
          <SavingsCalculator embedded />
        </Container>
      </section>
      <SubsidyPreview />
      <ProjectsGallery limit={2} />
      <FAQPreview />
      <section className="wrap pb-4">
        <div className="rounded-2xl border border-line bg-paper px-5 py-8 text-center sm:px-8">
          <p className="font-display text-lg text-navy">{t.common.comingSoon}</p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted">
            {t.common.customerStoriesSoon}
          </p>
        </div>
      </section>
      <FinalCTA />
      <section className="border-t border-line bg-paper py-10 sm:py-12">
        <Container className="flex flex-col items-stretch justify-between gap-6 sm:flex-row sm:items-center">
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl">{t.contact.title}</h2>
            <p className="mt-2 max-w-lg text-sm text-muted sm:text-base">{t.contact.intro}</p>
          </div>
          <Link to={ROUTES.contact} className="btn btn-navy w-full sm:w-auto">
            <MessageCircle className="size-4" /> {t.footer.contact}
          </Link>
        </Container>
      </section>
    </>
  );
}
