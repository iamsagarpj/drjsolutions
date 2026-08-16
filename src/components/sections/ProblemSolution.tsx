import { IndianRupee, TrendingUp, PlugZap, Leaf } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { useLanguage } from '@/i18n/useLanguage';

const ICONS = [IndianRupee, TrendingUp, PlugZap, Leaf];

export function ProblemSolution() {
  const { t } = useLanguage();

  return (
    <section className="section-y">
      <div className="wrap">
        <Reveal>
          <SectionHeading title={t.home.problemTitle} />
        </Reveal>
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
          {t.home.problems.map((item, i) => {
            const Icon = ICONS[i] ?? IndianRupee;
            return (
              <StaggerItem key={item.title} className="card min-w-0 p-5 sm:p-6">
                <span className="flex size-10 items-center justify-center rounded-xl bg-sun-soft text-sun-deep">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
        <Reveal className="mt-8 rounded-2xl bg-navy px-4 py-5 text-center sm:px-10">
          <p className="font-display text-xl font-semibold text-white sm:text-2xl">
            {t.home.problemBridge}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
