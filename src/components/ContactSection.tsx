import { contact } from '../data/content'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-5 bg-linen px-5 py-28 text-center sm:px-10"
    >
      {/* Section anchor — quiet typographic callout, no button, no decoration */}
      <a
        href={`mailto:${contact.email}`}
        className="font-ranade text-heading leading-heading font-normal text-olive-ink uppercase"
      >
        Contact
      </a>
      <a
        href={`mailto:${contact.email}`}
        className="font-switzer text-body leading-body font-medium text-olive-ink"
      >
        {contact.email}
      </a>
      <p className="font-switzer text-caption leading-caption font-medium text-olive-ink/70">
        {contact.address}
      </p>
    </section>
  )
}
