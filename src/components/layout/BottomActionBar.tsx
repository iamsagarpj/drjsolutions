import { Phone, MessageCircle, FileText } from 'lucide-react';
import { telUrl, whatsappUrl } from '@/config/site';
import { useLanguage } from '@/i18n/useLanguage';
import { useLeadModal } from '@/components/lead/useLeadModal';
import { track } from '@/services/analytics';

export function BottomActionBar() {
  const { t } = useLanguage();
  const { openModal } = useLeadModal();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-16px_rgba(16,14,12,0.35)] backdrop-blur xl:hidden">
      <div className="grid grid-cols-3">
        <a
          href={telUrl()}
          onClick={() => track('call_click', { source: 'mobile_bar' })}
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 text-[0.7rem] font-semibold text-navy"
        >
          <Phone className="size-4" aria-hidden />
          {t.common.call}
        </a>
        <a
          href={whatsappUrl()}
          onClick={() => track('whatsapp_click', { source: 'mobile_bar' })}
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 border-x border-line text-[0.7rem] font-semibold text-navy"
        >
          <MessageCircle className="size-4" aria-hidden />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={() => openModal('mobile_bar')}
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 bg-sun text-[0.7rem] font-semibold text-white"
        >
          <FileText className="size-4" aria-hidden />
          {t.common.quote}
        </button>
      </div>
    </div>
  );
}
