import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero-animation">
      <div id="landingHero" className="section-py pb-0 landing-hero position-relative">
        {/* <img
          src="/front-pages/images/front-pages/backgrounds/hero-bg.png"
          alt="hero background"
          className="position-absolute top-0 start-50 translate-middle-x object-fit-cover w-100 h-100"
          data-speed="1"
        /> */}
        <div className="container">
          <div className="hero-text-box text-center position-relative">
            <h1 className="hero-title display-6 fw-extrabold">
            One Platform to Manage Properties, Buyers & Visits.
            </h1>
            <h2 className="hero-sub-title h6 mb-6">
            Built for Real Estate Brokers & Teams.
            </h2>
            {/* <div className="landing-hero-btn d-inline-block position-relative">
              <span className="hero-btn-item position-absolute d-none d-md-flex fw-medium">
                Join community
                <img
                  src="/front-pages/images/front-pages/icons/Join-community-arrow.png"
                  alt="Join community arrow"
                  className="scaleX-n1-rtl"
                />
              </span>
              <a href="#landingPricing" className="btn btn-primary btn-lg">Start Free Trial</a>
            </div> */}
            <div className="landing-hero-btn d-inline-flex gap-4 position-relative">
              
              <a href="#" className="btn btn-primary btn-lg">Start Free Trial</a>
              <a href="#" className="btn btn-secondary btn-lg">Book Demo</a>
            </div>
          </div>
          <div id="heroDashboardAnimation" className="hero-animation-img">
            <Link href="#">
              <div id="heroAnimationImg" className="position-relative hero-dashboard-img">
                <img
                  src="/front-pages/images/front-pages/home/dashboard-screens.png"
                  alt="hero dashboard"
                  className="animation-img"
                  data-app-light-img="front-pages/home/dashboard-screens.png"
                  data-app-dark-img="front-pages/home/dashboard-screens.png"
                  style={{ visibility: 'visible', display: 'block' }}
                />
              </div> 
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="landing-hero-blank"></div> */}
    </section>
  )
}
