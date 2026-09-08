import type { PhotoId } from '@/config/photos';

export type Language = 'en' | 'mr';

export type NavItem = {
  id: string;
  to: string;
  label: string;
  children?: Array<{ to: string; label: string }>;
};

export type SeoCopy = {
  title: string;
  description: string;
  robots?: string;
};

export type RelatedLink = {
  to: string;
  label: string;
};

export type ServicePageCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  whoTitle: string;
  who: string[];
  benefitsTitle: string;
  benefits: Array<{ title: string; text: string }>;
  considerTitle: string;
  consider: Array<{ title: string; text: string }>;
  processNote: string;
  faqs: Array<{ q: string; a: string }>;
  related: RelatedLink[];
  photoAlt: string;
};

export type GuidePageCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{ title: string; paragraphs: string[] }>;
  faqs: Array<{ q: string; a: string }>;
  related: RelatedLink[];
};

export type SiteContent = {
  langName: string;
  dir: 'ltr';
  brand: {
    short: string;
    tagline: string;
    footerBlurb: string;
  };
  nav: NavItem[];
  cta: {
    freeSurvey: string;
    freeQuote: string;
    callNow: string;
    whatsapp: string;
    checkSavings: string;
    requestCallback: string;
    talkExpert: string;
    bookSurvey: string;
    discussCommercial: string;
    getAssessment: string;
    talkToDrj: string;
    submitSurvey: string;
  };
  common: {
    serving: string;
    indicative: string;
    placeholderNote: string;
    comingSoon: string;
    customerStoriesSoon: string;
    readMore: string;
    learnMore: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
    language: string;
    call: string;
    quote: string;
    backToHome: string;
    required: string;
    optional: string;
    sending: string;
    privacyNote: string;
    homeLabel: string;
    relatedTitle: string;
    faqsTitle: string;
    moreServices: string;
  };
  details: {
    serviceAreaTitle: string;
    serviceAreaBody: string;
    surveyPrepTitle: string;
    surveyPrep: string[];
    componentsTitle: string;
    componentsBody: string;
    components: Array<{ title: string; text: string }>;
    dayNightTitle: string;
    dayNight: Array<{ title: string; text: string }>;
    calculatorAssumptions: string;
    terraceNoteTitle: string;
    terraceNote: string;
  };
  form: {
    title: string;
    name: string;
    phone: string;
    city: string;
    bill: string;
    propertyType: string;
    message: string;
    propertyOptions: Record<string, string>;
    errors: {
      name: string;
      phone: string;
      city: string;
    };
    successTitle: string;
    successBody: string;
    failTitle: string;
    failBody: string;
    another: string;
  };
  seo: Record<string, SeoCopy>;
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroBody: string;
    trust: Array<{ title: string; text: string }>;
    problemTitle: string;
    problems: Array<{ title: string; text: string }>;
    problemBridge: string;
    whyTitle: string;
    whyBody: string;
    benefits: Array<{ title: string; text: string }>;
    whyDrjTitle: string;
    whyDrjBody: string;
    advantages: Array<{ title: string; text: string }>;
    solutionsTitle: string;
    solutionsBody: string;
    residentialCard: { title: string; text: string; cta: string };
    commercialCard: { title: string; text: string; cta: string };
    processTitle: string;
    processBody: string;
    subsidyTitle: string;
    subsidyBody: string;
    subsidyCta: string;
    projectsTitle: string;
    projectsBody: string;
    faqTitle: string;
    faqBody: string;
    finalTitle: string;
    finalBody: string;
    energyPath: Array<{ label: string; title: string; text: string }>;
    moreLinks: RelatedLink[];
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    missionTitle: string;
    mission: string;
    approachTitle: string;
    approach: string;
    localTitle: string;
    local: string;
    ownerPlaceholderTitle: string;
    ownerPlaceholder: string;
    values: Array<{ title: string; text: string }>;
  };
  residential: {
    eyebrow: string;
    title: string;
    intro: string;
    whatTitle: string;
    what: string;
    whoTitle: string;
    who: string[];
    benefitsTitle: string;
    benefits: Array<{ title: string; text: string }>;
    factorsTitle: string;
    factors: Array<{ title: string; text: string }>;
    processNote: string;
    related: RelatedLink[];
  };
  commercial: {
    eyebrow: string;
    title: string;
    intro: string;
    whoTitle: string;
    who: string[];
    benefitsTitle: string;
    benefits: Array<{ title: string; text: string }>;
    note: string;
    related: RelatedLink[];
  };
  subsidy: {
    eyebrow: string;
    title: string;
    intro: string;
    disclaimer: string;
    sections: Array<{ title: string; text: string }>;
    helpTitle: string;
    helpBody: string;
    related: RelatedLink[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: Array<{ title: string; text: string }>;
    related: RelatedLink[];
  };
  calculator: {
    eyebrow: string;
    title: string;
    intro: string;
    billLabel: string;
    consumptionLabel: string;
    roofLabel: string;
    tariffLabel: string;
    locationLabel: string;
    roofOptions: Record<'limited' | 'adequate' | 'spacious', string>;
    compute: string;
    resultTitle: string;
    systemRange: string;
    generation: string;
    savings: string;
    payback: string;
    disclaimer: string;
    invalid: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{
      id: string;
      image: PhotoId;
      propertyType: string;
      location: string;
      details: string;
      description: string;
    }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ q: string; a: string }>;
  };
  industrial: ServicePageCopy;
  onGrid: ServicePageCopy;
  offGrid: ServicePageCopy;
  hybrid: ServicePageCopy;
  maintenance: ServicePageCopy;
  cost: ServicePageCopy;
  guidesHub: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ to: string; title: string; text: string }>;
  };
  guideSatara: GuidePageCopy;
  guideSystemTypes: GuidePageCopy;
  guideSizing: GuidePageCopy;
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    callTitle: string;
    callBody: string;
    waTitle: string;
    waBody: string;
    emailTitle: string;
    emailBody: string;
    addressTitle: string;
    mapTitle: string;
    mapPlaceholder: string;
    hoursPlaceholder: string;
  };
  legal: {
    privacyTitle: string;
    privacyBody: string[];
    termsTitle: string;
    termsIntro: string;
    termsSections: Array<{ title: string; body: string[] }>;
  };
  notFound: {
    title: string;
    body: string;
  };
  footer: {
    explore: string;
    contact: string;
    legal: string;
    privacy: string;
    terms: string;
  };
};
