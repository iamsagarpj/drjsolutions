import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useLeadModal } from '@/components/lead/useLeadModal';
import { LeadForm } from '@/components/lead/LeadForm';
import { useLanguage } from '@/i18n/useLanguage';

export function LeadModal() {
  const { open, source, closeModal } = useLeadModal();
  const { t } = useLanguage();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, closeModal]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-navy-deep/55"
        aria-label={t.common.closeMenu}
        onClick={closeModal}
      />
      <div className="relative z-10 flex max-h-[min(92dvh,calc(100dvh-2rem))] w-full flex-col overflow-hidden rounded-t-3xl bg-paper shadow-lift sm:max-w-2xl sm:rounded-3xl">
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-line px-4 py-3 sm:px-6 sm:py-4">
          <h2
            id="lead-modal-title"
            className="min-w-0 font-display text-lg leading-snug text-navy sm:text-xl"
          >
            {t.form.title}
          </h2>
          <button
            type="button"
            onClick={closeModal}
            className="rounded-full p-2 text-muted hover:bg-sand"
            aria-label={t.common.closeMenu}
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="min-h-0 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5">
          <LeadForm source={source} compact />
        </div>
      </div>
    </div>
  );
}
