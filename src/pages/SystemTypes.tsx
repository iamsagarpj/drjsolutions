import { ServiceDetail } from '@/components/layout/ServiceDetail';
import { useLanguage } from '@/i18n/useLanguage';
import { ROUTES } from '@/config/site';

export function OnGridPage() {
  const { t } = useLanguage();
  return (
    <ServiceDetail
      seo={t.seo.onGrid}
      path={ROUTES.onGrid}
      copy={t.onGrid}
      photo="residential"
      breadcrumbName={t.onGrid.eyebrow}
    />
  );
}

export function OffGridPage() {
  const { t } = useLanguage();
  return (
    <ServiceDetail
      seo={t.seo.offGrid}
      path={ROUTES.offGrid}
      copy={t.offGrid}
      photo="array"
      breadcrumbName={t.offGrid.eyebrow}
    />
  );
}

export function HybridPage() {
  const { t } = useLanguage();
  return (
    <ServiceDetail
      seo={t.seo.hybrid}
      path={ROUTES.hybrid}
      copy={t.hybrid}
      photo="install"
      breadcrumbName={t.hybrid.eyebrow}
    />
  );
}

export function MaintenancePage() {
  const { t } = useLanguage();
  return (
    <ServiceDetail
      seo={t.seo.maintenance}
      path={ROUTES.maintenance}
      copy={t.maintenance}
      photo="install"
      breadcrumbName={t.maintenance.eyebrow}
    />
  );
}

export function CostPage() {
  const { t } = useLanguage();
  return (
    <ServiceDetail
      seo={t.seo.cost}
      path={ROUTES.cost}
      copy={t.cost}
      photo="array"
      breadcrumbName={t.cost.eyebrow}
    />
  );
}
