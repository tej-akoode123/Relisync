import Header from '@/components/front/Header'
import Footer from '@/components/front/Footer'
import DropdownInit from '@/components/front/DropdownInit'
import PaymentForm from '@/components/front/payment/PaymentForm'
import PricingModal from '@/components/front/payment/PricingModal'

export const metadata = {
  title: 'Payment - Relisync UI',
  description: 'Complete your payment',
}

export default function PaymentPage() {
  return (
    <>
      <DropdownInit />
      <Header />
      <PaymentForm />
      <PricingModal />
      <Footer />
    </>
  )
}
