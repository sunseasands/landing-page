import { hero } from '../data/content'
import BotanicalBackdrop from './BotanicalBackdrop'
import Nav from './Nav'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-linen px-5 pt-24 pb-16 sm:px-10">
      <BotanicalBackdrop />

      {/* Colossal side label — upright, pinned to the right edge and cropped by the viewport */}
      <span
        aria-hidden
        className="fade-in pointer-events-none absolute right-0 bottom-[9%] hidden translate-x-[40%] font-ranade text-[22vw] leading-none font-bold text-olive-ink/75 [animation-delay:500ms] md:block"
      >
        {hero.sideLabel}
      </span>

      <div className="relative flex flex-1 flex-col justify-center">
        <h1 className="font-ranade text-[18vw] leading-[0.95] font-normal text-sage-type sm:text-[16vw]">
          {hero.wordmark.map((line, i) => (
            <span key={line} className="rise-mask leading-[0.95]">
              <span className="rise" style={{ animationDelay: `${120 + i * 140}ms` }}>
                {line}
              </span>
            </span>
          ))}
        </h1>
      </div>

      <p className="fade-in relative mb-4 max-w-sm font-switzer text-body leading-body font-medium text-olive-ink [animation-delay:700ms]">
        {hero.subtitle}
      </p>

      <Nav />
    </section>
  )
}
