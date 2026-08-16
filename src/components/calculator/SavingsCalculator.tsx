import { useMemo, useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';
import { useLanguage } from '@/i18n/useLanguage';
import { estimateSavings, formatInr, formatNumber, type RoofAvailability } from '@/lib/calculator';
import { CALCULATOR_DEFAULTS } from '@/config/calculator';
import { Button } from '@/components/ui/Button';
import { useLeadModal } from '@/components/lead/useLeadModal';
import { track } from '@/services/analytics';

export function SavingsCalculator({ embedded = false }: { embedded?: boolean }) {
  const { t } = useLanguage();
  const { openModal } = useLeadModal();
  const [bill, setBill] = useState('4000');
  const [consumption, setConsumption] = useState('');
  const [tariff, setTariff] = useState(String(CALCULATOR_DEFAULTS.defaultTariffInrPerKwh));
  const [roof, setRoof] = useState<RoofAvailability>('adequate');
  const [location, setLocation] = useState<string>(CALCULATOR_DEFAULTS.locationLabel);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');

  const result = useMemo(() => {
    const monthlyBill = Number(bill);
    if (!monthlyBill || monthlyBill <= 0) return null;
    return estimateSavings({
      monthlyBill,
      monthlyConsumption: consumption ? Number(consumption) : undefined,
      tariff: tariff ? Number(tariff) : undefined,
      roof,
      location,
    });
  }, [bill, consumption, tariff, roof, location]);

  function handleCompute(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    const monthlyBill = Number(bill);
    if (!monthlyBill || monthlyBill <= 0) {
      setError(t.calculator.invalid);
      return;
    }
    setError('');
    track('calculator_used', { bill: monthlyBill, roof });
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-card">
      <div className="grid md:grid-cols-2">
        <form onSubmit={handleCompute} className="space-y-4 bg-navy p-5 text-white sm:p-8">
          <div className="flex items-center gap-2 text-sun">
            <CalcIcon className="size-5" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.16em]">
              {t.common.indicative}
            </p>
          </div>
          <h3 className="font-display text-2xl text-white">{t.calculator.title}</h3>
          <p className="text-sm leading-relaxed text-white/70">{t.calculator.intro}</p>

          <label className="block text-sm">
            <span className="mb-1.5 block text-white/80">{t.calculator.billLabel}</span>
            <input
              className="field bg-white text-ink"
              inputMode="numeric"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              required
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block text-white/80">
              {t.calculator.consumptionLabel}{' '}
              <span className="text-white/45">({t.common.optional})</span>
            </span>
            <input
              className="field bg-white text-ink"
              inputMode="decimal"
              value={consumption}
              onChange={(e) => setConsumption(e.target.value)}
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block text-white/80">{t.calculator.roofLabel}</span>
            <select
              className="field bg-white text-ink"
              value={roof}
              onChange={(e) => setRoof(e.target.value as RoofAvailability)}
            >
              {(Object.keys(t.calculator.roofOptions) as RoofAvailability[]).map((key) => (
                <option key={key} value={key}>
                  {t.calculator.roofOptions[key]}
                </option>
              ))}
            </select>
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block text-white/80">
                {t.calculator.tariffLabel}{' '}
                <span className="text-white/45">({t.common.optional})</span>
              </span>
              <input
                className="field bg-white text-ink"
                inputMode="decimal"
                value={tariff}
                onChange={(e) => setTariff(e.target.value)}
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-white/80">{t.calculator.locationLabel}</span>
              <input
                className="field bg-white text-ink"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>
          </div>
          {error ? <p className="text-sm text-sun-bright">{error}</p> : null}
          <Button type="submit" className="w-full sm:w-auto">
            {t.calculator.compute}
          </Button>
          <p className="text-xs leading-relaxed text-white/55">{t.details.calculatorAssumptions}</p>
        </form>

        <div className="bg-paper p-5 sm:p-8">
          {result && (touched || embedded) ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sun-deep">
                {t.calculator.resultTitle}
              </p>
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                <Stat
                  label={t.calculator.systemRange}
                  value={`${formatNumber(result.systemKwMin)}–${formatNumber(result.systemKwMax)} kW`}
                />
                <Stat
                  label={t.calculator.generation}
                  value={`${formatNumber(result.annualGenerationMin)}–${formatNumber(result.annualGenerationMax)} kWh`}
                />
                <Stat
                  label={t.calculator.savings}
                  value={`${formatInr(result.annualSavingsMin)}–${formatInr(result.annualSavingsMax)}`}
                />
                <Stat
                  label={t.calculator.payback}
                  value={`${result.paybackMin}–${result.paybackMax} yrs`}
                />
              </dl>
              <p className="mt-6 text-xs leading-relaxed text-faint">{t.calculator.disclaimer}</p>
              <Button
                className="mt-6 w-full sm:w-auto"
                onClick={() => {
                  track('calculator_submit');
                  openModal('calculator');
                }}
              >
                {t.cta.getAssessment}
              </Button>
            </div>
          ) : (
            <div className="flex h-full min-h-56 flex-col justify-center">
              <p className="font-display text-xl text-navy">{t.calculator.resultTitle}</p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                {t.calculator.disclaimer}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-line bg-sand px-3 py-4 sm:px-4">
      <dt className="text-xs text-muted">{label}</dt>
      <dd className="mt-1 break-words font-display text-base text-navy sm:text-lg">{value}</dd>
    </div>
  );
}
