// Concrete, specific content for each vertical — no filler copy.
// `color` drives the 3D core/panel color for that station.

export const VERTICALS = [
  {
    id: 'real-estate',
    index: 1,
    kicker: 'Real Estate CRM',
    title: 'From enquiry to registration, one pipeline.',
    color: '#c9a227',
    description:
      'Built for brokerages and developers juggling hundreds of live listings and leads across portals, WhatsApp and walk-ins.',
    features: [
      'Lead capture from 99acres, MagicBricks, Housing.com and your own site, deduplicated automatically',
      'Site-visit scheduling with automated reminders to buyer and agent',
      'Inventory board showing unit status — available, hold, booked, registered — in real time',
      'Auto-generated brochures and payment schedules per unit configuration',
      'Commission tracking and payout sheets for channel partners'
    ],
    metric: { value: '38%', label: 'faster lead-to-site-visit time reported by pilot brokerages' }
  },
  {
    id: 'restaurant',
    index: 2,
    kicker: 'Restaurant CRM',
    title: 'Every regular, remembered. Every table, optimised.',
    color: '#e8593d',
    description:
      'Connects your POS, reservations and delivery channels so guest history follows the guest, not the table.',
    features: [
      'Reservation and waitlist management with table-turn forecasting',
      'Guest profiles that merge dine-in, delivery and loyalty history in one record',
      'Automated win-back offers for guests who haven\u2019t returned in 45+ days',
      'POS-linked inventory alerts so 86\u2019d items update the digital menu instantly',
      'Post-visit feedback capture with routing to the manager on duty'
    ],
    metric: { value: '4.6x', label: 'repeat-visit lift from automated loyalty campaigns' }
  },
  {
    id: 'travel',
    index: 3,
    kicker: 'Travel CRM',
    title: 'Quotes in minutes, not follow-up calls.',
    color: '#2fb8ac',
    description:
      'Built for agencies and DMCs managing multi-day itineraries, supplier costing and traveller communication at once.',
    features: [
      'Unified inbox for enquiries arriving via WhatsApp, website and OTAs',
      'Drag-and-drop itinerary builder with live supplier and margin costing',
      'Automated quote-to-invoice flow with milestone-based payment links',
      'Traveller document vault — visas, tickets, vouchers — shared via a single link',
      'Post-trip review requests timed to the day travellers land home'
    ],
    metric: { value: '2.1 days', label: 'average time saved per booking cycle' }
  },
  {
    id: 'wealth-management',
    index: 4,
    kicker: 'Wealth Management CRM',
    title: 'Compliance-ready, client-first.',
    color: '#7c5cfc',
    description:
      'A system of record for advisors that treats audit trails and client trust as first-class product requirements.',
    features: [
      'Consolidated portfolio view across custodians, mutual funds and alternates',
      'KYC and document vault with expiry tracking and renewal nudges',
      'Goal-based planning dashboards clients can view read-only',
      'Immutable audit log for every recommendation, meeting note and trade instruction',
      'Scheduled portfolio-review reminders tied to SEBI/compliance cadences'
    ],
    metric: { value: '100%', label: 'of client interactions logged for audit, automatically' }
  }
];

export const CUSTOM_SOFTWARE = {
  index: 5,
  kicker: 'Custom Software Development',
  title: 'When off-the-shelf stops fitting, we build the shelf.',
  color: '#3d5afe',
  description:
    'Beyond the four CRMs, our engineering team designs and ships bespoke platforms — internal tools, customer portals, marketplaces and integrations — scoped around how your business actually operates.',
  process: [
    { step: 'Discover', detail: 'Workshops with your operations team to map the real workflow, not the assumed one.' },
    { step: 'Architect', detail: 'System design, data modelling and a technical spec you can review before a line of code is written.' },
    { step: 'Build', detail: 'Two-week delivery cycles with a staging environment you can test against throughout.' },
    { step: 'Ship', detail: 'Production deployment, monitoring and a documented handover.' },
    { step: 'Support', detail: 'SLA-backed maintenance and a direct line to the engineers who built it.' }
  ],
  stack: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL', 'React Native']
};

// Camera / color "stations" the 3D scene moves through as the page scrolls.
// index must correspond to DOM section order.
export const STATIONS = [
  { index: 0, id: 'hero', color: '#3d5afe' },
  ...VERTICALS.map((v) => ({ index: v.index, id: v.id, color: v.color })),
  { index: CUSTOM_SOFTWARE.index, id: 'custom-software', color: CUSTOM_SOFTWARE.color },
  { index: 6, id: 'stats', color: '#5b8def' },
  { index: 7, id: 'process', color: '#3d5afe' },
  { index: 8, id: 'contact', color: '#3d5afe' }
];

export const STATION_COUNT = STATIONS.length;
