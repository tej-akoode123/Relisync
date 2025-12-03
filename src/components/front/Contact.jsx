export default function Contact() {
  return (
    <section id="landingContact" className="section-py bg-body landing-contact">
      <div className="container">
        <div className="text-center mb-4">
          <span className="badge bg-label-primary">Contact US</span>
        </div>
        <h4 className="text-center mb-1">
          <span className="position-relative fw-extrabold z-1">
            Let&apos;s work
            <img
              src="/front-pages/images/front-pages/icons/section-title-icon.png"
              alt="laptop charging"
              className="section-title-img position-absolute object-fit-contain bottom-0 z-n1"
            />
          </span>
          {' '}together
        </h4>
        <p className="text-center mb-12 pb-md-4">Any question or remark? just write us a message</p>
        <div className="row g-6">
          <div className="col-lg-5">
            <div className="contact-img-box position-relative border p-2 h-100">
              <img
                src="/front-pages/images/front-pages/icons/contact-border.png"
                alt="contact border"
                className="contact-border-img position-absolute d-none d-lg-block scaleX-n1-rtl"
              />
              <img
                src="/front-pages/images/front-pages/landing-page/contact-customer-service.png"
                alt="contact customer service"
                className="contact-img w-100 scaleX-n1-rtl"
              />
              <div className="p-4 pb-2">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-12 col-xl-6">
                    <div className="d-flex align-items-center">
                      <div className="badge bg-label-primary rounded p-1_5 me-3">
                        <i className="icon-base ti tabler-mail icon-lg"></i>
                      </div>
                      <div>
                        <p className="mb-0">Email</p>
                        <h6 className="mb-0">
                          <a href="mailto:example@gmail.com" className="text-heading">example@gmail.com</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12 col-xl-6">
                    <div className="d-flex align-items-center">
                      <div className="badge bg-label-success rounded p-1_5 me-3">
                        <i className="icon-base ti tabler-phone-call icon-lg"></i>
                      </div>
                      <div>
                        <p className="mb-0">Phone</p>
                        <h6 className="mb-0"><a href="tel:+1234-568-963" className="text-heading">+1234 568 963</a></h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="mb-2">Send a message</h4>
                <p className="mb-6">
                  If you would like to discuss anything related to payment, account, licensing,
                  partnerships, or have pre-sales questions, you&apos;re at the right place.
                </p>
                <form>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="contact-form-fullname">Full Name</label>
                      <input type="text" className="form-control" id="contact-form-fullname" placeholder="john" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="contact-form-email">Email</label>
                      <input
                        type="text"
                        id="contact-form-email"
                        className="form-control"
                        placeholder="johndoe@gmail.com"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="contact-form-message">Message</label>
                      <textarea
                        id="contact-form-message"
                        className="form-control"
                        rows="7"
                        placeholder="Write a message"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">Send inquiry</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
