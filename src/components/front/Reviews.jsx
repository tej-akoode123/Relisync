export default function Reviews() {
  return (
    <section id="landingReviews" className="section-py bg-transparent landing-reviews">
      {/* What people say slider: Start */}
      <div className="container">
        <div className="row align-items-center gx-0 gy-4 g-lg-5 mb-0 pb-md-0">
          <div className="col-md-6 col-lg-5 col-xl-3">
          <h2 className="text-center fw-extrabold mb-1">
              <span className="position-relative fw-extrabold z-1">
                What people say
                <img
                  src="/front-pages/images/front-pages/icons/section-title-icon.png"
                  alt="laptop charging"
                  className="section-title-img position-absolute object-fit-contain bottom-0 z-n1"
                />
              </span>
            </h2>
            <p className="mb-5 mb-md-12">
              See what our customers have to<br className="d-none d-xl-block" />
              say about their experience.
            </p>
            <div className="landing-reviews-btns">
              <button id="reviews-previous-btn" className="btn btn-icon btn-label-primary reviews-btn me-3" type="button">
                <i className="icon-base ti tabler-chevron-left icon-md scaleX-n1-rtl"></i>
              </button>
              <button id="reviews-next-btn" className="btn btn-icon btn-label-primary reviews-btn" type="button">
                <i className="icon-base ti tabler-chevron-right icon-md scaleX-n1-rtl"></i>
              </button>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 col-xl-9">
            <div className="swiper-reviews-carousel overflow-hidden">
              <div className="swiper" id="swiper-reviews">
                <div className="swiper-wrapper">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div key={num} className="swiper-slide">
                      <div className="card h-100">
                        <div className="card-body text-body d-flex flex-column justify-content-between h-100">
                          <div className="mb-4">
                            {/* <img
                              src={`/front-pages/images/front-pages/branding/logo-${num}.png`}
                              alt="client logo"
                              className="client-logo img-fluid"
                            /> */}
                          </div>
                          <p>
                          The analytics dashboard gives us clarity we never had before. We now know which listings perform best and where to focus our marketing spend.
                          </p>
                          <div className="text-warning mb-4">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="icon-base ti tabler-star-filled"></i>
                            ))}
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="avatar me-3 avatar-sm">
                              <img src={`/front-pages/images/avatars/${num <= 5 ? num : 1}.png`} alt="Avatar" className="rounded-circle" />
                            </div>
                            <div>
                              {/* <h6 className="mb-0">Arvind Mehta {num}</h6> */}
                              <h6 className="mb-0">Arvind Mehta</h6>
                              <p className="small text-body-secondary mb-0">Director, Horizon Estates</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* What people say slider: End */}
      {/* <hr className="m-0 mt-6 mt-md-12" /> */}
      {/* Logo slider: Start */}
      {/* <div className="container">
        <div className="swiper-logo-carousel pt-8">
          <div className="swiper" id="swiper-clients-logos">
            <div className="swiper-wrapper">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="swiper-slide">
                  <img
                    src={`/front-pages/images/front-pages/branding/logo_${num}-light.png`}
                    alt="client logo"
                    className="client-logo"
                    data-app-light-img={`front-pages/branding/logo_${num}-light.png`}
                    data-app-dark-img={`front-pages/branding/logo_${num}-dark.png`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      {/* Logo slider: End */}
    </section>
  )
}
