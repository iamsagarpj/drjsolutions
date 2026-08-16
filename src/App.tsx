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
                <Route path={ROUTES.subsidy} element={<SubsidyPage />} />
                <Route path={ROUTES.howItWorks} element={<HowItWorksPage />} />
                <Route path={ROUTES.calculator} element={<CalculatorPage />} />
                <Route path={ROUTES.projects} element={<ProjectsPage />} />
                <Route path={ROUTES.faq} element={<FAQPage />} />
                <Route path={ROUTES.contact} element={<ContactPage />} />
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
