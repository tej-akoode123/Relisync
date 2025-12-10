export default function CTA() {
  return (
    <section id="landingCTA" className="section-py landing-cta position-relative bg-white p-lg-0 pb-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-start text-sm-center text-lg-start">
            <h3 className="cta-title text-dark fw-bold mb-1">Start Managing Your Listings Today</h3>
            <h5 className="text-body mb-8">Experience the simplest property workflow ever.</h5>
            <a href="#" className="btn btn-lg btn-primary">Get Started</a>
          </div>
          <div className="col-lg-6 pt-lg-12 text-center text-lg-end">
            <img
              src="/front-pages/images/front-pages/landing-page/cta-dashboard.webp"
              alt="cta dashboard"
              className="img-fluid mt-lg-4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
