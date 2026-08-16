import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <header className="border-b border-line bg-sky">
      <div className="wrap py-8 sm:py-12 lg:py-14">
        <Breadcrumbs />
        <div className="mt-5">
          <SectionHeading eyebrow={eyebrow} title={title} body={body} />
        </div>
      </div>
    </header>
  );
}
