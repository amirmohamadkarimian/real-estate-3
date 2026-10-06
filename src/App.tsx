import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { FeaturedProperties } from './components/FeaturedProperties'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedProperties />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
