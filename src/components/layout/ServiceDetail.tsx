import { PageHero } from '@/components/layout/PageHero';
import { Seo } from '@/components/layout/Seo';
import { RelatedLinks } from '@/components/layout/RelatedLinks';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { Photo } from '@/components/ui/Photo';
import { SurveyPrep } from '@/components/sections/SurveyPrep';
import { useLanguage } from '@/i18n/useLanguage';
import { useLeadModal } from '@/components/lead/useLeadModal';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/schema';
import type { PhotoId } from '@/config/photos';
import type { SeoCopy, ServicePageCopy } from '@/content/types';
import { Check } from 'lucide-react';

export function ServiceDetail({
  seo,
  path,
  copy,
  photo,
  breadcrumbName,
}: {
  seo: SeoCopy;
  path: string;
  copy: ServicePageCopy;
  photo: PhotoId;
  breadcrumbName: string;
}) {
  const { t } = useLanguage();
  const { openModal } = useLeadModal();

  return (
    <>
      <Seo
        copy={seo}
        path={path}
        jsonLd={[
          serviceJsonLd({ name: copy.title, description: seo.description, path }),
          breadcrumbJsonLd([
            { name: t.common.homeLabel, path: '/' },
            { name: breadcrumbName, path },
          ]),
          faqJsonLd(copy.faqs),
        ]}
      />
      <PageHero eyebrow={copy.eyebrow} title={copy.title} body={copy.intro} />
      <section className="section-y">
        <div className="wrap grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl">{copy.whoTitle}</h2>
            <ul className="mt-4 space-y-3">
              {copy.who.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink">
                  <Check className="mt-0.5 size-4 shrink-0 text-leaf" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Photo
              id={photo}
              alt={copy.photoAlt}
              className="mt-6 aspect-[16/10] overflow-hidden rounded-2xl"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>
          <div className="min-w-0 space-y-4">
            <h2 className="text-xl sm:text-2xl">{copy.benefitsTitle}</h2>
            {copy.benefits.map((b) => (
              <article key={b.title} className="rounded-2xl border border-line bg-paper p-5">
                <h3 className="text-base">{b.title}</h3>
                <p className="mt-2 text-sm text-muted">{b.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="wrap mt-12 sm:mt-14">
          <h2 className="text-xl sm:text-2xl">{copy.considerTitle}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {copy.consider.map((item, i) => (
              <article key={item.title} className="card p-5">
                <p className="font-display text-sm text-sun-deep">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 text-base">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm text-muted">{copy.processNote}</p>
          <Button className="mt-6 w-full sm:w-auto" onClick={() => openModal(path)}>
            {t.cta.bookSurvey}
          </Button>
          <div className="mt-12">
            <h2 className="mb-4 text-xl sm:text-2xl">{t.common.faqsTitle}</h2>
            <Accordion items={copy.faqs} />
          </div>
          <RelatedLinks links={copy.related} />
        </div>
      </section>
      <SurveyPrep />
    </>
  );
}
