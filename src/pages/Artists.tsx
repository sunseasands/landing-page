import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { artistRoster } from '../data/content'

export default function Artists() {
  return (
    <div>
      <Header />

      <section className="flex flex-col gap-12 px-5 py-20 sm:px-10 lg:px-24">
        {artistRoster.map((group) => (
          <div key={group.group}>
            <h2 className="mb-3 font-sans text-sm font-bold tracking-wide uppercase">
              {group.group}
            </h2>
            <ul className="flex flex-col gap-1">
              {group.entries.map((entry) =>
                entry.slug ? (
                  <li key={entry.name}>
                    <Link
                      to={`/artists/${entry.slug}`}
                      className="font-serif text-base underline underline-offset-2"
                    >
                      {entry.name}
                    </Link>
                  </li>
                ) : (
                  <li key={entry.name} className="font-serif text-base">
                    {entry.name}
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  )
}
