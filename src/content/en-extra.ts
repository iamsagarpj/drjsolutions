import { ROUTES } from '@/config/site';
import type { GuidePageCopy, ServicePageCopy, SiteContent } from '@/content/types';

const industrial: ServicePageCopy = {
  eyebrow: 'Industrial solar',
  title: 'Solar for workshops, warehouses and industrial roofs',
  intro:
    'Industrial roofs often have more area and more daytime load than a house. DRJ Solutions surveys structure, electrical capacity and working hours before proposing a system. This page is for factories, workshops and warehouses — not a copy of our shop-and-office commercial page.',
  whoTitle: 'Who this is for',
  who: [
    'Workshops and light manufacturing with daytime machinery',
    'Warehouses and packing units with lighting and material-handling loads',
    'Industrial sheds where the roof can take a surveyed mounting design',
    'Businesses whose tariff and sanctioned load are different from a household connection',
  ],
  benefitsTitle: 'Why industrial sites look at rooftop solar',
  benefits: [
    {
      title: 'Daytime generation matches working hours',
      text: 'Many industrial loads run while the sun is up. That is when an on-grid system produces most of its electricity.',
    },
    {
      title: 'A large roof is an asset only if the structure allows it',
      text: 'Sheet roofs, trusses and older sheds need a survey. We do not assume every industrial roof is ready for modules.',
    },
    {
      title: 'Planning around tariff, not a household brochure',
      text: 'Commercial and industrial tariffs, contract demand and discom process differ from a home net-metering application. We discuss those before you treat a neighbour’s home quote as your number.',
    },
  ],
  considerTitle: 'What a survey has to check',
  consider: [
    {
      title: 'Roof structure and access',
      text: 'Wind load, sheet condition, walkways, skylights and safety during installation all matter more on a working site.',
    },
    {
      title: 'Electrical room and transformer capacity',
      text: 'The connection point, cable route and existing load decide what can be added without guesswork.',
    },
    {
      title: 'Shade from parapets, tanks and neighbouring sheds',
      text: 'Industrial roofs are rarely empty. Layout has to leave service paths and avoid permanent shade.',
    },
    {
      title: 'Subsidy expectations',
      text: 'Residential rooftop schemes such as PM Surya Ghar do not automatically apply to industrial connections. We will not sell an industrial project on a home subsidy figure.',
    },
  ],
  processNote:
    'Industrial work starts with a conversation about your bill, working hours and roof type, then a site survey. A proposal follows the survey — not a standard kilowatt package from a flyer.',
  faqs: [
    {
      q: 'Is industrial solar the same as commercial solar for a shop?',
      a: 'No. Shops and clinics often resemble a large household in connection type. Industrial sites usually have heavier structure questions, different tariffs and a different paperwork path. That is why this page is separate.',
    },
    {
      q: 'Can we install during working hours?',
      a: 'Often yes, with a safety plan and roof access that does not block operations. The survey is where we see whether staging, crane or shutdown windows are needed. We do not promise a one-day install for every shed.',
    },
    {
      q: 'Do you take industrial projects only in Satara?',
      a: 'Our office is in Satara. We take rooftop projects at other locations after we understand the site. Travel and survey planning are part of that conversation.',
    },
  ],
  related: [
    { to: ROUTES.commercial, label: 'Commercial solar for shops and offices' },
    { to: ROUTES.onGrid, label: 'How on-grid solar behaves on a working day' },
    { to: ROUTES.cost, label: 'What drives solar system cost' },
    { to: ROUTES.contact, label: 'Discuss an industrial site survey' },
  ],
  photoAlt: 'Daylight solar array on a large commercial or industrial roof',
};

const onGrid: ServicePageCopy = {
  eyebrow: 'On-grid solar',
  title: 'On-grid rooftop solar for homes and businesses in Satara',
  intro:
    'An on-grid (grid-tied) system generates when there is sunlight and uses the electricity company supply when there is not. It is the usual design for houses and shops in Satara that already have a stable grid connection. It does not store energy unless you add a battery as a separate design.',
  whoTitle: 'Who on-grid solar typically suits',
  who: [
    'Homes and businesses with a regular electricity connection',
    'Customers whose main goal is to reduce daytime grid consumption',
    'Sites where net metering may be available through the local discom process',
    'People who do not need the system to run the house during a power cut',
  ],
  benefitsTitle: 'What on-grid solar is good at',
  benefits: [
    {
      title: 'Lower equipment complexity than a battery system',
      text: 'There is no battery bank to size, house or replace. That keeps the design simpler when the grid is already your night-time source.',
    },
    {
      title: 'Daytime bill reduction',
      text: 'Fans, fridge, pumps, shop lighting and office loads can use solar first while the sun is on the roof.',
    },
    {
      title: 'Export only where rules allow',
      text: 'Surplus may be accounted through net metering after the electricity company completes its process. Rules, charges and timelines are set by regulation, not by the installer.',
    },
  ],
  considerTitle: 'Limitations you should know',
  consider: [
    {
      title: 'Power cuts',
      text: 'A standard on-grid inverter shuts down when the grid is off. That is a safety requirement so the system does not feed a line that workers may be repairing. Panels on the roof do not keep the lights on during a cut unless a hybrid or backup design is specified.',
    },
    {
      title: 'Night-time use',
      text: 'After sunset you use grid electricity. Net metering, where sanctioned, is how daytime surplus is settled over the billing cycle — it is not a battery.',
    },
    {
      title: 'Paperwork',
      text: 'Connection, net meter and subsidy steps follow the current discom and scheme process. We guide you; we cannot skip official steps.',
    },
  ],
  processNote:
    'If you mainly want to cut the daytime bill on a grid-connected property in Satara, on-grid solar is usually the starting point. A survey still has to confirm roof, shade and electrical fit.',
  faqs: [
    {
      q: 'Will my on-grid solar work during a load-shedding period?',
      a: 'A standard grid-tied inverter stops generating when the grid is down. If backup during cuts is the reason you want solar, ask us about hybrid design rather than assuming panels alone will run the house.',
    },
    {
      q: 'Is on-grid solar eligible for residential subsidy?',
      a: 'Residential schemes such as PM Surya Ghar are typically built around grid-connected rooftop systems that follow the official process. Eligibility is defined by the scheme in force. We help you check the current portal rather than quoting an unofficial amount.',
    },
    {
      q: 'Do I still get a bill?',
      a: 'Yes. You remain a consumer of the electricity company. The bill should reflect import, and export if net metering is in place, according to their rules.',
    },
  ],
  related: [
    { to: ROUTES.hybrid, label: 'When a hybrid system is worth discussing' },
    { to: ROUTES.offGrid, label: 'Off-grid solar with batteries' },
    { to: ROUTES.guideSystemTypes, label: 'On-grid vs off-grid vs hybrid compared' },
    { to: ROUTES.residential, label: 'Residential rooftop solar in Satara' },
  ],
  photoAlt: 'Rooftop solar panels on a house connected to the electricity grid',
};

const offGrid: ServicePageCopy = {
  eyebrow: 'Off-grid solar',
  title: 'Off-grid solar with battery storage',
  intro:
    'An off-grid system is designed to run without exporting to the electricity company. It needs generation, storage and a load plan that can survive cloudy days. It is not the default recommendation for a typical Satara house that already has a grid connection.',
  whoTitle: 'When off-grid is a serious option',
  who: [
    'Sites with no reliable grid, or where a new connection is not practical',
    'Farm sheds, remote stores or small loads that must run independently',
    'Customers who understand that batteries add cost, space and replacement cycles',
    'Projects where export and net metering are not the goal',
  ],
  benefitsTitle: 'What off-grid can do',
  benefits: [
    {
      title: 'Electricity where the grid is weak or absent',
      text: 'If the site cannot depend on the discom, storage is how you keep essential loads on after sunset.',
    },
    {
      title: 'A design driven by load, not by a neighbour’s on-grid size',
      text: 'Autonomy (how many hours or days you need) decides battery size. Copying a 5 kW grid-tied quote will not produce an off-grid system.',
    },
  ],
  considerTitle: 'Costs and constraints',
  consider: [
    {
      title: 'Batteries dominate the budget',
      text: 'Storage, protection, ventilation and eventual replacement are a large part of off-grid cost. We will say so before you compare it with a simple rooftop grid-tied price.',
    },
    {
      title: 'Loads have to be listed honestly',
      text: 'A pump, fridge or welding machine changes the design. Undersizing storage is how off-grid systems disappoint.',
    },
    {
      title: 'Subsidy and net metering',
      text: 'Do not assume a residential grid-tied subsidy applies to a standalone off-grid plant. Check the scheme text that is in force.',
    },
  ],
  processNote:
    'Tell us whether the site has a grid connection at all. If it does, we usually discuss on-grid or hybrid first. Off-grid is for a specific job, not a marketing upgrade.',
  faqs: [
    {
      q: 'Can I run my whole house off-grid in Satara city?',
      a: 'Technically a house can be designed that way, but it is usually expensive compared with staying on the grid and adding solar for daytime use. We would rather explain that trade-off than sell an oversized battery bank by default.',
    },
    {
      q: 'What happens when batteries are empty and it is cloudy?',
      a: 'Without a grid fallback, non-essential loads must be shed or you wait for sun. That is why we ask which loads are truly essential.',
    },
  ],
  related: [
    { to: ROUTES.onGrid, label: 'On-grid solar for grid-connected properties' },
    { to: ROUTES.hybrid, label: 'Hybrid solar with backup' },
    { to: ROUTES.guideSystemTypes, label: 'Compare the three system types' },
    { to: ROUTES.contact, label: 'Talk through an off-grid requirement' },
  ],
  photoAlt: 'Solar panels used where generation must be planned with storage in mind',
};

const hybrid: ServicePageCopy = {
  eyebrow: 'Hybrid solar',
  title: 'Hybrid solar: grid connection with battery backup',
  intro:
    'A hybrid system can use solar, the grid and a battery. The usual reason to consider it in Satara is backup during power cuts while still remaining a grid-connected consumer. It is more equipment than a standard on-grid plant, so it should solve a real backup need — not be added as a default extra.',
  whoTitle: 'Who asks about hybrid',
  who: [
    'Homes that lose supply often enough that backup matters',
    'Shops that must keep billing, lighting or refrigeration on during a cut',
    'Customers who already understand on-grid solar and want a defined backup load',
    'Sites where a generator currently covers outages and solar-plus-storage may replace part of that role',
  ],
  benefitsTitle: 'What hybrid is for',
  benefits: [
    {
      title: 'Selected loads during a grid failure',
      text: 'A well-designed hybrid system can keep agreed circuits on — lights, fans, a fridge — within the battery and inverter limits.',
    },
    {
      title: 'Solar still reduces daytime grid use',
      text: 'On normal days the system can behave like on-grid solar, with storage reserved for outages or evening use as designed.',
    },
  ],
  considerTitle: 'What you should not assume',
  consider: [
    {
      title: 'Not every appliance will run during a cut',
      text: 'Air-conditioners, pumps and heavy motors need explicit design. “Hybrid” does not mean the whole house is off-grid.',
    },
    {
      title: 'Batteries have a life cycle',
      text: 'Storage cost and replacement need to be in the conversation before you compare hybrid with a cheaper on-grid quote.',
    },
    {
      title: 'Settings and safety',
      text: 'Changeover, earthing and inverter configuration have to match the electrical layout. This is surveyed, not guessed from a WhatsApp photo.',
    },
  ],
  processNote:
    'Bring a list of loads you want during a power cut, and how long they must last. That list is more useful than asking for a hybrid system by name.',
  faqs: [
    {
      q: 'Is hybrid the same as on-grid with a power backup inverter?',
      a: 'People use the words loosely. We mean a solar inverter architecture that can charge storage and support selected loads when the grid is down. A separate home UPS on a few lights is a different product. We will name the design we are proposing so you are not buying a label.',
    },
    {
      q: 'Does hybrid increase generation?',
      a: 'The panels still produce according to sun, shade and size. Hybrid does not create extra kilowatt-hours; it changes when you can use energy and what happens during a cut.',
    },
  ],
  related: [
    { to: ROUTES.onGrid, label: 'Standard on-grid solar without batteries' },
    { to: ROUTES.offGrid, label: 'Fully off-grid systems' },
    { to: ROUTES.maintenance, label: 'Looking after inverters and storage' },
    { to: ROUTES.contact, label: 'Request a hybrid design discussion' },
  ],
  photoAlt: 'Rooftop solar installation where backup and grid use may be combined',
};

const maintenance: ServicePageCopy = {
  eyebrow: 'Maintenance',
  title: 'Solar maintenance and after-installation support',
  intro:
    'Rooftop modules have no moving parts, but they still need cleaning, a clear roof and occasional electrical checks. DRJ Solutions explains a simple upkeep routine after installation and remains available for support. We do not invent a packaged AMC on this website; any ongoing service is agreed in the proposal.',
  whoTitle: 'What owners usually need help with',
  who: [
    'Dust, pollen and bird droppings on the glass after dry months',
    'Lower generation after monsoon dirt or fallen leaves',
    'Inverter alerts, isolation switches and what is safe to reset',
    'Questions about warranty contacts for modules versus inverters',
  ],
  benefitsTitle: 'Why maintenance is part of the system',
  benefits: [
    {
      title: 'Dirty glass wastes sunlight',
      text: 'A film of dust is a common reason generation looks “weak” in summer. Cleaning has to be done safely — from designed walkways, not by walking on modules.',
    },
    {
      title: 'Monsoon is not a reason to ignore the roof',
      text: 'Generation drops in heavy cloud, which is expected. Water pooling, loose conduits or shade from new growth is not. A look after the rains is useful.',
    },
    {
      title: 'Inverters need attention if they alarm',
      text: 'Persistent faults should be diagnosed. Pressing reset without understanding isolation is not maintenance.',
    },
  ],
  considerTitle: 'What you can do, and when to call us',
  consider: [
    {
      title: 'Visual check',
      text: 'From a safe position, look for shading, debris and obvious damage. Do not climb a wet sloping roof without proper arrangements.',
    },
    {
      title: 'Cleaning',
      text: 'Use the method we recommend for your module type. Harsh tools and dirty water can do more harm than dust.',
    },
    {
      title: 'Records',
      text: 'Keep your proposal, inverter documents and commissioning papers. Warranty claims depend on those, not on a screenshot of this website.',
    },
  ],
  processNote:
    'If generation has dropped or an inverter is alarming, call or WhatsApp DRJ Solutions with the site location and a photo of the display. We will tell you the next safe step.',
  faqs: [
    {
      q: 'How often should panels be cleaned in Satara?',
      a: 'It depends on dust, birds and nearby construction. Many homes need more frequent cleaning in the dry season than in the monsoon. We set a practical interval after we see the roof rather than publishing a single number for every terrace.',
    },
    {
      q: 'Does rain clean the panels enough?',
      a: 'Rain helps, but it can also leave spots. It is not a substitute for a planned clean if the array is obviously soiled.',
    },
    {
      q: 'Is there a 25-year maintenance-free guarantee?',
      a: 'No. Module performance warranties from manufacturers are not the same as a promise that the system never needs cleaning or electrical checks. We explain both after you choose equipment.',
    },
  ],
  related: [
    { to: ROUTES.howItWorks, label: 'How installation and handover work' },
    { to: ROUTES.faq, label: 'More rooftop solar questions' },
    { to: ROUTES.onGrid, label: 'On-grid system behaviour' },
    { to: ROUTES.contact, label: 'Ask about support for an existing system' },
  ],
  photoAlt: 'Installer working on rooftop solar modules during placement and alignment',
};

const cost: ServicePageCopy = {
  eyebrow: 'Cost & planning',
  title: 'What a solar system costs in Satara — and what changes the number',
  intro:
    'There is no honest single price for “solar in Satara” without a roof and a bill. Cost follows system size, module and inverter choice, mounting, electrical work, access, and whether a subsidy process applies. DRJ Solutions shares a proposal after a survey. The figures below are planning context, not a quotation.',
  whoTitle: 'Use this page if you are trying to budget',
  who: [
    'Homeowners comparing a neighbour’s system size with their own bill',
    'Businesses that need a sense of scale before a site visit',
    'Anyone who has been quoted a rupee-per-watt figure without seeing the roof',
  ],
  benefitsTitle: 'How to think about cost without a fake rate card',
  benefits: [
    {
      title: 'Size is the biggest driver',
      text: 'A 3 kW roof is not priced like a 10 kW roof. Start with consumption and usable area, then talk money.',
    },
    {
      title: 'Equipment is not one product',
      text: 'Modules, inverter, structure, cabling, protection and labour are separate lines. The lowest headline kilowatt price often hides thinner structure or weaker support.',
    },
    {
      title: 'Subsidy is not a discount we invent',
      text: 'If a residential scheme applies, it follows official eligibility. We will not subtract an unofficial amount to win the conversation.',
    },
  ],
  considerTitle: 'Planning examples (not quotes)',
  consider: [
    {
      title: 'Our calculator assumption',
      text: 'The on-site savings calculator uses about 1,550 kWh generated per kW per year as a planning default for typical Indian rooftop conditions. You can change tariff and roof availability. It is not a guaranteed yield for Satara or for your shade pattern.',
    },
    {
      title: '3 kW class',
      text: 'Often discussed for smaller independent houses with modest bills. Annual generation in the calculator default is about 4,650 kWh before shade and availability factors. Roof area of roughly 80–100 sq. ft. per kW of unshaded space is a thumb-rule only.',
    },
    {
      title: '5 kW class',
      text: 'A common conversation size for many family homes. Default annual generation about 7,750 kWh before site factors. Still depends on the bill, sanctioned load and terrace obstacles.',
    },
    {
      title: '10 kW class',
      text: 'Larger homes, small commercial roofs or higher consumption. Default annual generation about 15,500 kWh before site factors. Structure, incomer and discom process need a survey.',
    },
  ],
  processNote:
    'Use the savings calculator for a first range, then book a free site survey. A proposal from DRJ Solutions is the document that contains your price — not this page.',
  faqs: [
    {
      q: 'Why is my neighbour’s price different?',
      a: 'Different module make, inverter, structure height, cable length, shade, number of floors to climb, and whether subsidy paperwork is included. Treat another site’s number as a conversation starter, not as your quote.',
    },
    {
      q: 'Do you publish a rupee-per-watt rate?',
      a: 'Not on this website. Rates move with equipment and site conditions. Publishing a stale figure would mislead more people than it would help.',
    },
    {
      q: 'Can I use the calculator as a bankable number?',
      a: 'No. It is labelled as indicative. Lenders, accountants and subsidy portals will not treat a website widget as a certified yield study.',
    },
  ],
  related: [
    { to: ROUTES.calculator, label: 'Open the solar savings calculator' },
    { to: ROUTES.guideSizing, label: 'How we think about system size' },
    { to: ROUTES.subsidy, label: 'Subsidy guidance for Maharashtra' },
    { to: ROUTES.residential, label: 'Home rooftop solar' },
  ],
  photoAlt: 'Rooftop solar modules used to illustrate system sizing and planning',
};

const guideSatara: GuidePageCopy = {
  eyebrow: 'Satara guide',
  title: 'Rooftop solar in Satara: a practical local guide',
  intro:
    'This guide is for homeowners and small businesses in Satara who want to understand the roof, the weather, the electricity connection and the installer process — without treating social-media forwards as engineering. DRJ Solutions works from Anand Nagar, Satara, and takes projects at other locations after a survey is planned.',
  sections: [
    {
      title: 'What a Satara roof usually looks like',
      paragraphs: [
        'Many independent houses here have an RCC terrace with a water tank, solar water heater, dish antenna or stair room. Usable solar area is whatever remains after those objects and the shade they throw. A sloping tile or sheet roof can also work if mounting and waterproofing are designed for it.',
        'Neighbouring buildings, trees and overhead tanks matter as much as the terrace photograph. That is why we still visit. A map pin is not a shade study.',
      ],
    },
    {
      title: 'Sun, monsoon and generation',
      paragraphs: [
        'Satara gets strong sunlight for much of the year, like much of interior Maharashtra. That does not mean every month produces the same units. Cloud, rain and dirty glass in the monsoon reduce generation. Annual planning already has to assume that seasonal dip.',
        'We use a published planning default of about 1,550 kWh per kW per year on our calculator. Your roof can do better or worse depending on shade, tilt and soiling. We will not quote a satellite “Satara solar atlas” number we have not verified for your plot.',
      ],
    },
    {
      title: 'Electricity connection and net metering',
      paragraphs: [
        'Most of Satara district is served through the state distribution company process for rooftop net metering. Application steps, meter charges and timelines are theirs. DRJ Solutions prepares the site and paperwork we are responsible for; we do not control sanction dates.',
        'If someone promises net metering “in three days, guaranteed,” treat that as a claim to verify — not as a fact from this website.',
      ],
    },
    {
      title: 'Subsidy, in plain terms',
      paragraphs: [
        'Residential consumers often ask about PM Surya Ghar and related state processes. Amounts and portals change. Read our subsidy page and the official websites linked there. Bring a recent bill when you speak with us.',
      ],
    },
    {
      title: 'Nearby towns',
      paragraphs: [
        'People in Karad, Phaltan, Wai, Mahabaleshwar, Patan, Koregaon and other parts of Satara district sometimes ask whether we only work inside the municipal limit. Our office is in Satara city. We take rooftop projects at other locations; survey scheduling depends on the site. We have not created a separate website for each town, because the engineering questions are still roof, bill and connection — not a duplicated landing page.',
      ],
    },
    {
      title: 'How DRJ Solutions works a Satara job',
      paragraphs: [
        'Call or request a survey. Share a bill if you can. We visit the roof, talk through on-grid versus hybrid if backup is an issue, and send a proposal. Installation and commissioning follow only after you accept that proposal.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is Satara good for rooftop solar?',
      a: 'If you have unshaded roof, a meaningful daytime bill and a workable electrical connection, solar is worth a survey. We do not rank cities with invented irradiation trophies on this page.',
    },
    {
      q: 'Do apartments qualify?',
      a: 'A private terrace you control is different from a shared society roof. Society projects need the association’s permission and a metering arrangement the discom accepts. We can discuss that, but we will not pretend every flat has a roof.',
    },
  ],
  related: [
    { to: ROUTES.residential, label: 'Residential installation in Satara' },
    { to: ROUTES.cost, label: 'Cost factors for a Satara rooftop' },
    { to: ROUTES.subsidy, label: 'Maharashtra subsidy guidance' },
    { to: ROUTES.howItWorks, label: 'Our installation process' },
  ],
};

const guideSystemTypes: GuidePageCopy = {
  eyebrow: 'System types',
  title: 'On-grid vs off-grid vs hybrid solar',
  intro:
    'These three labels are used loosely in sales conversations. This guide states how DRJ Solutions uses them, so you can match a product to a problem: cutting the daytime bill, surviving without a grid, or keeping selected loads on during a cut.',
  sections: [
    {
      title: 'On-grid (grid-tied)',
      paragraphs: [
        'Solar feeds your loads when the sun is up. The grid supplies the rest. A standard on-grid inverter switches off when the grid is off. Net metering, where sanctioned, accounts for export. This is the usual design for grid-connected homes and shops in Satara.',
      ],
    },
    {
      title: 'Off-grid',
      paragraphs: [
        'The system is sized around batteries and the loads you must run without the discom. It is the right tool for a site that cannot rely on the grid. It is the wrong tool if you only wanted a cheaper electricity bill on a normal city connection.',
      ],
    },
    {
      title: 'Hybrid',
      paragraphs: [
        'Grid-connected solar plus storage, designed so agreed loads can continue during an outage. You still need to list those loads. Hybrid is not a magic word that runs two air-conditioners, a pump and a welding machine from a small battery.',
      ],
    },
    {
      title: 'A simple way to choose the conversation',
      paragraphs: [
        'If you have a normal bill and rare cuts, start with on-grid. If cuts are the reason you called, bring a backup-load list and discuss hybrid. If there is no usable grid, discuss off-grid. We would rather send you to the correct page than sell the highest-priced label.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Can I upgrade from on-grid to hybrid later?',
      a: 'Sometimes, if the inverter and electrical layout were chosen with that in mind. Often it is a new inverter and extra wiring, not a software switch. Ask during the first design, not after commissioning.',
    },
    {
      q: 'Which type gets subsidy?',
      a: 'Follow the scheme that is in force for your consumer category. Do not copy a YouTube video from another state. Our subsidy page links official portals.',
    },
  ],
  related: [
    { to: ROUTES.onGrid, label: 'On-grid solar systems' },
    { to: ROUTES.offGrid, label: 'Off-grid solar systems' },
    { to: ROUTES.hybrid, label: 'Hybrid solar systems' },
    { to: ROUTES.contact, label: 'Get a recommendation after a survey' },
  ],
};

const guideSizing: GuidePageCopy = {
  eyebrow: 'System size',
  title: 'How to size a solar system for a home',
  intro:
    'System size is not a personality type (1 BHK vs 3 BHK). It is consumption, roof and electrical limits. This guide shows the logic DRJ Solutions uses, including the planning defaults already published on our calculator.',
  sections: [
    {
      title: 'Start with the bill, not the bedroom count',
      paragraphs: [
        'Monthly kWh (units) and the tariff tell us how much daytime energy is worth offsetting. A small 3 BHK with careful use can need less solar than a 1 BHK with high daytime pumping and air-conditioning.',
        'If you only know the rupee amount, our calculator converts it using a tariff you can edit. Change that tariff if your bill says something else.',
      ],
    },
    {
      title: 'Roof area thumb-rule — then throw it away at survey',
      paragraphs: [
        'A rough planning figure used on our FAQ is about 80–100 sq. ft. of unshaded area per kW, depending on module type and layout. Water tanks, walkways and setbacks reduce that. The survey measures what is left.',
      ],
    },
    {
      title: 'Generation using our calculator default',
      paragraphs: [
        'We publish about 1,550 kWh per kW per year as a planning default. Illustrative annual generation before site factors: about 4,650 kWh for 3 kW, 7,750 kWh for 5 kW, and 15,500 kWh for 10 kW. Shade, dirt and orientation will move the real number.',
      ],
    },
    {
      title: 'Sanctioned load and incomer',
      paragraphs: [
        'The electricity connection has limits. Oversizing far beyond sanctioned load or the incomer rating is how projects stall in paperwork. We read that from the bill and the meter room, not from a blog table.',
      ],
    },
    {
      title: '1 BHK, 2 BHK, 3 BHK — useful only as a conversation',
      paragraphs: [
        'A 1 BHK with its own terrace is still sized from units and roof. A 3 BHK flat without roof rights may not be a rooftop candidate at all. Bedroom count is a poor substitute for a bill.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Should I install the biggest system that fits the terrace?',
      a: 'Not always. Extra capacity you cannot use or export usefully still costs structure and equipment. We size to the bill and the roof together.',
    },
    {
      q: 'Does a 5 kW system produce 5 kW all day?',
      a: 'No. 5 kW is a peak capacity. Output follows the sun, weather and shade. Daily energy is what pays the bill, not the nameplate at noon on a perfect day.',
    },
  ],
  related: [
    { to: ROUTES.calculator, label: 'Try the savings calculator' },
    { to: ROUTES.cost, label: 'Cost factors after size is known' },
    { to: ROUTES.residential, label: 'Home solar installation' },
    { to: ROUTES.guideSatara, label: 'Satara rooftop guide' },
  ],
};

export const enExtraPages: Pick<
  SiteContent,
  | 'industrial'
  | 'onGrid'
  | 'offGrid'
  | 'hybrid'
  | 'maintenance'
  | 'cost'
  | 'guidesHub'
  | 'guideSatara'
  | 'guideSystemTypes'
  | 'guideSizing'
> = {
  industrial,
  onGrid,
  offGrid,
  hybrid,
  maintenance,
  cost,
  guidesHub: {
    eyebrow: 'Guides',
    title: 'Solar guides from a Satara installer',
    intro:
      'Short, practical notes from DRJ Solutions. They explain how we think about local roofs, system types and sizing. They are not a dump of keyword articles, and they are not a substitute for a site survey.',
    items: [
      {
        to: ROUTES.guideSatara,
        title: 'Rooftop solar in Satara',
        text: 'Roofs, monsoon, electricity connection and how a local survey actually works.',
      },
      {
        to: ROUTES.guideSystemTypes,
        title: 'On-grid, off-grid and hybrid',
        text: 'Pick the conversation that matches your grid, your bill and your backup need.',
      },
      {
        to: ROUTES.guideSizing,
        title: 'How to size a home system',
        text: 'Bills and roof area — not bedroom count — with our published calculator defaults.',
      },
      {
        to: ROUTES.cost,
        title: 'Solar system cost factors',
        text: 'Why we will not publish a fake rupee-per-watt rate card.',
      },
      {
        to: ROUTES.subsidy,
        title: 'Subsidy in Maharashtra',
        text: 'PM Surya Ghar and official process, without invented slab amounts.',
      },
    ],
  },
  guideSatara,
  guideSystemTypes,
  guideSizing,
};
