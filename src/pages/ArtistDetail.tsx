import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { artistProfiles, artistRoster } from '../data/content'

function findRosterName(slug: string) {
  for (const group of artistRoster) {
    const entry = group.entries.find((e) => e.slug === slug)
    if (entry) return { name: entry.name, group: group.group }
  }
  return null
}

export default function ArtistDetail() {
  const { slug } = useParams<{ slug: string }>()
  const profile = slug ? artistProfiles[slug] : undefined
  const rosterMatch = slug ? findRosterName(slug) : null

  if (!profile) {
    return (
      <div>
        <Header />
        <section className="flex flex-col gap-4 px-5 py-24 text-center sm:px-10">
          <h1 className="font-serif text-2xl">{rosterMatch?.name ?? 'Artist not found'}</h1>
          {rosterMatch && (
            <p className="font-serif text-sm text-muted">
              {rosterMatch.group} — full profile coming soon.
            </p>
          )}
          <Link to="/artists" className="font-serif text-sm underline underline-offset-2">
            Back to Artists
          </Link>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div>
      <Header />

      <section className="flex flex-col items-center justify-between gap-4 border-b border-ink/10 px-5 py-6 sm:flex-row sm:px-10">
        <ul className="flex items-center gap-4">
          {profile.categories.map((category) => (
            <li
              key={category}
              className="font-sans text-xs font-bold tracking-wide uppercase"
            >
              {category} ·
            </li>
          ))}
        </ul>
        <a
          href={profile.instagram}
          target="_blank"
          rel="noreferrer"
          className="font-serif text-sm underline underline-offset-2"
        >
          Instagram
        </a>
      </section>

      <section className="px-5 py-10 sm:px-10">
        <p className="max-w-2xl font-serif text-base leading-relaxed">{profile.bio}</p>
      </section>

      {profile.sections.map((section) => (
        <section key={section.category} className="flex flex-col items-center gap-10 py-16">
          <h2 className="font-sans text-4xl font-normal uppercase sm:text-6xl">
            {section.category} /
          </h2>
          <p className="max-w-xl text-center font-serif text-base leading-relaxed">
            {section.description}
          </p>
          {/* Placeholder tiles — swap for real portfolio photography */}
          <div className="grid w-full grid-cols-1 sm:grid-cols-3">
            {Array.from({ length: section.imageCount }).map((_, i) => (
              <div key={i} aria-hidden className="aspect-[3/4] bg-ink/10" />
            ))}
          </div>
        </section>
      ))}

      <Footer />
    </div>
  )
}
