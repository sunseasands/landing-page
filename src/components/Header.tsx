import { Link, NavLink } from 'react-router-dom'
import { brand, nav } from '../data/content'

export default function Header() {
  return (
    <header className="flex items-baseline justify-between border-b border-ink/10 px-5 py-6 sm:px-10">
      <Link to="/" className="flex items-baseline gap-2">
        <span className="font-serif text-xl tracking-wide sm:text-2xl">
          {brand.name.toUpperCase()}
        </span>
        <span className="font-serif text-lg italic text-muted">{brand.tagline}</span>
      </Link>

      <ul className="flex items-center gap-6 sm:gap-10">
        {nav.map((item) => (
          <li key={item.href}>
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                `font-serif text-xs tracking-[0.08em] uppercase sm:text-sm ${
                  isActive ? 'border-b border-ink' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  )
}
