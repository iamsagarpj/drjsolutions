import { SunMedium, Moon, CloudRain, PanelsTopLeft, Cpu, Frame, Cable, Gauge } from 'lucide-react';
import { useLanguage } from '@/i18n/useLanguage';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const COMPONENT_ICONS = [PanelsTopLeft, Cpu, Frame, Cable, Gauge];
const DAY_ICONS = [SunMedium, Moon, CloudRain];

export function SystemExplainer() {
  const { t } = useLanguage();

  return (
    <section className="sky-field section-y">
      <div className="wrap">
        <Reveal>
          <SectionHeading title={t.details.componentsTitle} body={t.details.componentsBody} />
        </Reveal>
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {t.details.components.map((item, i) => {
            const Icon = COMPONENT_ICONS[i] ?? PanelsTopLeft;
            return (
              <StaggerItem key={item.title} className="card min-w-0 p-5">
                <Icon className="size-5 text-sun-deep" aria-hidden />
                <h3 className="mt-3 text-base">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </StaggerItem>
            );
          })}
        </Stagger>

        <h3 className="mt-12 text-2xl">{t.details.dayNightTitle}</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {t.details.dayNight.map((item, i) => {
            const Icon = DAY_ICONS[i] ?? SunMedium;
            return (
              <article key={item.title} className="rounded-2xl border border-line bg-paper p-5">
                <Icon className="size-5 text-navy" aria-hidden />
                <h4 className="mt-3 text-lg">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
