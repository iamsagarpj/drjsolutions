import { ROUTES } from '@/config/site';
import { SEO_PAGES } from '@/config/seoMeta';
import { enExtraPages } from '@/content/en-extra';
import type { SiteContent } from '@/content/types';

export const en: SiteContent = {
  langName: 'English',
  dir: 'ltr',
  brand: {
    short: 'DRJ Solutions',
    tagline: 'Rooftop solar for homes and businesses',
    footerBlurb:
      'Reliable rooftop solar solutions for a smarter, cleaner and more sustainable future.',
  },
  nav: [
    { id: 'home', to: ROUTES.home, label: 'Home' },
    { id: 'about', to: ROUTES.about, label: 'About' },
    {
      id: 'solutions',
      to: ROUTES.residential,
      label: 'Solutions',
      children: [
        { to: ROUTES.residential, label: 'Residential Solar' },
        { to: ROUTES.commercial, label: 'Commercial Solar' },
        { to: ROUTES.industrial, label: 'Industrial Solar' },
        { to: ROUTES.onGrid, label: 'On-Grid Solar' },
        { to: ROUTES.offGrid, label: 'Off-Grid Solar' },
        { to: ROUTES.hybrid, label: 'Hybrid Solar' },
        { to: ROUTES.maintenance, label: 'Solar Maintenance' },
        { to: ROUTES.cost, label: 'Solar System Cost' },
      ],
    },
    { id: 'subsidy', to: ROUTES.subsidy, label: 'Subsidy' },
    { id: 'guides', to: ROUTES.guides, label: 'Guides' },
    { id: 'how', to: ROUTES.howItWorks, label: 'How It Works' },
    { id: 'projects', to: ROUTES.projects, label: 'Projects' },
    { id: 'faq', to: ROUTES.faq, label: 'FAQ' },
  ],
  cta: {
    freeSurvey: 'Get Free Site Survey',
    freeQuote: 'Get Free Quote',
    callNow: 'Call Now',
    whatsapp: 'WhatsApp Us',
    checkSavings: 'Check Your Solar Savings',
    requestCallback: 'Request Callback',
    talkExpert: 'Talk to Solar Expert',
    bookSurvey: 'Book Free Site Survey',
    discussCommercial: 'Discuss Your Commercial Requirement',
    getAssessment: 'Get My Free Solar Assessment',
    talkToDrj: 'Talk to DRJ Solutions',
    submitSurvey: 'Request Free Site Survey',
  },
  common: {
    serving: 'Projects at any location — no service-area limit',
    indicative: 'Indicative Estimate',
    placeholderNote: 'Illustrative rooftop solar photography — not a documented DRJ installation.',
    comingSoon: 'Customer stories coming soon',
    customerStoriesSoon:
      'Verified customer stories will appear here once they are shared with us. We do not publish reviews that we cannot stand behind.',
    readMore: 'Read more',
    learnMore: 'Learn more',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skipToContent: 'Skip to content',
    language: 'Language',
    call: 'Call',
    quote: 'Get Quote',
    backToHome: 'Back to home',
    required: 'Required',
    optional: 'Optional',
    sending: 'Sending…',
    privacyNote: 'We use your details only to respond to this enquiry.',
    homeLabel: 'Home',
    relatedTitle: 'Continue reading',
    faqsTitle: 'Questions we are asked',
    moreServices: 'More solar services and guides',
  },
  details: {
    serviceAreaTitle: 'Where we work',
    serviceAreaBody:
      'DRJ Solutions is based at 7 Hills Apartment, Anand Nagar, Satara, Maharashtra. Satara city and Satara district are our home ground. We also take rooftop solar projects for homes, shops and businesses at other locations — there is no hard service-area boundary. Households in nearby towns such as Karad, Phaltan, Wai, Mahabaleshwar, Patan, Koregaon, Man, Khatav and Jaoli can enquire the same way; we schedule a survey around the site rather than publishing a separate page for every town. Book a free site survey, or call / WhatsApp to discuss your roof.',
    surveyPrepTitle: 'Keep these ready for a useful site survey',
    surveyPrep: [
      'A recent electricity bill (last one to three months if you have them)',
      'A clear idea of the roof: terrace or slope, water tanks, trees, neighbouring buildings',
      'Sanctioned load, if it is printed on your bill',
      'Your questions on subsidy, net metering, budget or maintenance — nothing is too basic',
    ],
    componentsTitle: 'What a rooftop solar system typically includes',
    componentsBody:
      'A working system is more than panels on the roof. During the proposal we explain each part against your site — not as a generic catalogue.',
    components: [
      {
        title: 'Solar modules (panels)',
        text: 'Convert sunlight into DC electricity. Module performance warranty depends on the make you select. The flyer’s 25-year performance warranty refers to this class of equipment, not every component.',
      },
      {
        title: 'Inverter',
        text: 'Converts DC to AC that your home or business can use. Inverter warranty is separate from the panels.',
      },
      {
        title: 'Mounting structure',
        text: 'Holds the modules on a terrace or sloping roof, with drainage, walkways and wind load in mind.',
      },
      {
        title: 'Cabling & protection',
        text: 'DC and AC wiring, earthing and protection devices sized for the design and the meter location.',
      },
      {
        title: 'Net meter (where applicable)',
        text: 'Fitted through your electricity company’s process so export and import can be billed correctly. Rules are set by the discom, not by the installer.',
      },
    ],
    dayNightTitle: 'How solar behaves through the day',
    dayNight: [
      {
        title: 'Daytime',
        text: 'Your lights, fans, fridge and other daytime loads can use solar first. Surplus may go to the grid if net metering is sanctioned.',
      },
      {
        title: 'Night',
        text: 'A standard rooftop system uses grid power after sunset, unless a battery is designed in. Panels do not generate at night.',
      },
      {
        title: 'Monsoon & clouds',
        text: 'There is still generation in daylight, but it drops when the sky is overcast. Yearly estimates already assume seasonal variation.',
      },
    ],
    calculatorAssumptions:
      'Planning defaults: about 1,550 kWh generated per kW per year, and a unit rate you can edit. Change the location and tariff to match your bill. Results stay indicative until a site survey.',
    terraceNoteTitle: 'Typical rooftops',
    terraceNote:
      'Many independent houses have an RCC terrace with a water tank, solar water heater or dish antenna. Usable area is what remains after those objects and shade. A survey is how we measure that — not a guess from a photograph alone.',
  },
  form: {
    title: 'Request a free site survey',
    name: 'Full name',
    phone: 'Phone number',
    city: 'City / location',
    bill: 'Monthly electricity bill (₹)',
    propertyType: 'Property type',
    message: 'Message',
    propertyOptions: {
      residential: 'Residential',
      shop: 'Shop',
      office: 'Office',
      commercial: 'Commercial',
      other: 'Other',
    },
    errors: {
      name: 'Please enter your name.',
      phone: 'Enter a valid 10-digit Indian mobile number.',
      city: 'Please enter your city or area.',
    },
    successTitle: 'Thank you. Your request has been received.',
    successBody: 'DRJ Solutions will contact you shortly to discuss the next step.',
    failTitle: 'We could not send your request.',
    failBody: 'Please try again, call us, or message us on WhatsApp.',
    another: 'Send another request',
  },
  seo: {
    home: { title: SEO_PAGES.home.title, description: SEO_PAGES.home.description },
    about: { title: SEO_PAGES.about.title, description: SEO_PAGES.about.description },
    residential: { title: SEO_PAGES.residential.title, description: SEO_PAGES.residential.description },
    commercial: { title: SEO_PAGES.commercial.title, description: SEO_PAGES.commercial.description },
    industrial: { title: SEO_PAGES.industrial.title, description: SEO_PAGES.industrial.description },
    onGrid: { title: SEO_PAGES.onGrid.title, description: SEO_PAGES.onGrid.description },
    offGrid: { title: SEO_PAGES.offGrid.title, description: SEO_PAGES.offGrid.description },
    hybrid: { title: SEO_PAGES.hybrid.title, description: SEO_PAGES.hybrid.description },
    maintenance: { title: SEO_PAGES.maintenance.title, description: SEO_PAGES.maintenance.description },
    cost: { title: SEO_PAGES.cost.title, description: SEO_PAGES.cost.description },
    subsidy: { title: SEO_PAGES.subsidy.title, description: SEO_PAGES.subsidy.description },
    howItWorks: { title: SEO_PAGES.howItWorks.title, description: SEO_PAGES.howItWorks.description },
    calculator: { title: SEO_PAGES.calculator.title, description: SEO_PAGES.calculator.description },
    projects: { title: SEO_PAGES.projects.title, description: SEO_PAGES.projects.description },
    faq: { title: SEO_PAGES.faq.title, description: SEO_PAGES.faq.description },
    contact: { title: SEO_PAGES.contact.title, description: SEO_PAGES.contact.description },
    guides: { title: SEO_PAGES.guides.title, description: SEO_PAGES.guides.description },
    guideSatara: { title: SEO_PAGES.guideSatara.title, description: SEO_PAGES.guideSatara.description },
    guideSystemTypes: {
      title: SEO_PAGES.guideSystemTypes.title,
      description: SEO_PAGES.guideSystemTypes.description,
    },
    guideSizing: { title: SEO_PAGES.guideSizing.title, description: SEO_PAGES.guideSizing.description },
    privacy: { title: SEO_PAGES.privacy.title, description: SEO_PAGES.privacy.description },
    terms: { title: SEO_PAGES.terms.title, description: SEO_PAGES.terms.description },
    notFound: {
      title: 'Page not found | DRJ Solutions',
      description: 'The page you requested is not available.',
      robots: 'noindex, nofollow',
    },
  },
  home: {
    heroEyebrow: 'Solar installation company · Satara, Maharashtra',
    heroTitle: 'Rooftop solar for homes and businesses in Satara',
    heroBody:
      'DRJ Solutions plans and installs rooftop solar from our office in Anand Nagar, Satara. We work on residential, commercial and industrial roofs — on-grid, hybrid or off-grid where the site needs it — and help you understand subsidy paperwork without treating unofficial numbers as promises. Book a free site survey to see what your roof can do.',
    trust: [
      { title: 'Rooftop Solar Solutions', text: 'For homes and businesses' },
      { title: 'Free Site Survey', text: 'Understand what your roof can do' },
      { title: 'Long-Term Performance', text: 'Designed for years of use' },
      { title: 'Low Maintenance', text: 'Simple upkeep after installation' },
    ],
    problemTitle: 'Bring your rising electricity bill back under your control.',
    problems: [
      {
        title: 'Rising electricity bills',
        text: 'Monthly bills keep climbing, and it becomes harder to plan household or business expenses.',
      },
      {
        title: 'Tariff increases',
        text: 'Unit rates change over time. Relying only on grid power leaves you exposed to those increases.',
      },
      {
        title: 'Dependence on conventional power',
        text: 'Your roof already receives sunlight. Without solar, that energy is unused every day.',
      },
      {
        title: 'Environmental impact',
        text: 'Cleaner electricity at home is one practical way to reduce your carbon footprint.',
      },
    ],
    problemBridge: 'Make a smarter energy decision with rooftop solar from DRJ Solutions.',
    whyTitle: 'Why rooftop solar?',
    whyBody:
      'Solar is not only an environmental choice. For many households and shops, it is a long-term way to use the roof you already have.',
    benefits: [
      {
        title: 'Meaningful bill reduction',
        text: 'A well-sized system can offset a large share of daytime consumption. Exact savings depend on your usage and tariff.',
      },
      {
        title: 'Make use of sunlight',
        text: 'Much of India receives strong solar radiation for much of the year. Your terrace or sloping roof can become a productive asset.',
      },
      {
        title: 'Long-term financial value',
        text: 'Panels are built for decades of generation. The investment is recovered over time through lower electricity purchase.',
      },
      {
        title: 'Low maintenance',
        text: 'Routine cleaning and periodic checks are typically enough. There are no moving parts on the panels themselves.',
      },
      {
        title: 'Cleaner energy',
        text: 'Every unit generated on your roof is a unit you did not need to draw entirely from conventional sources.',
      },
      {
        title: 'Greater energy independence',
        text: 'With net metering where available, surplus daytime generation can be accounted against your grid consumption.',
      },
    ],
    whyDrjTitle: 'Why choose DRJ Solutions?',
    whyDrjBody:
      'Solar is a significant decision. You need a team that explains the process clearly, surveys the site properly, and stays available after installation.',
    advantages: [
      {
        title: 'Reliable rooftop systems',
        text: 'We focus on systems that are appropriate for your roof, load and budget — not a one-size proposal.',
      },
      {
        title: 'Free site survey',
        text: 'A survey is the honest starting point. Shade, orientation and structure matter more than a brochure.',
      },
      {
        title: 'Customer-first consultation',
        text: 'We explain options in plain language, including what solar can and cannot do for your property.',
      },
      {
        title: 'Installation support',
        text: 'From design to commissioning, we stay involved so the system is set up for everyday use.',
      },
      {
        title: 'Maintenance guidance',
        text: 'You receive clear after-sales support so the system continues to perform as expected.',
      },
      {
        title: 'Performance focus',
        text: 'Equipment selection considers long-term generation, not only the lowest headline price.',
      },
      {
        title: 'Transparent process',
        text: 'Site conditions, subsidy paperwork and warranty terms are discussed before you commit.',
      },
      {
        title: 'Work at any location',
        text: 'Our office is at 7 Hills Apartment, Anand Nagar, Satara. We take projects anywhere — there is no service-area limit — and stay available for surveys, advice and support.',
      },
    ],
    solutionsTitle: 'Solar for homes, shops and industry',
    solutionsBody:
      'Whether you run a household in Satara, a shop, a clinic or a workshop, rooftop solar is planned around your bill, your roof and the type of connection you have.',
    residentialCard: {
      title: 'Residential solar',
      text: 'Independent houses, bungalows and villas. Sized around your bill, roof and family usage.',
      cta: 'Explore home solar',
    },
    commercialCard: {
      title: 'Commercial solar',
      text: 'Shops, offices, clinics, schools and small commercial buildings that want to reduce operating power costs.',
      cta: 'Explore commercial solar',
    },
    processTitle: 'How rooftop solar works with us',
    processBody: 'A clear path from first conversation to a working system on your roof.',
    subsidyTitle: 'Need help with solar subsidy?',
    subsidyBody:
      'Subsidy rules change. We help you understand the current process, documents and eligibility — without treating unofficial numbers as promises.',
    subsidyCta: 'Understand solar subsidy',
    projectsTitle: 'Projects & gallery',
    projectsBody:
      'Rooftop solar, shown as a visual journey. Documented DRJ Solutions installations will be published here as they are available.',
    faqTitle: 'Questions homeowners usually ask',
    faqBody: 'Straight answers on bills, monsoon, net metering, space and maintenance.',
    finalTitle: 'Is solar right for your home?',
    finalBody:
      'A free site survey is the most reliable way to know. We look at your roof, your bill and your goals — then we explain the options.',
    energyPath: [
      {
        label: 'Sun',
        title: 'Make use of sunlight',
        text: 'Much of India receives strong solar radiation for much of the year. Your terrace or sloping roof can become a productive asset.',
      },
      {
        label: 'Panels',
        title: 'Solar modules',
        text: 'Panels convert sunlight into DC electricity. The system on your roof is planned around shade, orientation and the space you actually have.',
      },
      {
        label: 'Energy',
        title: 'Meaningful bill reduction',
        text: 'A well-sized system can offset a large share of daytime consumption. Exact savings depend on your usage and tariff.',
      },
      {
        label: 'Home',
        title: 'Greater energy independence',
        text: 'With net metering where available, surplus daytime generation can be accounted against your grid consumption.',
      },
    ],
    moreLinks: [
      { to: ROUTES.industrial, label: 'Industrial solar for workshops and warehouses' },
      { to: ROUTES.onGrid, label: 'On-grid solar systems' },
      { to: ROUTES.hybrid, label: 'Hybrid solar with backup' },
      { to: ROUTES.maintenance, label: 'Solar maintenance and support' },
      { to: ROUTES.cost, label: 'Solar system cost in Satara' },
      { to: ROUTES.guides, label: 'Satara solar guides' },
    ],
  },
  about: {
    eyebrow: 'About us',
    title: 'A solar partner for homes and businesses',
    intro:
      'DRJ Solutions is a rooftop solar company based in Satara, Maharashtra. We help homeowners and businesses understand solar clearly, plan a system that fits the property, and move from enquiry to installation with practical support.',
    missionTitle: 'Our mission',
    mission:
      'To make rooftop solar understandable and accessible for families and businesses — so sunlight on your roof becomes reliable, useful electricity.',
    approachTitle: 'Customer-first approach',
    approach:
      'We start with listening: your bill, your roof, your questions. We do not push a standard package. A free site survey comes before any serious proposal, because shade, structure and consumption decide what is actually suitable.',
    localTitle: 'Office and reach',
    local:
      'Our office is at 7 Hills Apartment, 18, Shri Chhatrapati Shahu Maharaj Rd, Anand Nagar, Zunjar Colony, Satara, Maharashtra 415002. We take rooftop solar projects at any location — there is no service-area boundary. If you want to talk before filling a form, call or WhatsApp us.',
    ownerPlaceholderTitle: 'Leadership & team',
    ownerPlaceholder:
      'Founder details, team profiles and photographs can be added here when the business owner shares them. We have not invented names, years or awards.',
    values: [
      {
        title: 'Clarity',
        text: 'Estimates are labelled as estimates. Warranty terms depend on the equipment you choose.',
      },
      {
        title: 'Care',
        text: 'A rooftop system is a long relationship. We plan for support, not only for the installation day.',
      },
      {
        title: 'Clean energy',
        text: 'Solar adoption should feel practical. Environmental benefit is a result of a system that actually works.',
      },
    ],
  },
  residential: {
    eyebrow: 'Residential solar',
    title: 'Rooftop solar for homes',
    intro:
      'If you own an independent house, bungalow or villa in Satara or elsewhere, your roof can generate electricity for daily use. DRJ Solutions helps homeowners understand whether solar is suitable — and what size of system makes sense.',
    whatTitle: 'What is rooftop solar?',
    what: 'Rooftop solar places photovoltaic panels on your terrace or sloping roof. The panels convert sunlight into electricity that your home can use during the day. Where net metering is available, surplus units may be accounted against grid consumption as per the local electricity rules.',
    whoTitle: 'Who is it suitable for?',
    who: [
      'Independent house owners at any location',
      'Bungalows and villas with usable roof area',
      'Homes with a regular electricity bill they want to reduce',
      'Families planning a long-term energy decision, not a short gadget purchase',
    ],
    benefitsTitle: 'Benefits for homeowners',
    benefits: [
      {
        title: 'Lower grid dependence during the day',
        text: 'Solar generation typically aligns with daytime household loads such as fans, fridge and pumps.',
      },
      {
        title: 'A productive use of unused roof',
        text: 'A terrace that only holds a tank and a water heater can also host a generating asset.',
      },
      {
        title: 'Clearer long-term energy planning',
        text: 'Once installed, generation is relatively predictable compared with waiting for tariff changes.',
      },
    ],
    factorsTitle: 'What decides system size?',
    factors: [
      {
        title: 'Monthly electricity consumption',
        text: 'Your bill and unit consumption are the starting point. Oversizing without usage is rarely useful.',
      },
      {
        title: 'Available rooftop area',
        text: 'Water tanks, dishes, stairs and parapet walls reduce usable space.',
      },
      {
        title: 'Roof orientation & tilt',
        text: 'South-facing, unshaded surfaces generally perform better in India.',
      },
      {
        title: 'Shade',
        text: 'Trees, neighbouring buildings and overhead tanks can cut generation significantly.',
      },
      {
        title: 'Electricity connection',
        text: 'Sanctioned load and meter type affect what can be connected and how net metering is applied.',
      },
      {
        title: 'Budget & energy goals',
        text: 'Some families offset a portion of the bill first; others plan a larger roof utilisation.',
      },
    ],
    processNote:
      'A free site survey is the correct next step. Photographs and a recent electricity bill help us prepare, but the roof still needs to be seen.',
    related: [
      { to: ROUTES.onGrid, label: 'On-grid solar for grid-connected homes' },
      { to: ROUTES.subsidy, label: 'Residential subsidy guidance in Maharashtra' },
      { to: ROUTES.cost, label: 'What affects home solar cost' },
      { to: ROUTES.guideSatara, label: 'Practical rooftop solar guide for Satara' },
    ],
  },
  commercial: {
    eyebrow: 'Commercial solar',
    title: 'Solar for shops, offices and businesses',
    intro:
      'If your business in Satara or elsewhere pays a substantial electricity bill, rooftop solar can be part of a longer energy plan. DRJ Solutions works with shops, offices, clinics, schools and commercial buildings.',
    whoTitle: 'Who we typically speak with',
    who: [
      'Retail shops and showrooms',
      'Offices and professional chambers',
      'Clinics and small hospitals',
      'Schools and coaching centres',
      'Small factories and workshops',
      'Warehouses and commercial buildings',
    ],
    benefitsTitle: 'Why businesses consider rooftop solar',
    benefits: [
      {
        title: 'Lower operating electricity costs',
        text: 'Daytime loads such as lighting, cooling and equipment often overlap with solar generation hours.',
      },
      {
        title: 'Long-term energy planning',
        text: 'A rooftop system is a capital decision that can reduce exposure to future tariff movement.',
      },
      {
        title: 'Better sustainability profile',
        text: 'Customers, students and partners increasingly notice whether a premises uses cleaner energy.',
      },
      {
        title: 'Use of idle roof area',
        text: 'Large, relatively empty commercial roofs are often well suited to solar — if structure and shade allow.',
      },
    ],
    note: 'We do not quote a guaranteed percentage saving without assessing your load, tariff category and roof. A discussion and site survey come first.',
    related: [
      { to: ROUTES.industrial, label: 'Industrial solar for factories and warehouses' },
      { to: ROUTES.onGrid, label: 'On-grid solar during business hours' },
      { to: ROUTES.cost, label: 'Commercial solar cost factors' },
      { to: ROUTES.contact, label: 'Discuss a commercial site survey' },
    ],
  },
  subsidy: {
    eyebrow: 'Solar subsidy',
    title: 'Understand rooftop solar subsidy — without the confusion',
    intro:
      'Many homeowners ask about government subsidy before anything else. That is reasonable. Subsidy can improve project economics — but eligibility, documents and amounts depend on current government rules, not on a website paragraph.',
    disclaimer:
      'This page is guidance, not legal or financial advice. Scheme names, slab amounts and processes change. Always verify on official government portals before you make a decision.',
    sections: [
      {
        title: 'What subsidy means',
        text: 'A rooftop solar subsidy is typically financial assistance from a government scheme towards an eligible residential (and in some cases other) installation. It is not automatic cash in hand. It usually requires an application, documents, an approved vendor/process, and commissioning as per the scheme.',
      },
      {
        title: 'Who may be eligible',
        text: 'Eligibility is defined by the scheme in force — often linked to residential consumers, sanctioned load, and whether the system is installed through the prescribed process. Commercial eligibility is different and should not be assumed from residential advertisements.',
      },
      {
        title: 'How the process generally works',
        text: 'In broad terms: check current scheme rules → apply on the official portal if required → complete documentation → install through the eligible route → inspection/commissioning → subsidy processing. Exact steps follow the portal and the local discom process.',
      },
      {
        title: 'Why documentation matters',
        text: 'Identity proof, electricity bill, property papers, bank details and photographs are commonly requested. Incomplete or mismatched documents are a frequent reason for delay. Keep your latest bill handy when you speak with us.',
      },
      {
        title: 'Verify current rules',
        text: 'Do not rely on old flyers, social media forwards or a neighbour’s amount from two years ago. Official sources such as the PM Surya Ghar portal and MNRE publish the rules that actually apply.',
      },
      {
        title: 'PM Surya Ghar: Muft Bijli Yojana',
        text: 'This is the current central residential rooftop programme many Maharashtra homeowners ask about. Applications, vendor rules, capacity caps and disbursement follow the official portal — not a flyer. DRJ Solutions can walk you through the steps that apply today. We will not type an unofficial slab amount onto this page.',
      },
      {
        title: 'How DRJ Solutions can assist',
        text: 'We help you understand the current process in plain language, prepare for documentation, and align the system design with what the site and the scheme allow. We will not invent a subsidy figure to close a conversation.',
      },
    ],
    helpTitle: 'Want help understanding your solar subsidy eligibility?',
    helpBody:
      'Bring a recent electricity bill and a few roof photographs if you have them. We will walk through the current process and the next practical step.',
    related: [
      { to: ROUTES.residential, label: 'Home rooftop solar in Satara' },
      { to: ROUTES.cost, label: 'Cost factors before subsidy' },
      { to: ROUTES.guideSatara, label: 'Satara rooftop solar guide' },
      { to: ROUTES.contact, label: 'Talk through your subsidy questions' },
    ],
  },
  howItWorks: {
    eyebrow: 'Process',
    title: 'Six clear steps to rooftop solar',
    intro:
      'You should never feel unsure about what happens after you call. This is the path we follow with residential and commercial customers.',
    steps: [
      {
        title: 'Initial consultation',
        text: 'Share your bill, property type and questions. We explain what solar can reasonably do for your situation.',
      },
      {
        title: 'Electricity bill analysis',
        text: 'Consumption pattern, sanctioned load and tariff category help us think about a sensible system range.',
      },
      {
        title: 'Free site survey',
        text: 'We visit the roof to check area, shade, orientation, structure and the electrical connection point.',
      },
      {
        title: 'System design & proposal',
        text: 'You receive a proposal based on the survey — equipment options, layout thinking and next steps, including subsidy process where relevant.',
      },
      {
        title: 'Installation & setup',
        text: 'After you confirm, installation and electrical setup are carried out, followed by commissioning as applicable.',
      },
      {
        title: 'After-sales / maintenance support',
        text: 'You get guidance on cleaning, monitoring and support so the system remains useful for the long term.',
      },
    ],
    related: [
      { to: ROUTES.onGrid, label: 'On-grid installation behaviour' },
      { to: ROUTES.maintenance, label: 'Maintenance after commissioning' },
      { to: ROUTES.contact, label: 'Book a free site survey' },
      { to: ROUTES.guideSatara, label: 'What a Satara survey looks at' },
    ],
  },
  calculator: {
    eyebrow: 'Planning tool',
    title: 'Solar savings calculator',
    intro:
      'Enter your monthly bill to see an indicative system range for your location. This is a planning estimate — not a quotation and not a guaranteed return.',
    billLabel: 'Monthly electricity bill (₹)',
    consumptionLabel: 'Average monthly consumption (kWh)',
    roofLabel: 'Roof availability',
    tariffLabel: 'Electricity tariff (₹ / kWh)',
    locationLabel: 'Location',
    roofOptions: {
      limited: 'Limited (tanks, shade, small terrace)',
      adequate: 'Adequate (typical independent house)',
      spacious: 'Spacious (large terrace / commercial roof)',
    },
    compute: 'Calculate estimate',
    resultTitle: 'Indicative estimate',
    systemRange: 'Estimated suitable system range',
    generation: 'Potential annual generation',
    savings: 'Potential annual savings',
    payback: 'Estimated payback range',
    disclaimer:
      'Actual savings depend on electricity tariff, consumption pattern, rooftop conditions, system size, shading, applicable regulations and other factors. Contact DRJ Solutions for a detailed assessment.',
    invalid: 'Enter a valid monthly bill greater than zero.',
  },
  projects: {
    eyebrow: 'Gallery',
    title: 'Projects',
    intro:
      'These photographs illustrate rooftop solar — they are not documented DRJ Solutions installations. Project photos from our work will replace them as they are available.',
    items: [
      {
        id: 'p1',
        image: 'residential',
        propertyType: 'Residential rooftop',
        location: 'Illustrative',
        details: 'Home rooftop solar',
        description: 'A residential roof carrying photovoltaic modules — the kind of installation we survey and plan for homes.',
      },
      {
        id: 'p2',
        image: 'commercial',
        propertyType: 'Commercial rooftop',
        location: 'Illustrative',
        details: 'Business rooftop solar',
        description: 'A commercial roof using available area for generation during working hours.',
      },
      {
        id: 'p3',
        image: 'install',
        propertyType: 'Installation work',
        location: 'Illustrative',
        details: 'On-roof work',
        description: 'Modules are placed, aligned and fixed on the roof structure after the survey and design are agreed.',
      },
      {
        id: 'p4',
        image: 'array',
        propertyType: 'Solar array',
        location: 'Illustrative',
        details: 'Array layout',
        description: 'Rows of modules laid out for access, shade and electrical design — always site-specific.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions about rooftop solar',
    intro:
      'These answers are written for homeowners and businesses. They are educational — a site survey is still needed before any proposal.',
    items: [
      {
        q: 'What is rooftop solar?',
        a: 'Rooftop solar is a set of photovoltaic panels installed on your terrace or sloping roof. They convert sunlight into electricity that your home or business can use. Extra generation may be handled through net metering where the local electricity rules allow it.',
      },
      {
        q: 'How does rooftop solar reduce electricity bills?',
        a: 'During the day, you use electricity generated on your roof instead of buying the same units from the grid. If net metering applies, exported surplus can be adjusted against imported units as per your discom’s rules. Night-time use still typically comes from the grid unless you add storage.',
      },
      {
        q: 'How much rooftop space is required?',
        a: 'As a rough planning thumb-rule, about 80–100 sq. ft. of unshaded area may be needed per kW, depending on panel type and layout. Water tanks, shade and walkways reduce usable area. Only a survey can confirm what your roof can hold.',
      },
      {
        q: 'Does solar work during monsoon?',
        a: 'Yes, panels generate whenever there is daylight, including cloudy days — but generation is lower when the sky is overcast or panels are wet and dirty. Annual estimates already assume seasonal variation. Cleaning after dusty or pollen-heavy periods helps.',
      },
      {
        q: 'What happens at night?',
        a: 'Standard rooftop solar generates when there is sunlight. At night you use grid electricity, unless a battery is part of the design. Net metering, where available, is how daytime surplus is accounted over the billing cycle.',
      },
      {
        q: 'What maintenance does a solar system need?',
        a: 'Panels generally need periodic cleaning so dust does not sit on the glass. Electrical checks and inverter health should be reviewed as recommended. There are no moving parts on the modules themselves. We explain a simple upkeep routine after installation.',
      },
      {
        q: 'How long do solar panels last?',
        a: 'Quality solar modules are designed for decades of generation. Output declines slowly over time. Performance warranty terms depend on the manufacturer and the equipment selected for your project.',
      },
      {
        q: 'What is net metering?',
        a: 'Net metering is a billing arrangement in which electricity you export to the grid can be adjusted against electricity you import, according to the rules of your electricity distribution company. Availability, application process and charges are set by regulation — not by the installer.',
      },
      {
        q: 'Is government subsidy available?',
        a: 'Residential rooftop solar has been supported by central (and sometimes state) schemes, but eligibility and amounts change. Check the current official portal, and ask us to walk you through the process that applies today. We do not quote an unofficial subsidy figure as a promise.',
      },
      {
        q: 'How much does a rooftop solar system cost?',
        a: 'Cost depends on system size, module and inverter choice, structure, electrical work and whether subsidy applies. A neighbour’s price is not your price. After a site survey we can share a proposal for your roof.',
      },
      {
        q: 'How is system size decided?',
        a: 'Size is based on your consumption, available unshaded roof, sanctioned load, budget and energy goals. Bigger is not always better if the roof is shaded or the load is small.',
      },
      {
        q: 'Can solar be installed on an existing house?',
        a: 'Yes, most rooftop projects are on existing homes and buildings. The survey checks structure, waterproofing details, cable routing and the meter location. Some roofs need extra structure or layout adjustments.',
      },
      {
        q: 'How long does installation take?',
        a: 'On-site installation time varies with system size, roof type and electrical work. Paperwork, net metering and subsidy steps can take longer than the physical install. We share a realistic sequence after the survey rather than a single number for every site.',
      },
      {
        q: 'What warranty is provided?',
        a: 'Warranty is tied to the equipment you choose. Solar modules often carry a long performance warranty — the flyer mentions a 25-year performance warranty in that context. Inverters, structure and workmanship have separate terms. Panel/system performance warranty may be available depending on the selected equipment and applicable warranty terms. It does not mean every component is covered for 25 years.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Talk to DRJ Solutions',
    intro:
      'Call, WhatsApp, or request a free site survey from any location. Our office is at 7 Hills Apartment, Anand Nagar, Satara.',
    callTitle: 'Call us',
    callBody: 'Speak with us about your bill, roof or a site visit.',
    waTitle: 'WhatsApp',
    waBody: 'Send a message with your locality and a recent bill amount if you have it.',
    emailTitle: 'Email',
    emailBody: 'Write to us and we will reply to your enquiry.',
    addressTitle: 'Visit / write to us',
    mapTitle: 'Location',
    mapPlaceholder:
      'A Google Map will appear here once the business confirms the exact map link. Until then, use the address to open Google Maps.',
    hoursPlaceholder: 'Visiting hours can be added here when confirmed.',
  },
  legal: {
    privacyTitle: 'Privacy Policy',
    privacyBody: [
      'This website is operated by DRJ Solutions, Satara. When you submit an enquiry form, we collect the information you enter — typically your name, phone number, city, optional electricity bill amount, property type and message.',
      'We use this information only to respond to your rooftop solar enquiry. Submissions are emailed to DRJ Solutions at {email}. We do not sell your details.',
      'You can ask us to update or remove enquiry details by calling 9579792080 or emailing {email}.',
    ],
    termsTitle: 'Terms & Conditions',
    termsIntro:
      'These terms apply when you use this website or contact DRJ Solutions about rooftop solar. DRJ Solutions is a rooftop solar business operating from Satara, Maharashtra.',
    termsSections: [
      {
        title: 'Who we are',
        body: [
          'DRJ Solutions provides rooftop solar solutions for homes and businesses. You can reach us on 9579792080, WhatsApp, or {email}.',
          'Our office is at 7 Hills Apartment, 18, Shri Chhatrapati Shahu Maharaj Rd, Anand Nagar, Zunjar Colony, Satara, Maharashtra 415002. We take rooftop solar projects at any location.',
        ],
      },
      {
        title: 'Using this website',
        body: [
          'This website is the official online presence of DRJ Solutions. Use it to understand our rooftop solar work, check an indicative savings estimate, book a free site survey, and get in touch.',
          'By using the site or sending an enquiry, you agree to these terms.',
        ],
      },
      {
        title: 'Enquiries, site surveys and paid work',
        body: [
          'A form, phone call or WhatsApp message is a request to talk. It does not by itself create a paid contract.',
          'A free site survey helps us understand your roof, shading and electricity use. Supply, installation or any paid work goes ahead only after we share a proposal and you accept it — in writing, including email or WhatsApp where we agree to work that way.',
        ],
      },
      {
        title: 'Estimates and the savings calculator',
        body: [
          'Figures on this website, including calculator results, are indicative. Actual system size, generation, savings and payback depend on your tariff, consumption, rooftop conditions, shading, equipment, net metering and applicable rules.',
          'We confirm numbers in a proposal after assessing the site.',
        ],
      },
      {
        title: 'Subsidy and net metering',
        body: [
          'Subsidy and net metering depend on current government and electricity-distribution rules, your eligibility, and approvals that are outside our control. We can guide you through the process. We do not guarantee that any scheme, amount or timeline will apply to your project.',
        ],
      },
      {
        title: 'Your details',
        body: [
          'When you contact us, you confirm that the name, phone number and other details you share are accurate, and that we may use them to respond by call, WhatsApp or email.',
        ],
      },
      {
        title: 'Website content',
        body: [
          'Text, branding and layout on this website belong to DRJ Solutions unless credited otherwise. Do not copy the site for a competing service without our permission.',
        ],
      },
      {
        title: 'Responsibility',
        body: [
          'We keep this website useful and update pages from time to time. DRJ Solutions is not responsible for decisions made only on website estimates or general guidance, or for delays caused by government portals, the electricity distribution company, or site conditions we could not reasonably know before a survey.',
          'Our responsibility for paid work is as set out in the proposal or agreement you accept.',
        ],
      },
      {
        title: 'Governing law',
        body: [
          'These terms are governed by the laws of India. Disputes are subject to the courts at Satara, Maharashtra.',
        ],
      },
      {
        title: 'Changes and contact',
        body: [
          'We may update these terms on this page. For questions, call 9579792080 or email {email}.',
        ],
      },
    ],
  },
  notFound: {
    title: 'This page is not available.',
    body: 'The link may be incorrect. Return home or request a free site survey from any page.',
  },
  footer: {
    explore: 'Explore',
    contact: 'Contact',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
  },
  ...enExtraPages,
};
