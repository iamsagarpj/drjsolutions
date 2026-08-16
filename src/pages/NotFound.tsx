import { Link } from 'react-router-dom';
import { Seo } from '@/components/layout/Seo';
import { useLanguage } from '@/i18n/useLanguage';
import { ROUTES } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { useLeadModal } from '@/components/lead/useLeadModal';

export function NotFoundPage() {
  const { t } = useLanguage();
  const { openModal } = useLeadModal();

  return (
    <section className="sun-field py-16 sm:py-24">
      <Seo copy={t.seo.notFound} path="/404" />
      <div className="wrap-narrow px-1 text-center">
        <p className="font-display text-sm font-semibold tracking-[0.2em] text-sun-deep">404</p>
        <h1 className="mt-3 text-[clamp(1.6rem,5vw,2.4rem)]">{t.notFound.title}</h1>
        <p className="mt-4 text-sm text-muted sm:text-base">{t.notFound.body}</p>
        <div className="cta-row mt-8 justify-center">
          <Link to={ROUTES.home} className="btn btn-navy">
            {t.common.backToHome}
          </Link>
          <Button onClick={() => openModal('404')}>{t.cta.freeSurvey}</Button>
        </div>
      </div>
    </section>
  );
}
