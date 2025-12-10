import Header from '@/components/front/Header'
import Hero from '@/components/front/Hero'
import WhatWeOffer from '@/components/front/WhatWeOffer'
import Features from '@/components/front/Features'
import Reviews from '@/components/front/Reviews'
import Team from '@/components/front/Team'
import Pricing from '@/components/front/Pricing'
import FAQ from '@/components/front/FAQ'
import CTA from '@/components/front/CTA'
import Contact from '@/components/front/Contact'
import Footer from '@/components/front/Footer'
import DropdownInit from '@/components/front/DropdownInit'

export default function Home() {
  return (
    <div data-bs-spy="scroll" className="scrollspy-example">
      <DropdownInit />
      <Header />
      <Hero />
      <WhatWeOffer />
      <Features />
      <Reviews />
      <Pricing />
      <Team />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}
