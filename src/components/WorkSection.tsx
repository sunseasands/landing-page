import { clientList, workProjects } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function WorkSection() {
  const { ref, visible } = useReveal<HTMLElement>(0.1)

  return (
    <section id="production" ref={ref} className="bg-sienna px-5 py-14 sm:px-10">
      <div
        className={`mb-9 flex items-baseline justify-between reveal ${visible ? 'reveal-visible' : ''}`}
      >
        <h2 className="font-ranade text-heading leading-heading font-normal text-olive-ink uppercase">
          Production
        </h2>
        <span className="font-switzer text-caption leading-caption font-medium text-olive-ink uppercase">
          Selected projects
        </span>
      </div>

      <div className="flex flex-col gap-9 lg:flex-row">
        {/* Client list column — type-only index running down the left margin */}
        <ul
          className={`flex shrink-0 flex-row flex-wrap gap-x-5 gap-y-2 reveal ${visible ? 'reveal-visible' : ''} lg:w-44 lg:flex-col`}
          style={{ transitionDelay: '120ms' }}
        >
          {clientList.map((client) => (
            <li
              key={client}
              className="cursor-pointer font-switzer text-body leading-body font-medium text-olive-ink transition-transform duration-300 hover:translate-x-1"
            >
              {client}
            </li>
          ))}
        </ul>

        {/* Project cards — the image IS the card: no border, no shadow, 0px radius */}
        <div className="grid flex-1 grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {workProjects.map((project, i) => (
            <figure
              key={project.id}
              className={`group flex cursor-pointer flex-col reveal ${visible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${180 + i * 70}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* Placeholder tile — swap for real photography; inner layer zooms on hover */}
                <div className="h-full w-full bg-driftwood transition-transform duration-700 ease-out group-hover:scale-105" />
                <span className="absolute top-2 left-2 origin-top-left translate-y-2 -rotate-90 font-switzer text-caption leading-caption font-medium text-olive-ink opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                  {project.date}
                </span>
              </div>
              <figcaption className="mt-3 text-center font-switzer text-[11px] leading-caption font-semibold text-olive-ink transition-[letter-spacing] duration-300 group-hover:tracking-[0.2em]">
                {project.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
