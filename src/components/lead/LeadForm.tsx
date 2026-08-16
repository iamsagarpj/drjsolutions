import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/i18n/useLanguage';
import { isValidIndianMobile } from '@/lib/phone';
import { submitLead, type PropertyType } from '@/services/contactService';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

const schema = z.object({
  name: z.string().trim().min(2),
  phone: z.string().trim().refine(isValidIndianMobile),
  city: z.string().trim().min(2),
  monthlyBill: z.string().optional(),
  propertyType: z.enum(['residential', 'shop', 'office', 'commercial', 'other']),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const PROPERTY_KEYS: PropertyType[] = ['residential', 'shop', 'office', 'commercial', 'other'];

export function LeadForm({
  source = 'form',
  compact = false,
}: {
  source?: string;
  compact?: boolean;
}) {
  const { t, lang } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      phone: '',
      city: 'Satara',
      monthlyBill: '',
      propertyType: 'residential',
      message: '',
    },
  });

  async function onSubmit(values: FormValues) {
    const result = await submitLead({
      ...values,
      source,
      language: lang,
    });
    setStatus(result.ok ? 'success' : 'error');
    if (result.ok) reset({ ...values, message: '' });
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-leaf/20 bg-leaf-soft px-5 py-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-leaf" aria-hidden />
        <h3 className="mt-4 font-display text-xl text-navy">{t.form.successTitle}</h3>
        <p className="mt-2 text-sm text-muted">{t.form.successBody}</p>
        <button
          type="button"
          className="mt-5 text-sm font-semibold text-navy underline underline-offset-4"
          onClick={() => setStatus('idle')}
        >
          {t.form.another}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn('grid gap-4', compact && 'gap-3')}
    >
      {status === 'error' ? (
        <div className="flex items-start gap-2 rounded-xl border border-danger/20 bg-danger/5 px-3 py-3 text-sm text-danger">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
          <div>
            <p className="font-semibold">{t.form.failTitle}</p>
            <p>{t.form.failBody}</p>
          </div>
        </div>
      ) : null}

      <Field label={t.form.name} error={errors.name ? t.form.errors.name : undefined} required>
        <input
          className="field"
          autoComplete="name"
          {...register('name')}
          aria-invalid={!!errors.name}
        />
      </Field>

      <Field label={t.form.phone} error={errors.phone ? t.form.errors.phone : undefined} required>
        <input
          className="field"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          placeholder="95797 92080"
          {...register('phone')}
          aria-invalid={!!errors.phone}
        />
      </Field>

      <Field label={t.form.city} error={errors.city ? t.form.errors.city : undefined} required>
        <input
          className="field"
          autoComplete="address-level2"
          {...register('city')}
          aria-invalid={!!errors.city}
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t.form.bill} optional>
          <input className="field" inputMode="numeric" {...register('monthlyBill')} />
        </Field>
        <Field label={t.form.propertyType}>
          <select className="field" {...register('propertyType')}>
            {PROPERTY_KEYS.map((key) => (
              <option key={key} value={key}>
                {t.form.propertyOptions[key]}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label={t.form.message} optional>
        <textarea className="field min-h-24 resize-y" rows={3} {...register('message')} />
      </Field>

      <p className="text-xs text-faint">{t.common.privacyNote}</p>

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? t.common.sending : t.cta.submitSurvey}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  optional,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}) {
  const { t } = useLanguage();
  return (
    <label className="block">
      <span className="mb-1.5 flex items-baseline justify-between gap-2 text-sm font-medium text-navy">
        <span>
          {label}
          {required ? <span className="text-danger"> *</span> : null}
        </span>
        {optional ? (
          <span className="text-xs font-normal text-faint">{t.common.optional}</span>
        ) : null}
      </span>
      {children}
      {error ? <span className="mt-1 block text-sm text-danger">{error}</span> : null}
    </label>
  );
}
