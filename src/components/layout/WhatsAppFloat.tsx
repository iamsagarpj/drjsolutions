import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/config/site';
import { track } from '@/services/analytics';
import { useLanguage } from '@/i18n/useLanguage';

export function WhatsAppFloat() {
  const { t } = useLanguage();
  return (
    <a
      href={whatsappUrl()}
      onClick={() => track('whatsapp_click', { source: 'float' })}
      className="fixed bottom-6 right-6 z-40 hidden size-14 items-center justify-center rounded-full bg-[#1f7a4d] text-white shadow-lift transition hover:scale-105 xl:inline-flex"
      aria-label={t.cta.whatsapp}
    >
      <MessageCircle className="size-7" />
    </a>
  );
}
