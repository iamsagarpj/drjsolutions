import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS, PHONE_DISPLAY, telUrl, whatsappUrl } from '@/config/site';
import { track } from '@/services/analytics';
import { useLanguage } from '@/i18n/useLanguage';

export function TopBar() {
  const { t } = useLanguage();

  return (
    <div className="hidden border-b border-navy-deep/40 bg-navy text-white md:block">
      <div className="wrap-wide flex h-9 items-center justify-between gap-3 text-[0.75rem] font-medium">
        <p className="flex min-w-0 items-center gap-1.5 truncate text-white/75">
          <MapPin className="size-3.5 shrink-0 text-sun-bright" aria-hidden />
          {BUSINESS.address.line3}, {BUSINESS.address.city}
        </p>
        <div className="flex shrink-0 items-center gap-4">
          <a
            href={telUrl()}
            className="inline-flex items-center gap-1.5 text-white/90 hover:text-sun-bright"
            onClick={() => track('call_click', { source: 'topbar' })}
          >
            <Phone className="size-3.5" aria-hidden />
            {PHONE_DISPLAY}
          </a>
          <a
            href={whatsappUrl()}
            className="inline-flex items-center gap-1.5 text-white/90 hover:text-sun-bright"
            onClick={() => track('whatsapp_click', { source: 'topbar' })}
          >
            <MessageCircle className="size-3.5" aria-hidden />
            {t.cta.whatsapp}
          </a>
        </div>
      </div>
    </div>
  );
}
