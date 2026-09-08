import { PageHero } from '@/components/layout/PageHero';
import { Seo } from '@/components/layout/Seo';
import { RelatedLinks } from '@/components/layout/RelatedLinks';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { useLanguage } from '@/i18n/useLanguage';
import { useLeadModal } from '@/components/lead/useLeadModal';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/schema';
import { ROUTES } from '@/config/site';
import type { GuidePageCopy, SeoCopy } from '@/content/types';

export function GuideArticle({
  seo,
  path,
  copy,
}: {
  seo: SeoCopy;
  path: string;
  copy: GuidePageCopy;
}) {
  const { t } = useLanguage();
  const { openModal } = useLeadModal();

  return (
    <>
      <Seo
        copy={seo}
        path={path}
        ogType="article"
        jsonLd={[
          breadcrumbJsonLd([
            { name: t.common.homeLabel, path: '/' },
            { name: t.seo.guides.title.split('|')[0].trim(), path: ROUTES.guides },
            { name: copy.title, path },
          ]),
          faqJsonLd(copy.faqs),
        ]}
      />
      <PageHero eyebrow={copy.eyebrow} title={copy.title} body={copy.intro} />
      <article className="section-y">
        <Container narrow>
          {copy.sections.map((section) => (
            <section key={section.title} className="mb-8">
              <h2 className="text-xl sm:text-2xl">{section.title}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {p}
                </p>
              ))}
            </section>
          ))}
          <h2 className="mb-4 text-xl sm:text-2xl">{t.common.faqsTitle}</h2>
          <Accordion items={copy.faqs} />
          <Button className="mt-8 w-full sm:w-auto" onClick={() => openModal(path)}>
            {t.cta.talkExpert}
          </Button>
          <RelatedLinks links={copy.related} />
        </Container>
      </article>
    </>
  );
}
