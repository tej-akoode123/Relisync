export default function Contact() {
  return (
    <section id="landingContact" className="section-py bg-purple-green landing-faq landing-contact">
      <div className="container">
      <h2 className="text-center fw-extrabold mb-1">
          <span className="position-relative fw-extrabold z-1">
            Let&apos;s work
            <img
              src="/front-pages/images/front-pages/icons/section-title-icon.png"
              alt="laptop charging"
              className="section-title-img position-absolute object-fit-contain bottom-0 z-n1"
            />
          </span>
          {' '}together
        </h2>
        <p className="text-center mb-12 pb-md-4">Any question or remark? just write us a message</p>
        <div className="row g-6">
          <div className="col-lg-5">
            <div className="contact-img-box position-relative border p-2 h-100">
              <img
                src="/front-pages/images/front-pages/landing-page/contact-customer-service.png"
                alt="contact customer service"
                className="contact-img w-100 scaleX-n1-rtl"
              />
              <div className="p-4 pb-2">
                <div className="row g-4">
                  <div className="col-md-7 col-lg-12 col-xl-7">
                    <div className="d-flex align-items-center">
                      <div className="badge bg-label-primary rounded p-1_5 me-3">
                        <i className="icon-base ti tabler-mail icon-lg"></i>
                      </div>
                      <div>
                        <p className="mb-0">Email</p>
                        <h6 className="mb-0">
                          <a href="mailto:upspring.technology@gmail.com" className="text-heading">upspring.technology@gmail.com</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-lg-12 col-xl-5">
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
            <div className="card h-100 box-none">
              <div className="card-body">
                <h4 className="mb-2">Send a message</h4>
                <p className="mb-6">
                If you have questions about payments, account setup, broker licensing, team access, partnerships, or want details before subscribing, our team is here to help you.
                </p>
                <form>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="contact-form-fullname">Full Name</label>
                      <input type="text" className="form-control" id="contact-form-fullname" placeholder="Aditya" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="contact-form-email">Email</label>
                      <input
                        type="text"
                        id="contact-form-email"
                        className="form-control"
                        placeholder="upspring.technology@gmail.com"
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
