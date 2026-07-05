import { clientList, workProjects } from '../data/content'

export default function WorkSection() {
  return (
    <section id="work" className="bg-sienna px-5 py-14 sm:px-10">
      <div className="mb-9 flex items-baseline justify-between">
        <h2 className="font-ranade text-heading leading-heading font-normal text-olive-ink uppercase">
          Work
        </h2>
        <span className="font-switzer text-caption leading-caption font-medium text-olive-ink uppercase">
          Selected projects
        </span>
      </div>

      <div className="flex flex-col gap-9 lg:flex-row">
        {/* Client list column — type-only index running down the left margin */}
        <ul className="flex shrink-0 flex-row flex-wrap gap-x-5 gap-y-2 lg:w-44 lg:flex-col">
          {clientList.map((client) => (
            <li
              key={client}
              className="font-switzer text-body leading-body font-medium text-olive-ink"
            >
              {client}
            </li>
          ))}
        </ul>

        {/* Project cards — the image IS the card: no border, no shadow, 0px radius */}
        <div className="grid flex-1 grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {workProjects.map((project) => (
            <figure key={project.id} className="flex flex-col">
              <div className="relative aspect-[3/4] bg-driftwood">
                <span className="absolute top-2 left-2 origin-top-left translate-y-2 -rotate-90 font-switzer text-caption leading-caption font-medium text-olive-ink">
                  {project.date}
                </span>
              </div>
              <figcaption className="mt-3 text-center font-switzer text-[11px] leading-caption font-semibold text-olive-ink">
                {project.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
