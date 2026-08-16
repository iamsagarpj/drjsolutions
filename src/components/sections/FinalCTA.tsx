import { Button, ButtonLink } from '@/components/ui/Button';
import { useLanguage } from '@/i18n/useLanguage';
import { useLeadModal } from '@/components/lead/useLeadModal';
import { PHONE_DISPLAY, telUrl } from '@/config/site';
import { Phone } from 'lucide-react';

export function FinalCTA() {
  const { t } = useLanguage();
  const { openModal } = useLeadModal();

  return (
    <section className="navy-field">
      <div className="wrap-wide py-12 text-center sm:py-16">
        <h2 className="font-display text-[clamp(1.55rem,4vw,2.5rem)] font-bold leading-tight text-white">
          {t.home.finalTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75 sm:text-base">
          {t.home.finalBody}
        </p>
        <div className="cta-row mt-8 justify-center">
          <Button onClick={() => openModal('final_cta')}>{t.cta.bookSurvey}</Button>
          <ButtonLink variant="light" href={telUrl()}>
            <Phone className="size-4 shrink-0" /> {PHONE_DISPLAY}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
