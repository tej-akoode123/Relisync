export default function FAQ() {
  const faqs = [
    {
      question: 'Do you charge for each upgrade?',
      answer: 'Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer gummi bears marshmallow pastry pie.',
      id: 'accordionOne',
      expanded: false,
    },
    {
      question: 'Do I need to purchase a license for each website?',
      answer: 'Dessert ice cream donut oat cake jelly-o pie sugar plum cheesecake. Bear claw dragée oat cake dragée ice cream halvah tootsie roll. Danish cake oat cake pie macaroon tart donut gummies. Jelly beans candy canes carrot cake. Fruitcake chocolate chupa chups.',
      id: 'accordionTwo',
      expanded: false,
    },
    {
      question: 'What is regular license?',
      answer: 'Regular license can be used for end products that do not charge users for access or service(access is free and there will be no monthly subscription fee). Single regular license can be used for single end product and end product can be used by you or your client.',
      id: 'accordionThree',
      expanded: true,
    },
    {
      question: 'What is extended license?',
      answer: 'Extended license can be used for end products that charge users for access or service. Single extended license can be used for single end product and end product can be used by you or your client.',
      id: 'accordionFour',
      expanded: false,
    },
  ]

  return (
    <section id="landingFAQ" className="section-py bg-body landing-faq">
      <div className="container">
        <div className="text-center mb-4">
          <span className="badge bg-label-primary">FAQ</span>
        </div>
        <h4 className="text-center mb-1">
          Frequently asked
          <span className="position-relative fw-extrabold z-1">
            {' '}questions
            <img
              src="/front-pages/images/front-pages/icons/section-title-icon.png"
              alt="laptop charging"
              className="section-title-img position-absolute object-fit-contain bottom-0 z-n1"
            />
          </span>
        </h4>
        <p className="text-center mb-12 pb-md-4">
          Browse through these FAQs to find answers to commonly asked questions.
        </p>
        <div className="row gy-12 align-items-center">
          <div className="col-lg-5">
            <div className="text-center">
              <img
                src="/front-pages/images/front-pages/landing-page/faq-boy-with-logos.png"
                alt="faq boy with logos"
                className="faq-image"
              />
            </div>
          </div>
          <div className="col-lg-7">
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
