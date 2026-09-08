import { PageHero } from '@/components/layout/PageHero';
import { Seo } from '@/components/layout/Seo';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { SystemExplainer } from '@/components/sections/SystemExplainer';
import { SurveyPrep } from '@/components/sections/SurveyPrep';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { useLanguage } from '@/i18n/useLanguage';
import { RelatedLinks } from '@/components/layout/RelatedLinks';
import { breadcrumbJsonLd } from '@/lib/schema';
import { ROUTES } from '@/config/site';

export function HowItWorksPage() {
  const { t } = useLanguage();

  return (
    <>
      <Seo
        copy={t.seo.howItWorks}
        path={ROUTES.howItWorks}
        jsonLd={breadcrumbJsonLd([
          { name: t.common.homeLabel, path: '/' },
          { name: t.howItWorks.title, path: ROUTES.howItWorks },
        ])}
      />
      <PageHero
        eyebrow={t.howItWorks.eyebrow}
        title={t.howItWorks.title}
        body={t.howItWorks.intro}
      />
      <ProcessTimeline hideHeading />
      <SystemExplainer />
      <SurveyPrep />
      <div className="wrap pb-12">
        <RelatedLinks links={t.howItWorks.related} />
      </div>
      <FinalCTA />
    </>
  );
}
