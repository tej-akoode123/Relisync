import Link from 'next/link'

export default function PricingFreeTrial() {
  return (
    <section className="pricing-free-trial bg-label-primary">
      <div className="container">
        <div className="position-relative">
          <div className="d-flex justify-content-between flex-column-reverse flex-lg-row align-items-center pt-12 pb-10">
            <div className="text-center text-lg-start">
              <h4 className="text-primary mb-2">Still not convinced? Start with a 14-day FREE trial!</h4>
              <p className="text-body mb-6 mb-md-11">You will get full access to with all the features for 14 days.</p>
              <Link href="/payment" className="btn btn-primary">Start 14-day free trial</Link>
            </div>
            {/* image */}
            <div className="text-center">
              <img
                src="/assets/img/illustrations/girl-with-laptop-light.png"
                className="img-fluid me-lg-5 pe-lg-1 mb-3 mb-lg-0"
                alt="Api Key Image"
                width="202"
                data-app-light-img="illustrations/girl-with-laptop.png"
                data-app-dark-img="illustrations/girl-with-laptop.png"
                style={{ visibility: 'visible', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
