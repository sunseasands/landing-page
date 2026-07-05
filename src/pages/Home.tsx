import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RunningHeadline from '../components/RunningHeadline'
import { contact, departments, hero, runningText } from '../data/content'

export default function Home() {
  return (
    <div>
      <Header />

      <section className="flex min-h-[70vh] items-center justify-end px-5 py-16 sm:px-10">
        <div className="flex max-w-md flex-col gap-6 text-right">
          {hero.paragraphs.map((paragraph) => (
            <p key={paragraph} className="font-serif text-base leading-relaxed sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <RunningHeadline text={runningText} />

      <section className="flex flex-col items-center gap-8 py-10">
        <a
          href={contact.instagram}
          target="_blank"
          rel="noreferrer"
          className="font-serif text-sm underline underline-offset-4"
        >
          Instagram
        </a>

        {/* Placeholder tiles — swap for real editorial photography */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} aria-hidden className="aspect-[3/4] bg-ink/10" />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-14 px-5 py-24 sm:px-10 lg:px-24">
        {departments.map((department) => (
          <div key={department.label} className="max-w-2xl">
            <p className="font-serif text-base leading-relaxed sm:text-lg">
              <span className="font-bold underline underline-offset-2">
                {department.label}
              </span>{' '}
              {department.description}{' '}
              <Link to={department.href} className="italic underline underline-offset-2">
                {department.linkLabel}
              </Link>
            </p>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  )
}
