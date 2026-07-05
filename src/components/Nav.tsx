import { nav } from '../data/content'

export default function Nav() {
  return (
    <nav className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-[7px] sm:px-10">
      <ul className="flex flex-wrap items-center gap-5">
        {nav.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="border-b border-transparent font-switzer text-[11px] font-medium tracking-normal text-olive-ink uppercase transition-colors hover:border-olive-ink sm:text-sm"
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
