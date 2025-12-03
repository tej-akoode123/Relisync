export default function CTA() {
  return (
    <section id="landingCTA" className="section-py landing-cta position-relative p-lg-0 pb-0">
      <img
        src="/front-pages/images/front-pages/backgrounds/cta-bg-light.png"
        className="position-absolute bottom-0 end-0 scaleX-n1-rtl h-100 w-100 z-n1"
        alt="cta image"
        data-app-light-img="front-pages/backgrounds/cta-bg-light.png"
        data-app-dark-img="front-pages/backgrounds/cta-bg-dark.png"
      />
      <div className="container">
        <div className="row align-items-center gy-12">
          <div className="col-lg-6 text-start text-sm-center text-lg-start">
            <h3 className="cta-title text-primary fw-bold mb-1">Ready to Get Started?</h3>
            <h5 className="text-body mb-8">Start your project with a 14-day free trial</h5>
            <a href="#" className="btn btn-lg btn-primary">Get Started</a>
          </div>
          <div className="col-lg-6 pt-lg-12 text-center text-lg-end">
            <img
              src="/front-pages/images/front-pages/landing-page/cta-dashboard.png"
              alt="cta dashboard"
              className="img-fluid mt-lg-4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
