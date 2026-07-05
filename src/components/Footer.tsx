import { contact } from '../data/content'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 border-t border-ink/10 px-5 py-8 text-center sm:flex-row sm:justify-between sm:px-10">
      <p className="font-serif text-xs text-muted">
        {contact.address} — {contact.email}
      </p>
      <div className="flex items-center gap-5">
        <a
          href={contact.instagram}
          target="_blank"
          rel="noreferrer"
          className="font-serif text-xs underline underline-offset-2 hover:no-underline"
        >
          Instagram
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="font-serif text-xs underline underline-offset-2 hover:no-underline"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
