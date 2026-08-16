import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/i18n/useLanguage';
import { ROUTES } from '@/config/site';

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
            image="/images/rooftop-india.jpg"
            alt="Residential rooftop solar panels"
            title={t.home.residentialCard.title}
            text={t.home.residentialCard.text}
            cta={t.home.residentialCard.cta}
            to={ROUTES.residential}
          />
          <SolutionCard
            image="/images/residential.jpg"
            alt="Commercial rooftop covered with solar panels"
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
  image,
  alt,
  title,
  text,
  cta,
  to,
}: {
  image: string;
  alt: string;
  title: string;
  text: string;
  cta: string;
  to: string;
}) {
  return (
    <Link to={to} className="group card overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        loading="lazy"
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
