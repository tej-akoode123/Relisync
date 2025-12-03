export default function PricingFAQ() {
  return (
    <section className="section-py pricing-faqs rounded-bottom bg-body">
      <div className="container">
        <div className="text-center mb-6">
          <h4 className="mb-2">FAQs</h4>
          <p>Let us help answer the most common questions you might have.</p>
        </div>
        <div className="accordion" id="pricingFaq">
          <div className="card accordion-item">
            <h2 className="accordion-header" id="headingone">
              <button
                type="button"
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq-1"
                aria-expanded="false"
                aria-controls="faq-1">
                What counts towards the 100 responses limit?
              </button>
            </h2>
            <div
              id="faq-1"
              className="accordion-collapse collapse"
              aria-labelledby="headingone"
              data-bs-parent="#pricingFaq">
              <div className="accordion-body">
                We accept Visa®, MasterCard®, American Express®, and PayPal®. So you can be confident that your
                credit card information will be kept safe and secure.
              </div>
            </div>
          </div>
          <div className="card accordion-item active">
            <h2 className="accordion-header" id="headingTwo">
              <button
                type="button"
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#faq-2"
                aria-expanded="false"
                aria-controls="faq-2">
                How do you process payments?
              </button>
            </h2>
            <div
              id="faq-2"
              className="accordion-collapse collapse show"
              aria-labelledby="headingTwo"
              data-bs-parent="#pricingFaq">
              <div className="accordion-body">
                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in
                elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus
                feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.
              </div>
            </div>
          </div>
          <div className="card accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                type="button"
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq-3"
                aria-expanded="false"
                aria-controls="faq-3">
                Do you have a money-back guarantee?
              </button>
            </h2>
            <div
              id="faq-3"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#pricingFaq">
              <div className="accordion-body">
                We count all responses submitted through all your forms in a month. If you already received 100
                responses this month, you won't be able to receive any more of them until next month when the counter
                resets.
              </div>
            </div>
          </div>
          <div className="card accordion-item">
            <h6 className="accordion-header" id="headingFour">
              <button
                type="button"
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq-4"
                aria-expanded="false"
                aria-controls="faq-4">
                I have more questions. Where can I get help?
              </button>
            </h6>
            <div
              id="faq-4"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#pricingFaq">
              <div className="accordion-body">2Checkout accepts all types of credit and debit cards.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
