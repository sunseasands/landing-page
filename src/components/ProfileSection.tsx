import { recognition, services } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function ProfileSection() {
  const { ref, visible } = useReveal<HTMLElement>(0.1)

  return (
    <section id="agency" ref={ref} className="bg-driftwood px-5 py-14 sm:px-10">
      <h2
        className={`mb-9 font-ranade text-heading leading-heading font-normal text-olive-ink uppercase reveal ${visible ? 'reveal-visible' : ''}`}
      >
        Agency
      </h2>

      <div className="grid grid-cols-1 gap-9 lg:grid-cols-3">
        {/* Portrait — duotone treatment placeholder, 0px radius, breathes directly on the surface */}
        <div
          aria-hidden
          className={`aspect-square w-full max-w-sm overflow-hidden reveal ${visible ? 'reveal-visible' : ''}`}
        >
          <div className="h-full w-full bg-riverstone/40 transition-transform duration-700 ease-out hover:scale-105" />
        </div>

        <div
          className={`reveal ${visible ? 'reveal-visible' : ''}`}
          style={{ transitionDelay: '150ms' }}
        >
          <h3 className="mb-5 font-switzer text-body leading-body font-bold text-olive-ink uppercase">
            Services
          </h3>
          <ul className="flex flex-col gap-5">
            {services.map((service) => (
              <li key={service.label} className="group">
                <p className="font-switzer text-body leading-body font-semibold text-olive-ink transition-transform duration-300 group-hover:translate-x-1">
                  {service.label}
                </p>
                <p className="mt-1 font-switzer text-body leading-body font-medium text-olive-ink/80">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`reveal ${visible ? 'reveal-visible' : ''}`}
          style={{ transitionDelay: '300ms' }}
        >
          <h3 className="mb-5 text-right font-switzer text-body leading-body font-bold text-olive-ink uppercase">
            Recognition
          </h3>
          <ul className="flex flex-col gap-4 text-right">
            {recognition.map((item) => (
              <li key={item.project}>
                <p className="font-switzer text-body leading-body font-medium text-olive-ink">
                  {item.project}
                </p>
                <p className="font-switzer text-caption leading-caption font-medium text-olive-ink/70">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
