import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/i18n/useLanguage';
import { useLeadModal } from '@/components/lead/useLeadModal';
import { ROUTES } from '@/config/site';
import { track } from '@/services/analytics';

export function SubsidyPreview() {
  const { t } = useLanguage();
  const { openModal } = useLeadModal();

  return (
    <section className="section-y">
      <div className="wrap">
        <div className="overflow-hidden rounded-2xl bg-navy text-white lg:grid lg:grid-cols-2">
          <div className="p-6 sm:p-10">
            <Reveal>
              <SectionHeading invert title={t.home.subsidyTitle} body={t.home.subsidyBody} />
              <div className="cta-row mt-6">
                <Link
                  to={ROUTES.subsidy}
                  className="btn btn-light"
                  onClick={() => track('subsidy_cta_click', { source: 'home' })}
                >
                  {t.home.subsidyCta}
                </Link>
                <Button
                  onClick={() => {
                    track('subsidy_cta_click', { source: 'home_talk' });
                    openModal('subsidy_preview');
                  }}
                >
                  {t.cta.talkToDrj}
                </Button>
              </div>
            </Reveal>
          </div>
          <img
            src="/images/sunlight.jpg"
            alt="Sunlight over a landscape, representing solar energy"
            className="hidden h-full min-h-64 w-full object-cover lg:block"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
