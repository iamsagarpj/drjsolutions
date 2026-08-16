import { CALCULATOR_DEFAULTS } from '@/config/calculator';

export type RoofAvailability = 'limited' | 'adequate' | 'spacious';

export type CalculatorInput = {
  monthlyBill: number;
  monthlyConsumption?: number;
  roof: RoofAvailability;
  tariff?: number;
  location?: string;
};

export type CalculatorResult = {
  systemKwMin: number;
  systemKwMax: number;
  annualGenerationMin: number;
  annualGenerationMax: number;
  annualSavingsMin: number;
  annualSavingsMax: number;
  paybackMin: number;
  paybackMax: number;
  assumedTariff: number;
  assumedYield: number;
  location: string;
};

function roundTo(value: number, step: number): number {
  return Math.round(value / step) * step;
}

export function estimateSavings(input: CalculatorInput): CalculatorResult {
  const tariff =
    input.tariff && input.tariff > 0 ? input.tariff : CALCULATOR_DEFAULTS.defaultTariffInrPerKwh;
  const monthlyKwh =
    input.monthlyConsumption && input.monthlyConsumption > 0
      ? input.monthlyConsumption
      : input.monthlyBill / tariff;

  const annualKwh = Math.max(monthlyKwh, 0) * 12;
  const roofFactor = CALCULATOR_DEFAULTS.roofFactors[input.roof];
  const rawKw = (annualKwh / CALCULATOR_DEFAULTS.specificYieldKwhPerKwYear) * roofFactor;

  const clamped = Math.min(
    CALCULATOR_DEFAULTS.maxSystemKw,
    Math.max(CALCULATOR_DEFAULTS.minSystemKw, rawKw),
  );

  const systemKwMin = Math.max(CALCULATOR_DEFAULTS.minSystemKw, roundTo(clamped * 0.8, 0.5));
  const systemKwMax = Math.max(systemKwMin + 0.5, roundTo(clamped * 1.15, 0.5));

  const annualGenerationMin = Math.round(
    systemKwMin * CALCULATOR_DEFAULTS.specificYieldKwhPerKwYear,
  );
  const annualGenerationMax = Math.round(
    systemKwMax * CALCULATOR_DEFAULTS.specificYieldKwhPerKwYear,
  );

  const annualSavingsMin = Math.round(
    annualGenerationMin * tariff * CALCULATOR_DEFAULTS.selfConsumptionFactor,
  );
  const annualSavingsMax = Math.round(
    annualGenerationMax * tariff * CALCULATOR_DEFAULTS.selfConsumptionFactor,
  );

  return {
    systemKwMin,
    systemKwMax,
    annualGenerationMin,
    annualGenerationMax,
    annualSavingsMin,
    annualSavingsMax,
    paybackMin: CALCULATOR_DEFAULTS.paybackYears.min,
    paybackMax: CALCULATOR_DEFAULTS.paybackYears.max,
    assumedTariff: tariff,
    assumedYield: CALCULATOR_DEFAULTS.specificYieldKwhPerKwYear,
    location: input.location || CALCULATOR_DEFAULTS.locationLabel,
  };
}

export function formatInr(value: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 1 }).format(value);
}
