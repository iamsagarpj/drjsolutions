/** Indicative calculator assumptions for Satara / western Maharashtra.
 *  These are planning defaults, not guaranteed performance figures.
 *  Update after a local yield study if more precise data is available.
 */
export const CALCULATOR_DEFAULTS = {
  locationLabel: 'Satara, Maharashtra',
  defaultTariffInrPerKwh: 9,
  specificYieldKwhPerKwYear: 1550,
  selfConsumptionFactor: 0.88,
  roofFactors: {
    limited: 0.68,
    adequate: 0.9,
    spacious: 1,
  },
  minSystemKw: 1,
  maxSystemKw: 50,
  paybackYears: { min: 4, max: 8 },
} as const;

export const SUBSIDY_CONFIG = {
  lastVerifiedOn: null as string | null,
  note: 'Government subsidy rules and amounts can change. Verify current eligibility on official portals before making financial decisions.',
  officialSources: [
    {
      name: 'PM Surya Ghar: Muft Bijli Yojana',
      url: 'https://pmsuryaghar.gov.in',
    },
    {
      name: 'Ministry of New and Renewable Energy (MNRE)',
      url: 'https://mnre.gov.in',
    },
  ],
  amounts: null as null | {
    residential: string;
    notes: string;
  },
};
