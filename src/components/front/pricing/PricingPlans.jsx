import Link from 'next/link'

export default function PricingPlans() {
  return (
    <section className="section-py first-section-pt">
      <div className="container">
        <h2 className="text-center mb-2">Pricing Plans</h2>
        <p className="text-center mb-0">
          All plans include 40+ advanced tools and features to boost your product.<br />Choose the best plan to fit your
          needs.
        </p>
        <div className="d-flex align-items-center justify-content-center flex-wrap gap-2 pt-9 pb-3 mb-50">
          <label className="switch switch-sm ms-sm-12 ps-sm-12 me-0">
            <span className="switch-label text-body fs-6 fw-medium">Monthly</span>
            <input type="checkbox" className="switch-input price-duration-toggler" defaultChecked />
            <span className="switch-toggle-slider">
              <span className="switch-on"></span>
              <span className="switch-off"></span>
            </span>
            <span className="switch-label text-body fs-6 fw-medium">Annually</span>
          </label>
          <div className="mt-n5 ms-n10 ml-2 mb-12 d-none d-sm-flex align-items-center gap-1">
            <i className="icon-base icon-base ti tabler-corner-left-down icon-lg text-body-secondary scaleX-n1-rtl"></i>
            <span className="badge badge-sm bg-label-primary rounded-1 mb-3 ">Save up to 10%</span>
          </div>
        </div>

        <div className="row g-6">
          {/* Basic */}
          <div className="col-lg">
            <div className="card border rounded shadow-none">
              <div className="card-body pt-12 px-5">
                <div className="mt-3 mb-5 text-center">
                  <img src="/assets/img/illustrations/page-pricing-basic.png" alt="Basic Image" height="120" />
                </div>
                <h4 className="card-title text-center text-capitalize mb-1">Basic</h4>
                <p className="text-center mb-5">A simple start for everyone</p>
                <div className="text-center h-px-50">
                  <div className="d-flex justify-content-center">
                    <sup className="h6 text-body pricing-currency mt-2 mb-0 me-1">$</sup>
                    <h1 className="mb-0 text-primary">0</h1>
                    <sub className="h6 text-body pricing-duration mt-auto mb-1 ms-1">/month</sub>
                  </div>
                </div>

                <ul className="list-group ps-6 my-5 pt-9">
                  <li className="mb-4">100 responses a month</li>
                  <li className="mb-4">Unlimited forms and surveys</li>
                  <li className="mb-4">Unlimited fields</li>
                  <li className="mb-4">Basic form creation tools</li>
                  <li className="mb-0">Up to 2 subdomains</li>
                </ul>
                <Link href="/payment" className="btn btn-label-success d-grid w-100">Your Current Plan</Link>
              </div>
            </div>
          </div>

          {/* Pro */}
          <div className="col-lg">
            <div className="card border-primary border shadow-none">
              <div className="card-body position-relative pt-4 px-5">
                <div className="position-absolute end-0 me-5 top-0 mt-4">
                  <span className="badge bg-label-primary rounded-1">Popular</span>
                </div>
                <div className="my-5 pt-6 text-center">
                  <img
                    src="/assets/img/illustrations/page-pricing-standard.png"
                    alt="Standard Image"
                    height="120" />
                </div>
                <h4 className="card-title text-center text-capitalize mb-1">Standard</h4>
                <p className="text-center mb-5">For small to medium businesses</p>
                <div className="text-center h-px-50">
                  <div className="d-flex justify-content-center">
                    <sup className="h6 text-body pricing-currency mt-2 mb-0 me-1">$</sup>
                    <h1 className="price-toggle price-yearly text-primary mb-0">7</h1>
                    <h1 className="price-toggle price-monthly text-primary mb-0 d-none">9</h1>
                    <sub className="h6 text-body pricing-duration mt-auto mb-1 ms-1">/month</sub>
                  </div>
                  <small className="price-yearly price-yearly-toggle text-body-secondary">USD 480 / year</small>
                </div>

                <ul className="list-group ps-6 my-5 pt-9">
                  <li className="mb-4">Unlimited responses</li>
                  <li className="mb-4">Unlimited forms and surveys</li>
                  <li className="mb-4">Instagram profile page</li>
                  <li className="mb-4">Google Docs integration</li>
                  <li className="mb-0">Custom "Thank you" page</li>
                </ul>
                <Link href="/payment" className="btn btn-primary d-grid w-100">Upgrade</Link>
              </div>
            </div>
          </div>

          {/* Enterprise */}
          <div className="col-lg">
            <div className="card border rounded shadow-none">
              <div className="card-body pt-12 px-5">
                <div className="mt-3 mb-5 text-center">
                  <img
                    src="/assets/img/illustrations/page-pricing-enterprise.png"
                    alt="Enterprise Image"
                    height="120" />
                </div>
                <h4 className="card-title text-center text-capitalize mb-1">Enterprise</h4>
                <p className="text-center mb-5">Solution for big organizations</p>

                <div className="text-center h-px-50">
                  <div className="d-flex justify-content-center">
                    <sup className="h6 text-body pricing-currency mt-2 mb-0 me-1">$</sup>
                    <h1 className="price-toggle price-yearly text-primary mb-0">16</h1>
                    <h1 className="price-toggle price-monthly text-primary mb-0 d-none">19</h1>
                    <sub className="h6 text-body pricing-duration mt-auto mb-1 ms-1">/month</sub>
                  </div>
                  <small className="price-yearly price-yearly-toggle text-body-secondary">USD 960 / year</small>
                </div>
                <ul className="list-group ps-6 my-5 pt-9">
                  <li className="mb-4">PayPal payments</li>
                  <li className="mb-4">Logic Jumps</li>
                  <li className="mb-4">File upload with 5GB storage</li>
                  <li className="mb-4">Custom domain support</li>
                  <li className="mb-0">Stripe integration</li>
                </ul>
                <Link href="/payment" className="btn btn-label-primary d-grid w-100">Upgrade</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
