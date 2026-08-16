import {
  BadgeCheck,
  ClipboardCheck,
  Handshake,
  Hammer,
  Headset,
  Gauge,
  Eye,
  MapPin,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { useLanguage } from '@/i18n/useLanguage';

const ICONS = [BadgeCheck, ClipboardCheck, Handshake, Hammer, Headset, Gauge, Eye, MapPin];

export function Advantages() {
  const { t } = useLanguage();

  return (
    <section className="section-y">
      <div className="wrap">
        <Reveal>
          <SectionHeading title={t.home.whyDrjTitle} body={t.home.whyDrjBody} />
        </Reveal>
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {t.home.advantages.map((item, i) => {
            const Icon = ICONS[i] ?? BadgeCheck;
            return (
              <StaggerItem key={item.title} className="rounded-2xl border border-line bg-paper p-5">
                <Icon className="size-5 text-sun-deep" aria-hidden />
                <h3 className="mt-3 text-base">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
