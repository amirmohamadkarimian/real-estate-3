import { useRef } from 'react'
import { properties } from '../data/properties'
import { ArrowLeftIcon, ArrowRightIcon, MapPinIcon } from './icons'

export function FeaturedProperties() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByCards = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('[data-card]')
    const amount = card ? card.offsetWidth + 24 : 360
    track.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section id="properties" className="bg-ethereal py-20 md:py-28 lg:py-32">
      <div className="container-lux">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow">Featured</p>
          <h2 className="section-heading mt-4">Featured Properties</h2>
        </div>

        {/* Carousel */}
        <div className="reveal relative mt-12">
          {/* Nav buttons */}
          <div className="mb-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => scrollByCards(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-all duration-300 hover:border-gold hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              aria-label="Previous properties"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCards(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-all duration-300 hover:border-gold hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              aria-label="Next properties"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Scrollable track */}
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
          >
            {properties.map((p) => (
              <article
                key={p.id}
                data-card
                className={`group relative shrink-0 snap-start overflow-hidden rounded-3xl bg-navy shadow-md transition-all duration-500 hover:shadow-2xl ${
                  p.featured
                    ? 'w-[300px] sm:w-[360px] md:w-[400px] lg:w-[440px]'
                    : 'w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px]'
                }`}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Frosted glass overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/80 to-transparent p-6 pt-16 backdrop-blur-[2px]">
                    <h3 className="text-xl font-bold text-white">{p.name}</h3>
                    <p className="mt-2 flex items-center gap-1.5 text-sm text-white/80">
                      <MapPinIcon className="h-4 w-4 shrink-0 text-gold" />
                      {p.location}
                    </p>
                    <p className="mt-3 text-lg font-semibold text-gold">{p.price}</p>
                  </div>
                  {p.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy">
                      Featured
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
