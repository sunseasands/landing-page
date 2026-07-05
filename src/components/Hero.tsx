import { hero } from '../data/content'
import Nav from './Nav'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-linen px-5 pt-24 sm:px-10">
      {/* Full-bleed botanical background placeholder — swap for real photography at ~10-15% opacity, full-bleed, no mask */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sage-type/10 via-transparent to-transparent"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-2 hidden -translate-y-1/2 rotate-90 font-ranade text-display leading-none text-olive-ink sm:right-4 md:block"
      >
        {hero.sideLabel}
      </span>

      <div className="relative flex flex-1 flex-col justify-center">
        <h1 className="font-ranade text-[18vw] leading-wordmark font-normal text-sage-type sm:text-[15vw] lg:text-wordmark">
          {hero.wordmark.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
      </div>

      <p className="relative max-w-sm pb-20 font-switzer text-body leading-body font-medium text-olive-ink sm:pb-16">
        {hero.subtitle}
      </p>

      <Nav />
    </section>
  )
}
