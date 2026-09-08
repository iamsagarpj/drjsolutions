import { ServiceDetail } from '@/components/layout/ServiceDetail';
import { useLanguage } from '@/i18n/useLanguage';
import { ROUTES } from '@/config/site';

export function IndustrialPage() {
  const { t } = useLanguage();
  return (
    <ServiceDetail
      seo={t.seo.industrial}
      path={ROUTES.industrial}
      copy={t.industrial}
      photo="sky"
      breadcrumbName={t.industrial.eyebrow}
    />
  );
}
