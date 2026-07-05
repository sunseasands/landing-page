import { contact } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function ContactSection() {
  const { ref, visible } = useReveal<HTMLElement>(0.3)

  return (
    <section
      id="contact"
      ref={ref}
      className={`flex flex-col items-center gap-5 bg-linen px-5 py-28 text-center reveal ${visible ? 'reveal-visible' : ''} sm:px-10`}
    >
      {/* Section anchor — quiet typographic callout, no button, no decoration */}
      <a
        href={`mailto:${contact.email}`}
        className="font-ranade text-heading leading-heading font-normal text-olive-ink uppercase transition-[letter-spacing] duration-500 hover:tracking-[0.25em]"
      >
        Contact
      </a>
      <a
        href={`mailto:${contact.email}`}
        className="relative font-switzer text-body leading-body font-medium text-olive-ink after:absolute after:-bottom-px after:left-0 after:h-px after:w-0 after:bg-olive-ink after:transition-[width] after:duration-300 hover:after:w-full"
      >
        {contact.email}
      </a>
      <p className="font-switzer text-caption leading-caption font-medium text-olive-ink/70">
        {contact.address}
      </p>
    </section>
  )
}
