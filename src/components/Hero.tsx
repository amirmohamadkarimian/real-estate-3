export function Hero() {
  return (
    <section id="home" className="relative h-[75vh] min-h-[480px] w-full overflow-hidden">
      {/* Background with ken-burns */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ff5989d68c1f?auto=format&fit=crop&w=2000&q=80"
          alt="Ultra-modern luxury house at sunset with floor-to-ceiling glass windows and an infinity pool"
          className="h-full w-full animate-ken-burns object-cover"
          fetchPriority="high"
        />
        {/* Top navy gradient for nav legibility */}
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-navy via-navy/70 to-transparent" />
        {/* Bottom radial gradient for text sharpness */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-lux relative flex h-full flex-col items-center justify-center pt-16 text-center">
        <p className="animate-fade-in text-xs font-semibold uppercase tracking-[0.3em] text-gold opacity-0 [animation-delay:0.1s]">
          Premium Real Estate
        </p>
        <h1
          className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.1] text-white opacity-0 [animation-delay:0.2s] sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up"
        >
          Discover Exceptional
          <br />
          Homes &amp; Investments
        </h1>
        <p className="mt-7 max-w-2xl text-base font-medium leading-relaxed text-white/85 opacity-0 [animation-delay:0.4s] animate-fade-up sm:text-lg">
          Premium properties in prime locations. Find your dream home or the
          perfect investment with confidence.
        </p>
      </div>
    </section>
  )
}
