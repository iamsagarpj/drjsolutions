import { Check } from 'lucide-react';
import { useLanguage } from '@/i18n/useLanguage';
import { Button } from '@/components/ui/Button';
import { useLeadModal } from '@/components/lead/useLeadModal';

export function SurveyPrep() {
  const { t } = useLanguage();
  const { openModal } = useLeadModal();

  return (
    <section className="section-y">
      <div className="wrap grid items-start gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="text-[clamp(1.45rem,3.4vw,2.1rem)] leading-tight">
            {t.details.surveyPrepTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {t.home.processBody}
          </p>
          <Button className="mt-6 w-full sm:w-auto" onClick={() => openModal('survey_prep')}>
            {t.cta.bookSurvey}
          </Button>
        </div>
        <ol className="grid gap-3 sm:grid-cols-2">
          {t.details.surveyPrep.map((item, i) => (
            <li key={item} className="flex gap-3 rounded-2xl border border-line bg-paper p-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-navy font-display text-xs text-sun-bright">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-sm leading-relaxed text-ink">{item}</span>
            </li>
          ))}
        </ol>
        <p className="flex items-start gap-2 text-sm text-muted lg:col-span-2">
          <Check className="mt-0.5 size-4 shrink-0 text-leaf" aria-hidden />
          {t.residential.processNote}
        </p>
      </div>
    </section>
  );
}
