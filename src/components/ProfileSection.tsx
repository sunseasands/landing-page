import { recognition, services } from '../data/content'

export default function ProfileSection() {
  return (
    <section id="profile" className="bg-driftwood px-5 py-14 sm:px-10">
      <div className="grid grid-cols-1 gap-9 lg:grid-cols-3">
        {/* Portrait — duotone treatment placeholder, 0px radius, breathes directly on the surface */}
        <div aria-hidden className="aspect-square w-full max-w-sm bg-riverstone/40" />

        <div>
          <h2 className="mb-5 font-switzer text-body leading-body font-bold text-olive-ink uppercase">
            Services
          </h2>
          <ul className="flex flex-col gap-5">
            {services.map((service) => (
              <li key={service.label}>
                <p className="font-switzer text-body leading-body font-semibold text-olive-ink">
                  {service.label}
                </p>
                <p className="mt-1 font-switzer text-body leading-body font-medium text-olive-ink/80">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-right font-switzer text-body leading-body font-bold text-olive-ink uppercase">
            Recognition
          </h2>
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
