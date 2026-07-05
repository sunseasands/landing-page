import { nav } from '../data/content'

export default function Nav() {
  return (
    <nav className="fade-in absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-3 [animation-delay:850ms] sm:px-10">
      <ul className="flex flex-wrap items-center gap-8 sm:gap-20 lg:gap-28">
        {nav.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="relative font-switzer text-sm font-semibold tracking-[0.04em] text-olive-ink uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-olive-ink after:transition-[width] after:duration-300 hover:after:w-full sm:text-base"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <span className="mr-[8vw] font-switzer text-sm font-semibold tracking-[0.04em] text-olive-ink uppercase sm:text-base md:mr-[14vw]">
        2026
      </span>
    </nav>
  )
}
