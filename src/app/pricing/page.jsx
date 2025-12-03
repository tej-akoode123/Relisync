import Header from '@/components/front/Header'
import Footer from '@/components/front/Footer'
import DropdownInit from '@/components/front/DropdownInit'
import PricingPlans from '@/components/front/pricing/PricingPlans'
import PricingFreeTrial from '@/components/front/pricing/PricingFreeTrial'
import PricingComparison from '@/components/front/pricing/PricingComparison'
import PricingFAQ from '@/components/front/pricing/PricingFAQ'

export const metadata = {
  title: 'Pricing - Relisync UI',
  description: 'Choose the best pricing plan for your needs',
}

export default function PricingPage() {
  return (
    <>
      <DropdownInit />
      <Header />
      <PricingPlans />
      <PricingFreeTrial />
      <PricingComparison />
      <PricingFAQ />
      <Footer />
    </>
  )
}
