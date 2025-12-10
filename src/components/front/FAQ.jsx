export default function FAQ() {
  const faqs = [
    {
      question: 'What can I manage inside this platform?',
      answer: `You can manage your entire real estate workflow in one place — properties, buyers, visits, documents, and broker collaboration.
      Add new listings, track buyer interest, schedule visits, share groups, and monitor activity easily from a single dashboard.`,
      id: 'accordionOne',
      expanded: false,
    },
    {
      question: 'Do I need technical knowledge to use the platform?',
      answer: `Not at all.
      The platform is designed specifically for brokers and sales teams, so everything is simplified and easy to navigate.
      You can start managing properties within minutes — no training or technical setup needed.`,
      id: 'accordionTwo',
      expanded: false,
    },
    {
      question: 'How does the pricing work?',
      answer: `We offer simple monthly and yearly plans based on the number of users and features you need.
      You can start with the Free Trial, explore all features, and upgrade anytime as your team grows.`,
      id: 'accordionThree',
      expanded: true,
    },
    {
      question: 'Is my data safe and secure?',
      answer: `Absolutely.
      Your data is protected with bank-level encryption, secure cloud infrastructure, and regular backups.
      Only you and your authorized team members can access your listings, buyers, and visit information.`,
      id: 'accordionFour',
      expanded: false,
    },
  ]

  return (
    <section id="landingFAQ" className="section-py bg-purple-green landing-faq">
      <div className="container">
        <h2 className="text-center fw-extrabold mb-1">
          Frequently asked
          <span className="position-relative fw-extrabold z-1">
            {' '}questions
            <img
              src="/front-pages/images/front-pages/icons/section-title-icon.png"
              alt="laptop charging"
              className="section-title-img position-absolute object-fit-contain bottom-0 z-n1"
            />
          </span>
        </h2>
        <p className="text-center mb-12 pb-md-4">
          Browse through these FAQs to find answers to commonly asked questions.
        </p>
        <div className="row gy-12 align-items-center justify-content-center">
          {/* <div className="col-lg-5">
            <div className="text-center">
              <img
                src="/front-pages/images/front-pages/landing-page/faq.svg"
                alt="faq boy with logos"
                className="faq-image"
              />
            </div>
          </div> */}
          <div className="col-lg-10">
            <div className="accordion" id="accordionExample">
              {faqs.map((faq, index) => (
                <div key={index} className={`card accordion-item ${faq.expanded ? 'active' : ''}`}>
                  <h2 className="accordion-header" id={`heading${index + 1}`}>
                    <button
                      type="button"
                      className={`accordion-button ${faq.expanded ? '' : 'collapsed'}`}
                      data-bs-toggle="collapse"
                      data-bs-target={`#${faq.id}`}
                      aria-expanded={faq.expanded}
                      aria-controls={faq.id}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={faq.id}
                    className={`accordion-collapse collapse ${faq.expanded ? 'show' : ''}`}
                    aria-labelledby={`heading${index + 1}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
