export default function RunningHeadline({ text }: { text: string }) {
  return (
    <div className="overflow-hidden border-y border-ink/10 py-4">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {[0, 1].map((i) => (
          <span
            key={i}
            aria-hidden={i === 1}
            className="px-6 font-sans text-[12vw] leading-none font-black tracking-tight uppercase sm:text-[9vw]"
          >
            {text} ·
          </span>
        ))}
      </div>
    </div>
  )
}
