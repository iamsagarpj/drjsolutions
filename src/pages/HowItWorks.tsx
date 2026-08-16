import { PageHero } from '@/components/layout/PageHero';
import { Seo } from '@/components/layout/Seo';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { SystemExplainer } from '@/components/sections/SystemExplainer';
import { SurveyPrep } from '@/components/sections/SurveyPrep';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { useLanguage } from '@/i18n/useLanguage';
import { ROUTES } from '@/config/site';

export function HowItWorksPage() {
  const { t } = useLanguage();

  return (
    <>
      <Seo copy={t.seo.howItWorks} path={ROUTES.howItWorks} />
      <PageHero
        eyebrow={t.howItWorks.eyebrow}
        title={t.howItWorks.title}
        body={t.howItWorks.intro}
      />
      <ProcessTimeline hideHeading />
      <SystemExplainer />
      <SurveyPrep />
      <FinalCTA />
    </>
  );
}
