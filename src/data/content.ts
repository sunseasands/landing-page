// Base template: a faithful implementation of the Shelby Kay design system
// (tokens.json / theme.css / DESIGN_1.md) — the "botanical editorial" layout,
// type scale, and component set — carrying Sun Sea Sands' real facts where
// we have them. Items marked PLACEHOLDER have no real source yet.

export const nav = [
  { label: 'Production', href: '#production' },
  { label: 'Agency', href: '#agency' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  wordmark: ['SUN SEA', 'SANDS'],
  sideLabel: 'AGENCY',
  subtitle:
    'We bring creative solutions working as consultants, project managers and on-set producers for a variety of projects.',
}

export const services = [
  {
    label: 'Content Strategy',
    description:
      'Personalized content strategies, developing detailed plans that adapt to budget and objectives — types, quantities, sizes and formats of assets.',
  },
  {
    label: 'Production Planning & Direction',
    description:
      'Shooting plans that optimize schedules and reach desired assets while guaranteeing efficiency and results within established timelines.',
  },
  {
    label: 'Talent & Location Management',
    description:
      'Specialized professionals for each project, digital or in-person castings, model selection, and rental of locations, equipment and services.',
  },
  {
    label: 'Project Management',
    description:
      'On-set direction of the team and the project to meet established objectives from concept to delivery.',
  },
]

// PLACEHOLDER — replace with real Track Record projects.
export const workProjects = [
  { id: '01', label: 'PJ', date: '01 / 26' },
  { id: '02', label: 'LI', date: '02 / 26' },
  { id: '03', label: 'CM', date: '03 / 26' },
  { id: '04', label: 'ED', date: '04 / 26' },
  { id: '05', label: 'AD', date: '05 / 26' },
  { id: '06', label: 'FS', date: '06 / 26' },
  { id: '07', label: 'BR', date: '07 / 26' },
  { id: '08', label: 'CP', date: '08 / 26' },
]

// PLACEHOLDER — replace with real client roster.
export const clientList = [
  'Lorem Fashion House',
  'Ipsum Studio',
  'Dolor Cosmetics',
  'Sit Amet Jewelry',
  'Consectetur Group',
  'Adipiscing Brand',
]

// PLACEHOLDER — replace with real recognition / press mentions.
export const recognition = [
  { project: 'Lorem Ipsum Campaign', detail: 'Featured — Dolor Magazine, 2026' },
  { project: 'Consectetur Editorial', detail: 'Selected — Adipiscing Awards, 2025' },
  { project: 'Sit Amet Collection', detail: 'Shortlisted — Elit Prize, 2025' },
]

export const contact = {
  email: 'info@sunseasands.com',
  address: 'C/ Eraso, 36, Madrid',
  instagram: 'https://www.instagram.com/sunseasands.agency/',
  linkedin: 'https://www.linkedin.com/company/sun-sea-sands',
}
