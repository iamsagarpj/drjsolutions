import { Banknote, Sun, LineChart, Sparkles, Leaf, Home } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { useLanguage } from '@/i18n/useLanguage';

const ICONS = [Banknote, Sun, LineChart, Sparkles, Leaf, Home];

export function WhySolar() {
  const { t } = useLanguage();

  return (
    <section className="sky-field section-y">
      <div className="wrap">
        <Reveal>
          <SectionHeading title={t.home.whyTitle} body={t.home.whyBody} />
        </Reveal>
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.home.benefits.map((item, i) => {
            const Icon = ICONS[i] ?? Sun;
            return (
              <StaggerItem key={item.title} className="card min-w-0 p-5 sm:p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-sun-soft text-sun-deep">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
