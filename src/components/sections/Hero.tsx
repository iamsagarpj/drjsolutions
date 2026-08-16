import { Phone, ShieldCheck, SunMedium, Wrench, MapPinned } from 'lucide-react';
import { Button, ButtonLink } from '@/components/ui/Button';
import { useLanguage } from '@/i18n/useLanguage';
import { useLeadModal } from '@/components/lead/useLeadModal';
import { PHONE_DISPLAY, telUrl } from '@/config/site';
import { track } from '@/services/analytics';
import { Reveal } from '@/components/ui/Reveal';

const TRUST_ICONS = [SunMedium, MapPinned, ShieldCheck, Wrench];

export function Hero() {
  const { t } = useLanguage();
  const { openModal } = useLeadModal();

  return (
    <section className="bg-paper">
      <div className="grid lg:min-h-[min(42rem,calc(100svh-7.5rem))] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-[var(--gutter)] py-10 sm:py-14 lg:py-16 lg:pl-[max(var(--gutter),calc((100vw-var(--container-wide))/2))] lg:pr-10 xl:pr-16">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sun-deep">
              {t.home.heroEyebrow}
            </p>
            <h1 className="mt-3 max-w-xl text-[clamp(1.85rem,4.6vw,3.35rem)] font-bold leading-[1.12] text-navy">
              {t.home.heroTitle}
            </h1>
            <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-muted sm:mt-5 sm:text-lg">
              {t.home.heroBody}
            </p>
            <div className="cta-row mt-7 sm:mt-8">
              <Button
                onClick={() => {
                  track('hero_cta_click', { cta: 'survey' });
                  openModal('hero');
                }}
              >
                {t.cta.freeSurvey}
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  track('hero_cta_click', { cta: 'quote' });
                  openModal('hero_quote');
                }}
              >
                {t.cta.freeQuote}
              </Button>
              <ButtonLink
                variant="ghost"
                href={telUrl()}
                className="hidden sm:inline-flex"
                onClick={() => track('call_click', { source: 'hero' })}
              >
                <Phone className="size-4 shrink-0" aria-hidden />
                {t.cta.callNow} {PHONE_DISPLAY}
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <div className="relative min-h-[16.5rem] sm:min-h-[22rem] lg:min-h-full">
          <img
            src="/images/rooftop-india.jpg"
            alt="Rooftop solar panels on a residential roof in bright sunlight"
            width={1400}
            height={933}
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>

      <div className="border-y border-line bg-sand">
        <ul className="wrap-wide grid grid-cols-2 sm:grid-cols-4">
          {t.home.trust.map((item, i) => {
            const Icon = TRUST_ICONS[i] ?? SunMedium;
            return (
              <li
                key={item.title}
                className="border-line px-4 py-4 sm:px-6 sm:py-5 [&:nth-child(odd)]:border-r sm:[&:not(:last-child)]:border-r"
              >
                <Icon className="size-5 text-sun" aria-hidden />
                <p className="mt-2 text-sm font-semibold leading-snug text-navy sm:text-[0.95rem]">
                  {item.title}
                </p>
                <p className="mt-1 hidden text-xs leading-relaxed text-muted sm:block">
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
