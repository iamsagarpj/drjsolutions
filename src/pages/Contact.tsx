import { PageHero } from '@/components/layout/PageHero';
import { Seo } from '@/components/layout/Seo';
import { LeadForm } from '@/components/lead/LeadForm';
import { SurveyPrep } from '@/components/sections/SurveyPrep';
import { useLanguage } from '@/i18n/useLanguage';
import {
  BUSINESS,
  mapsEmbedUrl,
  mapsSearchUrl,
  PHONE_DISPLAY,
  ROUTES,
  telUrl,
  whatsappUrl,
} from '@/config/site';
import { Phone, MessageCircle, MapPin, ExternalLink } from 'lucide-react';
import { track } from '@/services/analytics';
import { localBusinessJsonLd } from '@/lib/schema';

export function ContactPage() {
  const { t } = useLanguage();
  const embed = mapsEmbedUrl();

  return (
    <>
      <Seo copy={t.seo.contact} path={ROUTES.contact} jsonLd={localBusinessJsonLd()} />
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} body={t.contact.intro} />
      <section className="section-y">
        <div className="wrap grid gap-6 md:grid-cols-2 xl:grid-cols-[0.9fr_1.1fr] xl:gap-8">
          <div className="order-2 space-y-4 md:order-1">
            <a
              href={telUrl()}
              onClick={() => track('call_click', { source: 'contact' })}
              className="card flex gap-4 p-4 sm:p-5 hover:shadow-lift"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-sun-soft text-sun-deep">
                <Phone className="size-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-lg text-navy">{t.contact.callTitle}</span>
                <span className="mt-1 block text-sm text-muted">{t.contact.callBody}</span>
                <span className="mt-2 block font-semibold text-navy">{PHONE_DISPLAY}</span>
              </span>
            </a>
            <a
              href={whatsappUrl()}
              onClick={() => track('whatsapp_click', { source: 'contact' })}
              className="card flex gap-4 p-4 sm:p-5 hover:shadow-lift"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-sun-soft text-sun-deep">
                <MessageCircle className="size-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-lg text-navy">{t.contact.waTitle}</span>
                <span className="mt-1 block text-sm text-muted">{t.contact.waBody}</span>
              </span>
            </a>
            <div className="card flex gap-4 p-4 sm:p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-sun-soft text-sun-deep">
                <MapPin className="size-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <h2 className="font-display text-lg text-navy">{t.contact.addressTitle}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {BUSINESS.name}
                  <br />
                  {BUSINESS.address.line1}
                  <br />
                  {BUSINESS.address.line2}
                  <br />
                  {BUSINESS.address.line3}
                  <br />
                  {BUSINESS.address.city}, {BUSINESS.address.state}
                </p>
                <p className="mt-3 text-xs text-faint">{t.contact.hoursPlaceholder}</p>
              </div>
            </div>
          </div>
          <div className="card order-1 p-5 sm:p-8 md:order-2">
            <h2 className="text-xl sm:text-2xl">{t.form.title}</h2>
            <div className="mt-6">
              <LeadForm source="contact_page" />
            </div>
          </div>
        </div>

        <div className="wrap mt-10">
          <h2 className="text-xl sm:text-2xl">{t.contact.mapTitle}</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-sky">
            {embed ? (
              <iframe
                title={t.contact.mapTitle}
                src={embed}
                className="h-64 w-full sm:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex min-h-56 flex-col items-start justify-center gap-4 p-5 sm:min-h-72 sm:p-8">
                <p className="max-w-xl text-sm leading-relaxed text-muted">
                  {t.contact.mapPlaceholder}
                </p>
                <a
                  href={mapsSearchUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-navy w-full sm:w-auto"
                >
                  <ExternalLink className="size-4" /> Google Maps
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
      <SurveyPrep />
    </>
  );
}
