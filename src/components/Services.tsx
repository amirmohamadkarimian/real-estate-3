const SERVICES = [
  {
    title: 'Property Acquisition',
    description:
      'Access off-market and curated listings in the most sought-after markets, vetted by our investment team.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
      </svg>
    ),
  },
  {
    title: 'Investment Advisory',
    description:
      'Data-driven guidance on portfolio growth, market timing, and high-yield real estate opportunities.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-6" />
      </svg>
    ),
  },
  {
    title: 'Property Management',
    description:
      'End-to-end stewardship of your assets — from maintenance and leasing to long-term value preservation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M12 2l2.5 7H22l-6 4.5L18 21l-6-4-6 4 2-7.5L2 9h7.5z" />
      </svg>
    ),
  },
]

export function Services() {
  return (
    <section id="services" className="bg-navy py-20 md:py-28 lg:py-32">
      <div className="container-lux">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow">What We Do</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="reveal rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.08]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                {s.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-white/60">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
