import { MessageSquare, FileBarChart, MapPinned, PenTool, Hammer, Headset } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/i18n/useLanguage';
import { useLeadModal } from '@/components/lead/useLeadModal';

const ICONS = [MessageSquare, FileBarChart, MapPinned, PenTool, Hammer, Headset];

export function ProcessTimeline({
  showCta = true,
  compact = false,
  hideHeading = false,
}: {
  showCta?: boolean;
  compact?: boolean;
  hideHeading?: boolean;
}) {
  const { t } = useLanguage();
  const { openModal } = useLeadModal();

  return (
    <section className={compact ? 'py-8' : 'sky-field section-y'}>
      <div className="wrap">
        {hideHeading ? null : (
          <Reveal>
            <SectionHeading title={t.home.processTitle} body={t.home.processBody} />
          </Reveal>
        )}

        <ol
          className={`${hideHeading ? 'mt-2' : 'mt-10'} hidden items-stretch xl:grid xl:grid-cols-6 xl:gap-4`}
        >
          {t.howItWorks.steps.map((step, i) => {
            const Icon = ICONS[i] ?? MessageSquare;
            return (
              <li key={step.title} className="relative flex h-full min-w-0 flex-col">
                {i < t.howItWorks.steps.length - 1 ? (
                  <span
                    className="absolute left-[calc(50%+22px)] right-[-8px] top-5 h-px bg-sun/60"
                    aria-hidden
                  />
                ) : null}
                <div className="relative z-10 mx-auto flex size-10 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-sun-bright">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="mt-4 flex h-full min-h-0 flex-1 flex-col rounded-2xl border border-line bg-paper p-4">
                  <Icon className="size-5 shrink-0 text-sun-deep" aria-hidden />
                  <h3 className="mt-3 text-sm">{step.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <ol
          className={`${hideHeading ? 'mt-4' : 'mt-8'} hidden items-stretch gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:hidden`}
        >
          {t.howItWorks.steps.map((step, i) => {
            const Icon = ICONS[i] ?? MessageSquare;
            return (
              <li key={step.title} className="card flex h-full min-w-0 flex-col p-5">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-navy font-display text-xs font-semibold text-sun-bright">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Icon className="size-4 text-sun-deep" aria-hidden />
                </div>
                <h3 className="mt-3 text-base">{step.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            );
          })}
        </ol>

        <ol
          className={`relative ${hideHeading ? 'mt-4' : 'mt-8'} space-y-4 border-l border-sun/50 pl-6 md:hidden`}
        >
          {t.howItWorks.steps.map((step, i) => {
            const Icon = ICONS[i] ?? MessageSquare;
            return (
              <li key={step.title} className="relative min-w-0">
                <span className="absolute -left-[31px] top-1 flex size-8 items-center justify-center rounded-full bg-navy font-display text-[0.7rem] font-semibold text-sun-bright">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="card p-4">
                  <div className="flex items-center gap-2">
                    <Icon className="size-4 shrink-0 text-sun-deep" aria-hidden />
                    <h3 className="text-base">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            );
          })}
        </ol>

        {showCta ? (
          <div className="mt-10 flex justify-center">
            <Button className="w-full sm:w-auto" onClick={() => openModal('how_it_works')}>
              {t.cta.bookSurvey}
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
