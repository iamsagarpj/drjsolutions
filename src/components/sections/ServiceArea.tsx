import { MapPin } from 'lucide-react';
import { BUSINESS } from '@/config/site';
import { useLanguage } from '@/i18n/useLanguage';
import { Reveal } from '@/components/ui/Reveal';

export function ServiceArea() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-line bg-paper">
      <Reveal className="wrap flex flex-col gap-4 py-8 sm:flex-row sm:items-start sm:gap-8 sm:py-10">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sun-soft text-sun-deep">
          <MapPin className="size-5" aria-hidden />
        </span>
        <div className="min-w-0">
          <h2 className="text-xl sm:text-2xl">{t.details.serviceAreaTitle}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {t.details.serviceAreaBody}
          </p>
          <p className="mt-3 text-sm font-medium text-navy">
            {BUSINESS.address.line1}, {BUSINESS.address.line3}, {BUSINESS.address.city}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
