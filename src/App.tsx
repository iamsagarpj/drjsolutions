import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { LeadModalProvider } from '@/components/lead/LeadModalContext';
import { AppLanguageProvider } from '@/i18n/AppLanguageProvider';
import { ROUTES } from '@/config/site';

const HomePage = lazy(() => import('@/pages/Home').then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('@/pages/About').then((m) => ({ default: m.AboutPage })));
const ResidentialPage = lazy(() =>
  import('@/pages/Residential').then((m) => ({ default: m.ResidentialPage })),
);
const CommercialPage = lazy(() =>
  import('@/pages/Commercial').then((m) => ({ default: m.CommercialPage })),
);
const IndustrialPage = lazy(() =>
  import('@/pages/Industrial').then((m) => ({ default: m.IndustrialPage })),
);
const OnGridPage = lazy(() => import('@/pages/SystemTypes').then((m) => ({ default: m.OnGridPage })));
const OffGridPage = lazy(() =>
  import('@/pages/SystemTypes').then((m) => ({ default: m.OffGridPage })),
);
const HybridPage = lazy(() => import('@/pages/SystemTypes').then((m) => ({ default: m.HybridPage })));
const MaintenancePage = lazy(() =>
  import('@/pages/SystemTypes').then((m) => ({ default: m.MaintenancePage })),
);
const CostPage = lazy(() => import('@/pages/SystemTypes').then((m) => ({ default: m.CostPage })));
const SubsidyPage = lazy(() => import('@/pages/Subsidy').then((m) => ({ default: m.SubsidyPage })));
const HowItWorksPage = lazy(() =>
  import('@/pages/HowItWorks').then((m) => ({ default: m.HowItWorksPage })),
);
const CalculatorPage = lazy(() =>
  import('@/pages/Calculator').then((m) => ({ default: m.CalculatorPage })),
);
const ProjectsPage = lazy(() =>
  import('@/pages/Projects').then((m) => ({ default: m.ProjectsPage })),
);
const FAQPage = lazy(() => import('@/pages/FAQ').then((m) => ({ default: m.FAQPage })));
const ContactPage = lazy(() => import('@/pages/Contact').then((m) => ({ default: m.ContactPage })));
const GuidesHubPage = lazy(() =>
  import('@/pages/Guides').then((m) => ({ default: m.GuidesHubPage })),
);
const GuideSataraPage = lazy(() =>
  import('@/pages/Guides').then((m) => ({ default: m.GuideSataraPage })),
);
const GuideSystemTypesPage = lazy(() =>
  import('@/pages/Guides').then((m) => ({ default: m.GuideSystemTypesPage })),
);
const GuideSizingPage = lazy(() =>
  import('@/pages/Guides').then((m) => ({ default: m.GuideSizingPage })),
);
const PrivacyPage = lazy(() => import('@/pages/Legal').then((m) => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('@/pages/Legal').then((m) => ({ default: m.TermsPage })));
const NotFoundPage = lazy(() =>
  import('@/pages/NotFound').then((m) => ({ default: m.NotFoundPage })),
);

function PageFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center" role="status">
      <span className="sr-only">Loading</span>
      <span className="size-8 animate-pulse rounded-full bg-sun" />
    </div>
  );
}

export default function App() {
  return (
    <AppLanguageProvider>
      <LeadModalProvider>
        <BrowserRouter>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path={ROUTES.home} element={<HomePage />} />
                <Route path={ROUTES.about} element={<AboutPage />} />
                <Route path={ROUTES.residential} element={<ResidentialPage />} />
                <Route path={ROUTES.commercial} element={<CommercialPage />} />
                <Route path={ROUTES.industrial} element={<IndustrialPage />} />
                <Route path={ROUTES.onGrid} element={<OnGridPage />} />
                <Route path={ROUTES.offGrid} element={<OffGridPage />} />
                <Route path={ROUTES.hybrid} element={<HybridPage />} />
                <Route path={ROUTES.maintenance} element={<MaintenancePage />} />
                <Route path={ROUTES.cost} element={<CostPage />} />
                <Route path={ROUTES.subsidy} element={<SubsidyPage />} />
                <Route path={ROUTES.howItWorks} element={<HowItWorksPage />} />
                <Route path={ROUTES.calculator} element={<CalculatorPage />} />
                <Route path={ROUTES.projects} element={<ProjectsPage />} />
                <Route path={ROUTES.faq} element={<FAQPage />} />
                <Route path={ROUTES.contact} element={<ContactPage />} />
                <Route path={ROUTES.guides} element={<GuidesHubPage />} />
                <Route path={ROUTES.guideSatara} element={<GuideSataraPage />} />
                <Route path={ROUTES.guideSystemTypes} element={<GuideSystemTypesPage />} />
                <Route path={ROUTES.guideSizing} element={<GuideSizingPage />} />
                <Route path={ROUTES.privacy} element={<PrivacyPage />} />
                <Route path={ROUTES.terms} element={<TermsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LeadModalProvider>
    </AppLanguageProvider>
  );
}
