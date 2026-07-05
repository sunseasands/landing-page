import { contact } from '../data/content'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 bg-linen px-5 pb-10 text-center sm:flex-row sm:justify-between sm:px-10">
      <p className="font-switzer text-caption leading-caption font-medium text-olive-ink/70 uppercase">
        © 2026 Sun Sea Sands
      </p>
      <div className="flex items-center gap-5">
        <a
          href={contact.instagram}
          target="_blank"
          rel="noreferrer"
          className="font-switzer text-caption leading-caption font-medium text-olive-ink/70 uppercase hover:text-olive-ink"
        >
          Instagram
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="font-switzer text-caption leading-caption font-medium text-olive-ink/70 uppercase hover:text-olive-ink"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
