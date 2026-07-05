// Content sourced from screenshots of the live sunseasands.com site plus
// verified public facts (address, email, socials). Items marked PLACEHOLDER
// have no real source yet — swap them before launch.

export const brand = {
  name: 'Sun Sea Sands',
  tagline: 'Agency.',
}

export const nav = [
  { label: 'Agency', href: '/' },
  { label: 'Artists', href: '/artists' },
  { label: 'Series', href: '/series' },
  { label: 'Archive', href: '/archive' },
]

export const hero = {
  paragraphs: [
    'We bring creative solutions working as consultants, project managers and on-set producers for a variety of projects.',
    'We advise the brands we work with, both fashion and commercial, through editorial projects or advertising assignments and provide full production services & artists management /',
  ],
}

export const runningText = 'FRESH APPROACH TO COMMUNICATE'

export const departments = [
  {
    label: 'Artists',
    description:
      "department is dedicated to connecting clients with the perfect professionals to meet the project's unique requirements. We seek out the talents that align with your vision, ensuring a seamless fit for the project's success.",
    linkLabel: 'View Artists',
    href: '/artists',
  },
  {
    label: 'Development',
    description:
      "department turns ideas into creative concepts, devising and developing a wide range of content for our clients' different platforms.",
    linkLabel: 'View projects',
    href: '/series',
  },
  {
    label: 'Production',
    description:
      'department offers small and large-scale production and coordination of editorial and advertising photo shoots, film and digital content creation. It specializes in all aspects of production, such as location scouting, casting, team management and behind-the-scenes coordination, working on a tailor-made basis for each client.',
    linkLabel: 'View projects',
    href: '/archive',
  },
]

export type RosterEntry = {
  name: string
  slug?: string
}

export const artistRoster: { group: string; entries: RosterEntry[] }[] = [
  {
    group: 'Photographers',
    entries: [{ name: 'Carlos Villarejo' }, { name: 'Edward Córdoba' }],
  },
  {
    group: 'Fashion Director & Stylist',
    entries: [{ name: 'Victoria Nogales' }],
  },
  {
    group: 'Make Up & Hair Artists',
    entries: [
      { name: 'Alex Gancedo' },
      { name: 'María García', slug: 'maria-garcia' },
      { name: 'Pau Sellés' },
      { name: 'Prado Núñez de Arenas', slug: 'prado-nunez-de-arenas' },
    ],
  },
]

export type ArtistProfile = {
  slug: string
  name: string
  role: string
  bio: string
  categories: string[]
  instagram: string
  sections: { category: string; description: string; imageCount: number }[]
}

export const artistProfiles: Record<string, ArtistProfile> = {
  'maria-garcia': {
    slug: 'maria-garcia',
    name: 'María García',
    role: 'Make Up & Hair Artist',
    bio: 'María García is a Madrid-based makeup artist and hairstylist with experience in editorials, advertising, and work with renowned celebrities. She specializes in enhancing natural beauty and creating unique looks for brands and clients worldwide',
    categories: ['Editorial', 'Advertising', 'Talents'],
    instagram: 'https://www.instagram.com/sunseasands.agency/',
    sections: [
      {
        category: 'Editorial',
        description:
          'María García combines elegance and creativity in every project, achieving a balance that stands out in fashion editorials. Her work with renowned photographers and publications has solidified her style, known for highlighting natural beauty while exploring new artistic expressions',
        imageCount: 3,
      },
    ],
  },
}

export const contact = {
  email: 'info@sunseasands.com',
  address: 'C/ Eraso, 36, Madrid',
  instagram: 'https://www.instagram.com/sunseasands.agency/',
  linkedin: 'https://www.linkedin.com/company/sun-sea-sands',
}
