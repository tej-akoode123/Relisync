import Header from '@/components/front/Header'
import Footer from '@/components/front/Footer'
import DropdownInit from '@/components/front/DropdownInit'

export const metadata = {
  title: 'Checkout - Relisync UI',
  description: 'Complete your checkout',
}

export default function CheckoutPage() {
  return (
    <>
      <DropdownInit />
      <Header />
      <section className="section-py bg-body first-section-pt">
        <div className="container">
          <div className="card px-3">
            <div className="row">
              <div className="col-12">
                <div className="text-center py-8">
                  <h4 className="mb-4">Checkout Wizard</h4>
                  <p className="mb-0">This is a multi-step checkout process. The full implementation would include a stepper component.</p>
                  <p className="mt-4">
                    <a href="/payment" className="btn btn-primary">Go to Payment</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
