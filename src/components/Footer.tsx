import { Logo } from './Logo'

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer id="team" className="bg-navy py-16">
      <div className="container-lux">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Curating exceptional homes and smart investments for the modern
              investor. Integrity, transparency, and excellence.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="eyebrow">Explore</h3>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="eyebrow">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a href="tel:+15552467890" className="transition-colors hover:text-gold">
                  (555) 246-7890
                </a>
              </li>
              <li>
                <a href="mailto:hello@verraproperties.com" className="transition-colors hover:text-gold">
                  hello@verraproperties.com
                </a>
              </li>
              <li>1 Horizon Plaza, Suite 2400</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} VERRA Properties. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
