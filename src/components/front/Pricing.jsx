export default function Pricing() {
  const plans = [
    {
      name: 'Monthly',
      price: '₹500',
      icon: 'paper-plane.svg',
      features: ['Unlimited Property Listings', 'Media Uploads (Images, Videos, Documents)', 'Group Chat for Team Collaboration', 'Advanced Analytics Dashboard', 'Built-in Calendar for Visit Scheduling', 'Speech-to-Text for Notes & Descriptions'],
    },
    {
      name: 'Quarterly',
      price: '₹1200',
      icon: 'airplane.svg',
      features: ['Unlimited Property Listings', 'Media Uploads (Images, Videos, Documents)', 'Group Chat for Team Collaboration', 'Advanced Analytics Dashboard', 'Built-in Calendar for Visit Scheduling', 'Speech-to-Text for Notes & Descriptions'],
      popular: true,
    },
    {
      name: 'Yearly',
      price: '₹3200',
      icon: 'rocket.svg',
      features: ['Unlimited Property Listings', 'Media Uploads (Images, Videos, Documents)', 'Group Chat for Team Collaboration', 'Advanced Analytics Dashboard', 'Built-in Calendar for Visit Scheduling', 'Speech-to-Text for Notes & Descriptions'],
    },
  ]

  return (
    <section id="landingPricing" className="section-py bg-body landing-pricing">
      <div className="container">
        <div className="text-center mb-4">
          <span className="badge bg-label-primary">Pricing Plans</span>
        </div>
        <h4 className="text-center mb-1">
          <span className="position-relative fw-extrabold z-1">
          Flexible Pricing for 
            <img
              src="/front-pages/images/front-pages/icons/section-title-icon.png"
              alt="laptop charging"
              className="section-title-img position-absolute object-fit-contain bottom-0 z-n1"
            />
          </span>
          {' '}Every Broker
        </h4>
        <p className="text-center pb-2 mb-7">
        Scale your property management as your team and listings grow.
        </p>
        {/* <div className="text-center mb-12">
          <div className="position-relative d-inline-block pt-3 pt-md-0">
            <label className="switch switch-sm switch-primary me-0">
              <span className="switch-label fs-6 text-body me-3">Pay Monthly</span>
              <input type="checkbox" className="switch-input price-duration-toggler" defaultChecked />
              <span className="switch-toggle-slider">
                <span className="switch-on"></span>
                <span className="switch-off"></span>
              </span>
              <span className="switch-label fs-6 text-body ms-3">Pay Annual</span>
            </label>
            <div className="pricing-plans-item position-absolute d-flex">
              <img
                src="/front-pages/images/front-pages/icons/pricing-plans-arrow.png"
                alt="pricing plans arrow"
                className="scaleX-n1-rtl"
              />
              <span className="fw-medium mt-2 ms-1"> Save 25%</span>
            </div>
          </div>
        </div> */}
        <div className="row g-6 pt-lg-5">
          {plans.map((plan, index) => (
            <div key={index} className="col-xl-4 col-lg-6">
              <div className="card">
              {/*<div className={`card ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                 {plan.popular && (
                  <div className="card-header border-primary">
                    <span className="badge bg-primary rounded-pill position-absolute top-0 start-50 translate-middle">
                      Popular
                    </span>
                  </div>
                )} */}
                <div className="card-header">
                  <div className="text-center">
                    <img
                      src={`/front-pages/images/front-pages/icons/${plan.icon}`}
                      alt={`${plan.name} icon`}
                      className="mb-8 pb-2"
                    />
                    <h4 className="mb-0">{plan.name}</h4>
                    <div className="d-flex align-items-center justify-content-center">
                        <span className="h2 text-primary fw-extrabold mb-0">{plan.price}</span>
                        <sub className="h6 text-body-secondary mb-n1 ms-1">
                          {plan.name === 'Yearly' ? '/year' : plan.name === 'Quarterly' ? '/quarter' : '/mo'}
                        </sub>

                    </div>
                    {/* <div className="position-relative pt-2">
                      <div className="price-yearly text-body-secondary price-yearly-toggle d-none">{plan.yearlyTotal}</div>
                    </div> */}
                  </div>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled pricing-list">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex}>
                        <h6 className="d-flex align-items-center mb-3">
                          <span className="badge badge-center rounded-pill bg-label-primary p-0 me-3">
                            <i className="icon-base ti tabler-check icon-12px"></i>
                          </span>
                          {feature}
                        </h6>
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="btn btn-label-primary w-100">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
