// ── Shared data for all sections ──────────────────────────────────────────

export const properties = [
  {
    id: 1,
    name: 'The Obsidian Penthouse',
    location: 'Dubai Marina, UAE',
    price: '$12,800,000',
    beds: 5,
    baths: 6,
    area: '8,400 sqft',
    tag: 'Featured',
    category: 'Penthouse',
    gradient: 'from-[#1a1a2e] to-[#16213e]',
    accentColor: '#C9A84C',
  },
  {
    id: 2,
    name: 'Aurelius Villa',
    location: 'Palm Jumeirah, Dubai',
    price: '$28,500,000',
    beds: 7,
    baths: 8,
    area: '18,000 sqft',
    tag: 'Exclusive',
    category: 'Villa',
    gradient: 'from-[#0f2027] to-[#203a43]',
    accentColor: '#E8C97A',
  },
  {
    id: 3,
    name: 'Sapphire Sky Tower',
    location: 'Manhattan, New York',
    price: '$9,200,000',
    beds: 4,
    baths: 4,
    area: '5,200 sqft',
    tag: 'New Launch',
    category: 'Apartment',
    gradient: 'from-[#141e30] to-[#243b55]',
    accentColor: '#C9A84C',
  },
  {
    id: 4,
    name: 'Côte d\'Azur Château',
    location: 'Monaco, France',
    price: '$42,000,000',
    beds: 9,
    baths: 11,
    area: '32,000 sqft',
    tag: 'Ultra Luxury',
    category: 'Château',
    gradient: 'from-[#1c1c1c] to-[#2d2d2d]',
    accentColor: '#E8C97A',
  },
  {
    id: 5,
    name: 'Zen Hilltop Estate',
    location: 'Bali, Indonesia',
    price: '$6,500,000',
    beds: 5,
    baths: 5,
    area: '10,200 sqft',
    tag: 'Trending',
    category: 'Estate',
    gradient: 'from-[#1a2a1a] to-[#2a3a2a]',
    accentColor: '#C9A84C',
  },
  {
    id: 6,
    name: 'Mayfair Grand Residence',
    location: 'London, UK',
    price: '$18,900,000',
    beds: 6,
    baths: 7,
    area: '11,500 sqft',
    tag: 'Investment',
    category: 'Residence',
    gradient: 'from-[#1a1a1a] to-[#2c1810]',
    accentColor: '#E8C97A',
  },
];

export const categories = [
  { label: 'Penthouses', count: 48, icon: '◈' },
  { label: 'Villas', count: 92, icon: '⌂' },
  { label: 'Residences', count: 134, icon: '▣' },
  { label: 'Commercial', count: 61, icon: '⬡' },
  { label: 'Châteaux', count: 23, icon: '♔' },
  { label: 'Waterfront', count: 39, icon: '〜' },
];

export const whyUsPoints = [
  {
    number: '01',
    title: 'Curated Portfolio',
    desc: 'Every listing is personally vetted by our senior advisors. We reject 80% of submissions to ensure only the finest properties reach you.',
  },
  {
    number: '02',
    title: 'Discrete & Confidential',
    desc: 'White-glove service with absolute privacy. Off-market deals and private viewings arranged on request, worldwide.',
  },
  {
    number: '03',
    title: 'Investment Intelligence',
    desc: 'Proprietary market data, yield analysis, and capital appreciation forecasts so you invest with full clarity.',
  },
  {
    number: '04',
    title: 'End-to-End Service',
    desc: 'From discovery to keys — legal, financial, relocation, and property management all handled under one roof.',
  },
];

export const amenities = [
  { icon: '◈', label: 'Infinity Pool' },
  { icon: '◉', label: 'Smart Home' },
  { icon: '⬡', label: 'Private Cinema' },
  { icon: '✦', label: 'Wine Cellar' },
  { icon: '⌘', label: 'Concierge' },
  { icon: '◎', label: 'Helipad' },
  { icon: '⬛', label: 'Spa & Wellness' },
  { icon: '◆', label: 'Sky Garden' },
  { icon: '❖', label: 'Private Gym' },
  { icon: '○', label: 'Guest Suites' },
  { icon: '▲', label: 'Security 24/7' },
  { icon: '⌂', label: 'Staff Quarters' },
];

export const stats = [
  { value: 300, suffix: '+', label: 'Properties Sold' },
  { value: 48, suffix: '', label: 'Cities Worldwide' },
  { value: 15, suffix: ' Yrs', label: 'Market Experience' },
  { value: 97, suffix: '%', label: 'Client Retention' },
];

export const testimonials = [
  {
    name: 'Alexander Petrov',
    title: 'CEO, Apex Capital Group',
    quote:
      'Lumière found us an off-market penthouse in Dubai that checked every single box. Their market intelligence and discretion are unmatched in the industry.',
    rating: 5,
    initials: 'AP',
  },
  {
    name: 'Isabelle Fontaine',
    title: 'Art Collector, Monaco',
    quote:
      'The Côte d\'Azur château they secured for me was beyond anything publicly listed. Three years on and the capital appreciation has been extraordinary.',
    rating: 5,
    initials: 'IF',
  },
  {
    name: 'Marcus Okafor',
    title: 'Principal Partner, MO Ventures',
    quote:
      'From first call to ownership transfer in 11 weeks. Their legal and financial team made what seemed complex completely seamless.',
    rating: 5,
    initials: 'MO',
  },
];

export const agents = [
  {
    name: 'Sophia Renard',
    title: 'Senior Luxury Advisor',
    specialty: 'Middle East & Europe',
    deals: '127 Deals Closed',
    initials: 'SR',
    gradient: 'from-[#1a1a2e] to-[#2d2d44]',
  },
  {
    name: 'James Whitmore',
    title: 'Principal Broker',
    specialty: 'Americas & Caribbean',
    deals: '94 Deals Closed',
    initials: 'JW',
    gradient: 'from-[#1a2a1a] to-[#2a3a2a]',
  },
  {
    name: 'Yuki Tanaka',
    title: 'Investment Specialist',
    specialty: 'Asia Pacific',
    deals: '83 Deals Closed',
    initials: 'YT',
    gradient: 'from-[#1a1510] to-[#2a2218]',
  },
  {
    name: 'Omar Al-Rashid',
    title: 'Ultra-Prime Director',
    specialty: 'UAE & Gulf Region',
    deals: '211 Deals Closed',
    initials: 'OA',
    gradient: 'from-[#1c1010] to-[#2e1a1a]',
  },
];

export const faqs = [
  {
    q: 'How do you source off-market properties?',
    a: 'Our 15-year network of developers, family offices, and private sellers gives us exclusive access to properties that never appear publicly. We facilitate over 60% of our sales off-market.',
  },
  {
    q: 'Do you assist international buyers?',
    a: 'Absolutely. We have in-house legal and financial specialists for over 30 jurisdictions, including full visa and residency-by-investment guidance in Dubai, Portugal, and Greece.',
  },
  {
    q: 'What is your fee structure?',
    a: 'Buyer representation is complimentary on most transactions. Seller commissions are negotiated privately and are always competitive relative to the luxury market standard.',
  },
  {
    q: 'Can I arrange a private property tour?',
    a: 'Yes. All viewings are private, can be arranged at short notice, and we can coordinate helicopter transfers, yacht access, or any logistics your schedule requires.',
  },
  {
    q: 'Do you offer property management after purchase?',
    a: 'We provide full concierge property management — maintenance, staffing, short-term rental income management, and annual investment performance reporting.',
  },
];
