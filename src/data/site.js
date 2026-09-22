// ─────────────────────────────────────────────────────────────
//  All the words, numbers and contact details live here.
//  Edit this file to change content — no need to touch components.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'MTM Copy & Print',
  mark: 'MTM',
  suffix: 'Copy & Print',
  tagline: 'Photocopying · Printing · Stationery',
  year: 2026,

  phone: { display: '+265 999 23 88 63', tel: '+265999238863', whatsapp: '265999238863' },
  email: 'orders@albacopyprint.co',
  address: 'Chenda Residence, Mzuzu, Malawi',
  hours: 'Mon–Sat 7:30–17:00',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=chenda+residence+Mzuzu+Malawi',
};

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'How it works' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#map', label: 'Find us' },
  { href: '#contact', label: 'Contact' },
];

export const hero = {
  title: 'Copies and printouts, done while you wait.',
  sub: 'Assignments, projects, ID copies, binding, and everything else you need before a deadline. Walk in, print in minutes, and pick up a pen while you wait.',
};

export const services = [
  {
    title: 'Photocopying',
    text: 'Black & white and color copies, single sheets to full document sets, any size from A6 to A3.',
  },
  {
    title: 'Assignments & document printing',
    text: 'Print straight from a flash disk, email, or phone — formatted and ready to submit.',
  },
  {
    title: 'Binding & lamination',
    text: 'Spiral binding, staple binding, and lamination for reports, projects, and certificates.',
  },
  {
    title: 'Scanning & digital copies',
    text: 'Turn paper documents into PDF or image files, sent straight to your email or WhatsApp.',
  },
  {
    title: 'Stationery & supplies',
    text: 'Pens, notebooks, folders, staplers, and exam essentials — stocked and ready to grab.',
  },
];

export const steps = [
  {
    title: 'Send or bring your file',
    text: "Drop off a flash disk, share it on WhatsApp, or email it ahead — we'll have it ready by the time you arrive.",
  },
  {
    title: 'We print, copy, or bind it',
    text: 'Choose paper size, color or black & white, and finishing — spiral bound, laminated, or stapled.',
  },
  {
    title: 'Pick up, same visit',
    text: 'Most orders are ready in under ten minutes depending on the nature of the work — grab any stationery you need while you wait.',
  },
];

export const stats = [
  { value: '10+', label: 'years serving the area' },
  { value: '100+', label: 'pages copied daily' },
  { value: '10min', label: 'average wait time' },
  { value: '6 days', label: 'open every week' },
];

export const location = {
  heading: 'Behind Chenda Residence, look for the MTM Stationery sign',
  intro: "Two minutes' walk from the main car park.",
  parking:
    'Street parking is available near the shop. Look for the MTM sign, just opposite a vet clinic.',
};

export const faqs = [
  {
    q: 'How much is a black & white photocopy?',
    a: 'Standard A4 black & white copies are charged per page, with lower rates for bulk assignment printing K150.',
  },
  {
    q: 'Can I send my file before I arrive?',
    a: "Yes — send it over WhatsApp or email and we'll have it printed and ready by the time you get here.",
  },
  {
    q: 'Do you do same-day binding?',
    a: 'Spiral binding, stapling, and lamination are all done on the spot, usually within a few minutes.',
  },
  {
    q: 'What file types can you print?',
    a: "PDF, Word, and most common image formats. If a file won't open, bring it on a flash disk as a backup.",
  },
  {
    q: 'What are your opening hours?',
    a: 'Monday to Saturday, 7:30 to 17:00, and feel free to request a service any time.',
  },
];

// ─────────────────────────────────────────────────────────────
//  IMAGE SLOTS
//  Each key is the file name (without extension) to drop into
//  src/assets/images/  →  e.g. "hero" = src/assets/images/hero.jpg
//  Until the file exists, a dashed placeholder card is shown.
// ─────────────────────────────────────────────────────────────
export const imageSlots = {
  hero: {
    label: 'Shop front or counter',
    alt: 'The MTM Copy & Print shop counter',
    hint: 'Portrait, about 800 × 1000',
  },
  services: {
    label: 'Machines at work',
    alt: 'A photocopier printing documents',
    hint: 'Landscape, about 1000 × 750',
  },
  'step-1': {
    label: 'Handing over a file',
    alt: 'A customer handing over a flash disk at the counter',
    hint: 'Landscape 4:3, about 1000 × 750',
  },
  'step-2': {
    label: 'Printing and binding',
    alt: 'Documents being printed and spiral bound',
    hint: 'Landscape 4:3, about 1000 × 750',
  },
  'step-3': {
    label: 'Finished copies',
    alt: 'A stack of finished, bound documents ready for pickup',
    hint: 'Landscape 4:3, about 1000 × 750',
  },
  'gallery-1': {
    label: 'Inside the shop',
    alt: 'Inside MTM Copy & Print',
    hint: 'Wide, about 1400 × 900',
  },
  'gallery-2': {
    label: 'Stationery shelf',
    alt: 'Shelves of pens, notebooks and folders',
    hint: 'Landscape, about 900 × 700',
  },
  'gallery-3': {
    label: 'Bound reports',
    alt: 'Spiral-bound reports and laminated certificates',
    hint: 'Landscape, about 900 × 700',
  },
  'gallery-4': {
    label: 'The MTM sign',
    alt: 'The MTM Stationery sign outside the shop',
    hint: 'Wide, about 1400 × 900',
  },
};
