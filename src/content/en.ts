import { ROUTES } from '@/config/site';
import type { SiteContent } from '@/content/types';

export const en: SiteContent = {
  langName: 'English',
  dir: 'ltr',
  brand: {
    short: 'DRJ Solutions',
    tagline: 'Rooftop solar for Satara homes and businesses',
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
      ],
    },
    { id: 'subsidy', to: ROUTES.subsidy, label: 'Subsidy' },
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
    serving: 'Serving Satara & surrounding areas',
    indicative: 'Indicative Estimate',
    placeholderNote: 'Placeholder visual — replace with a DRJ Solutions project photo.',
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
  },
  details: {
    serviceAreaTitle: 'Local to Satara',
    serviceAreaBody:
      'DRJ Solutions works from Yadogopal Peth, Satara. We help independent houses, shops and local businesses in Satara and surrounding areas through a free site survey. If you are nearby and unsure whether we cover your locality, call or WhatsApp — we will tell you honestly.',
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
      'Planning defaults for Satara: about 1,550 kWh generated per kW per year, and a unit rate you can edit. If your bill shows a different tariff, change that field. Results stay indicative until a site survey.',
    terraceNoteTitle: 'Typical Satara roofs',
    terraceNote:
      'Many independent houses in Satara have an RCC terrace with a water tank, solar water heater or dish antenna. Usable area is what remains after those objects and shade. A survey is how we measure that — not a guess from a photograph alone.',
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
    home: {
      title: 'Rooftop Solar in Satara | DRJ Solutions',
      description:
        'DRJ Solutions provides rooftop solar solutions in Satara, Maharashtra. Book a free site survey and understand how solar can reduce your electricity bills.',
    },
    about: {
      title: 'About DRJ Solutions | Solar Company in Satara',
      description:
        'DRJ Solutions is a local rooftop solar provider serving Satara and surrounding areas with site surveys, system planning and installation support.',
    },
    residential: {
      title: 'Residential Rooftop Solar in Satara | DRJ Solutions',
      description:
        'Rooftop solar for homes, bungalows and independent houses in Satara. Understand suitability, process and book a free site survey.',
    },
    commercial: {
      title: 'Commercial Solar in Satara | DRJ Solutions',
      description:
        'Rooftop solar for shops, offices, clinics, schools and commercial buildings in Satara. Discuss your requirement with DRJ Solutions.',
    },
    subsidy: {
      title: 'Solar Subsidy in Satara | Guidance by DRJ Solutions',
      description:
        'Understand how rooftop solar subsidy generally works in India, what documents may be needed, and how DRJ Solutions can guide you through the process.',
    },
    howItWorks: {
      title: 'How Rooftop Solar Installation Works | DRJ Solutions',
      description:
        'From consultation and bill analysis to free site survey, system design, installation and support — see how DRJ Solutions approaches rooftop solar.',
    },
    calculator: {
      title: 'Solar Savings Calculator | DRJ Solutions Satara',
      description:
        'Get an indicative estimate of rooftop solar system size, generation and potential savings for Satara. Actual results need a site assessment.',
    },
    projects: {
      title: 'Solar Projects Gallery | DRJ Solutions',
      description:
        'A gallery of rooftop solar visuals. Real DRJ Solutions project photos will replace placeholders as installations are documented.',
    },
    faq: {
      title: 'Rooftop Solar FAQ | DRJ Solutions Satara',
      description:
        'Answers to common questions about rooftop solar, net metering, monsoon performance, maintenance, subsidy and system sizing in Satara.',
    },
    contact: {
      title: 'Contact DRJ Solutions | Solar Site Survey in Satara',
      description:
        'Call 9579792080, WhatsApp DRJ Solutions, or request a free rooftop solar site survey. Visit us at Yadogopal Peth, Satara.',
    },
    privacy: {
      title: 'Privacy Policy | DRJ Solutions',
      description: 'How DRJ Solutions handles enquiry information submitted through this website.',
    },
    terms: {
      title: 'Terms & Conditions | DRJ Solutions',
      description: 'Website terms for using the DRJ Solutions rooftop solar website.',
    },
    notFound: {
      title: 'Page not found | DRJ Solutions',
      description: 'The page you requested is not available.',
    },
  },
  home: {
    heroEyebrow: 'Rooftop solar · Satara, Maharashtra',
    heroTitle: 'Take the power of the sun, and save thousands on electricity.',
    heroBody:
      'Switch to rooftop solar and take control of your electricity costs with a reliable solar solution from DRJ Solutions.',
    trust: [
      { title: 'Rooftop Solar Solutions', text: 'For homes and local businesses' },
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
      'Solar is not only an environmental choice. For many Satara households and shops, it is a long-term way to use the roof you already have.',
    benefits: [
      {
        title: 'Meaningful bill reduction',
        text: 'A well-sized system can offset a large share of daytime consumption. Exact savings depend on your usage and tariff.',
      },
      {
        title: 'Make use of sunlight',
        text: 'Satara receives strong solar radiation for much of the year. Your terrace or sloping roof can become a productive asset.',
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
      'Solar is a significant decision. You need a local team that explains the process clearly, surveys the site properly, and stays available after installation.',
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
        title: 'Local Satara presence',
        text: 'We are based in Yadogopal Peth, Satara — close enough to visit, advise and support.',
      },
    ],
    solutionsTitle: 'Solar for homes and businesses',
    solutionsBody:
      'Whether you run a household in Satara or a shop, clinic or office, rooftop solar can be planned around your actual electricity use.',
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
      'This gallery is ready for real DRJ Solutions installations. Placeholder images are labelled as such until project photos are added.',
    faqTitle: 'Questions homeowners usually ask',
    faqBody: 'Straight answers on bills, monsoon, net metering, space and maintenance.',
    finalTitle: 'Is solar right for your home?',
    finalBody:
      'A free site survey is the most reliable way to know. We look at your roof, your bill and your goals — then we explain the options.',
  },
  about: {
    eyebrow: 'About us',
    title: 'A local solar partner for Satara',
    intro:
      'DRJ Solutions provides rooftop solar solutions for homes and businesses in Satara and surrounding areas. We help customers understand solar clearly, plan a system that fits the property, and move from enquiry to installation with practical support.',
    missionTitle: 'Our mission',
    mission:
      'To make rooftop solar understandable and accessible for families and local businesses — so sunlight on Satara roofs becomes reliable, useful electricity.',
    approachTitle: 'Customer-first approach',
    approach:
      'We start with listening: your bill, your roof, your questions. We do not push a standard package. A free site survey comes before any serious proposal, because shade, structure and consumption decide what is actually suitable.',
    localTitle: 'Local service',
    local:
      'We work from Yadogopal Peth, Satara. Being nearby matters for surveys, coordination and after-sales support. If you want to talk before filling a form, call or WhatsApp us.',
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
    title: 'Rooftop solar for homes in Satara',
    intro:
      'If you own an independent house, bungalow or villa, your roof can generate electricity for daily use. DRJ Solutions helps Satara homeowners understand whether solar is suitable — and what size of system makes sense.',
    whatTitle: 'What is rooftop solar?',
    what: 'Rooftop solar places photovoltaic panels on your terrace or sloping roof. The panels convert sunlight into electricity that your home can use during the day. Where net metering is available, surplus units may be accounted against grid consumption as per the local electricity rules.',
    whoTitle: 'Who is it suitable for?',
    who: [
      'Independent house owners in Satara and nearby areas',
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
        text: 'South-facing, unshaded surfaces generally perform better in this region.',
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
  },
  commercial: {
    eyebrow: 'Commercial solar',
    title: 'Solar for shops, offices and local businesses',
    intro:
      'If your business pays a substantial electricity bill, rooftop solar can be part of a longer energy plan. DRJ Solutions works with shops, offices, clinics, schools and small commercial buildings in the Satara region.',
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
  },
  subsidy: {
    eyebrow: 'Solar subsidy',
    title: 'Understand rooftop solar subsidy — without the confusion',
    intro:
      'Many homeowners in Satara ask about government subsidy before anything else. That is reasonable. Subsidy can improve project economics — but eligibility, documents and amounts depend on current government rules, not on a website paragraph.',
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
        title: 'How DRJ Solutions can assist',
        text: 'We help you understand the current process in plain language, prepare for documentation, and align the system design with what the site and the scheme allow. We will not invent a subsidy figure to close a conversation.',
      },
    ],
    helpTitle: 'Want help understanding your solar subsidy eligibility?',
    helpBody:
      'Bring a recent electricity bill and a few roof photographs if you have them. We will walk through the current process and the next practical step.',
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
  },
  calculator: {
    eyebrow: 'Planning tool',
    title: 'Solar savings calculator',
    intro:
      'Enter your monthly bill to see an indicative system range for Satara. This is a planning estimate — not a quotation and not a guaranteed return.',
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
      'Real DRJ Solutions installation photographs will be published here as they are documented. Until then, these are placeholder visuals — not claims of completed DRJ projects.',
    items: [
      {
        id: 'p1',
        image: '/images/rooftop-india.jpg',
        propertyType: 'Residential rooftop',
        location: 'Visual reference',
        details: 'To be added',
        description:
          'Replace with a photographed DRJ residential installation, including location and system size if the customer agrees.',
      },
      {
        id: 'p2',
        image: '/images/residential.jpg',
        propertyType: 'Commercial rooftop',
        location: 'Visual reference',
        details: 'To be added',
        description:
          'Replace with a DRJ commercial or institutional rooftop once project documentation is available.',
      },
      {
        id: 'p3',
        image: '/images/gallery-1.jpg',
        propertyType: 'Installation work',
        location: 'Visual reference',
        details: 'To be added',
        description:
          'Replace with on-site installation photographs from a DRJ project team, with permission.',
      },
      {
        id: 'p4',
        image: '/images/gallery-3.jpg',
        propertyType: 'Solar array',
        location: 'Visual reference',
        details: 'To be added',
        description:
          'Replace with a completed array photograph showing the actual roof type in Satara.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions about rooftop solar',
    intro:
      'These answers are written for Satara homeowners. They are educational — a site survey is still needed before any proposal.',
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
    intro: 'Call, WhatsApp, or request a free site survey. We are based in Yadogopal Peth, Satara.',
    callTitle: 'Call us',
    callBody: 'Speak with us about your bill, roof or a site visit.',
    waTitle: 'WhatsApp',
    waBody: 'Send a message with your locality and a recent bill amount if you have it.',
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
      'We use this information only to respond to your rooftop solar enquiry. We do not sell your details. If a backend, CRM or messaging service is connected later, the same purpose applies.',
      'Leads submitted while no server is configured may be stored in your browser until an API is connected; treat that as a temporary development behaviour, not a marketing database.',
      'You can ask us to update or remove enquiry details by calling 9579792080.',
      'This page is a working privacy notice and can be reviewed by the business owner or a legal advisor before wider public launch.',
    ],
    termsTitle: 'Terms & Conditions',
    termsBody: [
      'This website provides information about rooftop solar solutions offered by DRJ Solutions. Content is educational and promotional. It is not a contract, quotation, or guarantee of savings, subsidy or installation timelines.',
      'Calculator results are indicative estimates. Actual system size, generation and savings depend on site conditions, tariff, consumption, equipment and regulations.',
      'Subsidy information is general guidance. Government rules change. Verify current eligibility on official portals.',
      'Images in the projects gallery may be placeholders until real project photographs are provided. Placeholder images are not DRJ installations.',
      'By contacting us you confirm that the phone number you share can be used to respond to your enquiry.',
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
};
