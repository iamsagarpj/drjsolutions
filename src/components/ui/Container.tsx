import { cn } from '@/lib/cn';

export function Container({
  children,
  className,
  wide,
  narrow,
}: {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
  narrow?: boolean;
}) {
  return (
    <div className={cn(narrow ? 'wrap-narrow' : wide ? 'wrap-wide' : 'wrap', className)}>
      {children}
    </div>
  );
}
