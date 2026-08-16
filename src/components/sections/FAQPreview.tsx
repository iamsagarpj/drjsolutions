import { Link } from 'react-router-dom';
import { Accordion } from '@/components/ui/Accordion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/i18n/useLanguage';
import { ROUTES } from '@/config/site';

export function FAQPreview({ limit = 6 }: { limit?: number }) {
  const { t } = useLanguage();
  const items = t.faq.items.slice(0, limit);

  return (
    <section className="section-y">
      <div className="wrap">
        <Reveal>
          <SectionHeading title={t.home.faqTitle} body={t.home.faqBody} />
        </Reveal>
        <div className="mt-10">
          <Accordion items={items} />
        </div>
        <div className="mt-8 flex justify-center">
          <Link to={ROUTES.faq} className="btn btn-ghost w-full sm:w-auto">
            {t.common.readMore}
          </Link>
        </div>
      </div>
    </section>
  );
}
