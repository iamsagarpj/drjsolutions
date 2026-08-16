import { PageHero } from '@/components/layout/PageHero';
import { Seo } from '@/components/layout/Seo';
import { ProjectsGallery } from '@/components/sections/ProjectsGallery';
import { useLanguage } from '@/i18n/useLanguage';
import { ROUTES } from '@/config/site';

export function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <>
      <Seo copy={t.seo.projects} path={ROUTES.projects} />
      <PageHero eyebrow={t.projects.eyebrow} title={t.projects.title} body={t.projects.intro} />
      <ProjectsGallery hideHeading />
    </>
  );
}
