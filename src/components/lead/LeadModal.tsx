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
      className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center"
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
      <div className="relative z-10 max-h-[min(92dvh,40rem)] w-full overflow-y-auto rounded-t-3xl bg-paper p-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-lift sm:max-w-lg sm:rounded-3xl sm:p-7">
        <div className="mb-5 flex items-start justify-between gap-4">
          <h2 id="lead-modal-title" className="min-w-0 font-display text-xl text-navy sm:text-2xl">
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
        <LeadForm source={source} compact />
      </div>
    </div>
  );
}
