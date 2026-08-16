import { cn } from '@/lib/cn';

type Variant = 'sun' | 'navy' | 'ghost' | 'light';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  as?: 'button';
};

const variantClass: Record<Variant, string> = {
  sun: 'btn-sun',
  navy: 'btn-navy',
  ghost: 'btn-ghost',
  light: 'btn-light',
};

export function Button({ variant = 'sun', className, type = 'button', ...props }: Props) {
  return <button type={type} className={cn('btn', variantClass[variant], className)} {...props} />;
}

export function ButtonLink({
  variant = 'sun',
  className,
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; href: string }) {
  return (
    <a href={href} className={cn('btn', variantClass[variant], className)} {...props}>
      {children}
    </a>
  );
}
