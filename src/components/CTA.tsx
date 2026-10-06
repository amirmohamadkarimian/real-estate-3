import { KeyHomeIcon, ArrowRightIcon } from './icons'

export function CTA() {
  return (
    <section id="contact" className="bg-ethereal pb-20 md:pb-28 lg:pb-32">
      <div className="container-lux">
        <div className="reveal mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-4xl bg-mist p-8 sm:p-10 md:flex-row md:items-center md:gap-6 md:p-12 lg:p-14">
          {/* Icon */}
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-navy text-gold shadow-md">
            <KeyHomeIcon className="h-10 w-10" />
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Ready to Find Your Perfect Property?
            </h2>
            <p className="mt-3 text-base text-navy/65 sm:text-lg">
              Let our experts guide you to the right home or investment.
            </p>
          </div>

          {/* Button */}
          <a href="#contact" className="btn-navy shrink-0">
            Get in Touch
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
