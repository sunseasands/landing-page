import { clientList, workProjects } from '../data/content'
import { useReveal } from '../hooks/useReveal'

type Variant = 'site' | 'editorial' | 'poster'

const variantFor = (i: number): Variant =>
  i % 4 === 3 ? 'poster' : i % 2 === 1 ? 'editorial' : 'site'

// Placeholder for the reference's live website recordings: a skeleton
// webpage three screens tall that auto-scrolls on an infinite loop,
// desynchronized per card. Swap for real screenshots/clips when assets arrive.
function PagePreview({
  variant,
  label,
  index,
}: {
  variant: Variant
  label: string
  index: number
}) {
  if (variant === 'poster') {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-olive-ink px-3 py-4 transition-transform duration-700 ease-out group-hover:scale-105">
        <span className="font-ranade text-xl font-bold tracking-[0.08em] text-sienna uppercase">
          {label}
        </span>
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="size-7 rounded-full bg-linen/70"
              style={{ borderRadius: i % 3 ? '45% 55% 60% 40%' : '55% 45% 40% 60%' }}
            />
          ))}
        </div>
      </div>
    )
  }

  const isEditorial = variant === 'editorial'
  return (
    <div className="h-full w-full overflow-hidden bg-[#faf6ee]">
      <div
        className="preview-autoplay h-[300%] w-full"
        style={{
          animationDelay: `${-(index * 2.3)}s`,
          animationDuration: `${8.5 + (index % 3) * 1.5}s`,
        }}
      >
        {/* Screen 1 — landing */}
        <div className="flex h-1/3 flex-col gap-2 p-3">
          <div className="flex items-center justify-between">
            <div className="h-1.5 w-8 bg-olive-ink/60" />
            <div className="flex gap-1">
              <div className="h-1 w-3 bg-olive-ink/30" />
              <div className="h-1 w-3 bg-olive-ink/30" />
              <div className="h-1 w-3 bg-olive-ink/30" />
            </div>
          </div>
          <div className="mt-2 h-3 w-3/4 bg-olive-ink/70" />
          <div className="h-3 w-1/2 bg-olive-ink/70" />
          <div className={`mt-2 flex-1 ${isEditorial ? 'bg-riverstone/40' : 'bg-sage-type/30'}`} />
        </div>
        {/* Screen 2 — article */}
        <div className="flex h-1/3 flex-col gap-1.5 p-3">
          <div className="h-2 w-1/3 bg-olive-ink/50" />
          <div className="h-1.5 w-full bg-olive-ink/25" />
          <div className="h-1.5 w-5/6 bg-olive-ink/25" />
          <div className="h-1.5 w-4/6 bg-olive-ink/25" />
          <div className="mt-2 grid flex-1 grid-cols-2 gap-2">
            <div className={isEditorial ? 'bg-sienna/50' : 'bg-driftwood/50'} />
            <div className={isEditorial ? 'bg-sage-type/30' : 'bg-riverstone/40'} />
          </div>
        </div>
        {/* Screen 3 — gallery + footer */}
        <div className="flex h-1/3 flex-col gap-1.5 p-3">
          <div className={`flex-1 ${isEditorial ? 'bg-driftwood/45' : 'bg-sienna/45'}`} />
          <div className="grid h-1/4 grid-cols-3 gap-1.5">
            <div className="bg-riverstone/35" />
            <div className="bg-sage-type/30" />
            <div className="bg-olive-ink/15" />
          </div>
          <div className="mt-1 h-1.5 w-2/5 bg-olive-ink/40" />
          <div className="h-1 w-1/4 bg-olive-ink/25" />
        </div>
      </div>
    </div>
  )
}

export default function WorkSection() {
  const { ref, visible } = useReveal<HTMLElement>(0.1)

  return (
    <section id="production" ref={ref} className="bg-linen px-5 py-16 sm:px-10">
      <h2
        className={`mb-10 font-ranade text-4xl font-bold tracking-tight text-olive-ink uppercase reveal ${visible ? 'reveal-visible' : ''} sm:text-5xl`}
      >
        Production
      </h2>

      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Client index — bold, type-only, starting lower down the section */}
        <ul
          className={`flex shrink-0 flex-row flex-wrap gap-x-6 gap-y-2 reveal ${visible ? 'reveal-visible' : ''} lg:w-56 lg:flex-col lg:pt-44`}
          style={{ transitionDelay: '120ms' }}
        >
          {clientList.map((client) => (
            <li
              key={client}
              className="cursor-pointer font-switzer text-base leading-relaxed font-semibold text-olive-ink transition-transform duration-300 hover:translate-x-1 sm:text-lg"
            >
              {client}
            </li>
          ))}
        </ul>

        {/* Project cards — sienna mat frame, vertical stamp outside left, label bottom-right */}
        <div className="grid flex-1 grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {workProjects.map((project, i) => {
            const variant = variantFor(i)
            return (
              <figure
                key={project.id}
                className={`group flex cursor-pointer flex-col reveal ${visible ? 'reveal-visible' : ''}`}
                style={{ transitionDelay: `${180 + i * 70}ms` }}
              >
                <div className="flex items-start gap-1.5">
                  <span className="shrink-0 rotate-180 font-switzer text-caption leading-caption font-medium text-olive-ink/80 [writing-mode:vertical-rl]">
                    #{project.id}–{project.date.split(' / ')[1]}
                  </span>
                  <div className="flex-1 bg-sienna p-2">
                    <div
                      className={`relative overflow-hidden ${variant === 'poster' ? 'aspect-[4/5]' : 'aspect-[5/4]'}`}
                    >
                      <PagePreview variant={variant} label={project.label} index={i} />
                    </div>
                  </div>
                </div>
                <figcaption className="mt-2 self-end font-switzer text-body leading-caption font-bold text-olive-ink transition-[letter-spacing] duration-300 group-hover:tracking-[0.15em]">
                  {project.label}
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
