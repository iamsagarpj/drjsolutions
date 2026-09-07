import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Photo } from '@/components/ui/Photo';
import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/i18n/useLanguage';
import { ROUTES } from '@/config/site';
import type { PhotoId } from '@/config/photos';

export function SolutionsPreview() {
  const { t } = useLanguage();

  return (
    <section className="section-y">
      <div className="wrap">
        <Reveal>
          <SectionHeading title={t.home.solutionsTitle} body={t.home.solutionsBody} />
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <SolutionCard
            photo="residential"
            title={t.home.residentialCard.title}
            text={t.home.residentialCard.text}
            cta={t.home.residentialCard.cta}
            to={ROUTES.residential}
          />
          <SolutionCard
            photo="commercial"
            title={t.home.commercialCard.title}
            text={t.home.commercialCard.text}
            cta={t.home.commercialCard.cta}
            to={ROUTES.commercial}
          />
        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  photo,
  title,
  text,
  cta,
  to,
}: {
  photo: PhotoId;
  title: string;
  text: string;
  cta: string;
  to: string;
}) {
  return (
    <Link to={to} className="group card overflow-hidden">
      <Photo
        id={photo}
        className="aspect-[16/10] transition duration-500 group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="p-5 sm:p-6">
        <h3 className="text-xl">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy">
          {cta} <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
