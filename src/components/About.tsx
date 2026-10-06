import { ArrowRightIcon } from './icons'

const ABOUT_IMAGES = [
  'https://images.unsplash.com/photo-1600585154340-be6161a8a0d5?auto=format&fit=crop&w=1100&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
]

export function About() {
  return (
    <section id="about" className="bg-ethereal py-20 md:py-28 lg:py-32">
      <div className="container-lux grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left column */}
        <div className="reveal">
          <p className="eyebrow">About Us</p>
          <h2 className="section-heading mt-4">Who We Are</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/70">
            At VERRA Properties, we connect people with extraordinary homes and
            smart investments. Integrity, transparency, and client satisfaction
            are at the heart of everything we do.
          </p>
          <a href="#properties" className="btn-navy mt-9">
            Learn More
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        {/* Right column — image carousel effect */}
        <div className="reveal relative">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={ABOUT_IMAGES[0]}
              alt="Modern luxury home exterior with clean architectural lines"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Peek / blurred secondary image */}
          <div className="absolute -bottom-6 -right-4 w-2/5 overflow-hidden rounded-2xl border-4 border-ethereal shadow-xl sm:-right-8">
            <img
              src={ABOUT_IMAGES[1]}
              alt="Additional luxury property view"
              className="aspect-square w-full scale-110 object-cover blur-[1px]"
              loading="lazy"
            />
          </div>

          {/* Circular arrow button */}
          <button
            type="button"
            className="group absolute bottom-2 right-2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy shadow-lg transition-all duration-300 hover:bg-gold hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold sm:right-10"
            aria-label="View next image"
          >
            <span className="absolute inset-0 rounded-full bg-gold/0 transition-all duration-300 group-hover:bg-gold/20 group-hover:scale-150" />
            <ArrowRightIcon className="relative h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
