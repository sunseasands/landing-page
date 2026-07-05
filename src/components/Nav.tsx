import { nav } from '../data/content'

export default function Nav() {
  return (
    <nav className="fade-in absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-[7px] [animation-delay:850ms] sm:px-10">
      <ul className="flex flex-wrap items-center gap-5">
        {nav.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="relative font-switzer text-[11px] font-medium tracking-normal text-olive-ink uppercase after:absolute after:-bottom-px after:left-0 after:h-px after:w-0 after:bg-olive-ink after:transition-[width] after:duration-300 hover:after:w-full sm:text-sm"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <span className="font-switzer text-[11px] font-medium text-olive-ink uppercase sm:text-sm">
        2026
      </span>
    </nav>
  )
}
