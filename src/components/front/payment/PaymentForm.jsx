'use client'

import { useState } from 'react'

export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState('credit-card')

  return (
    <section className="section-py bg-body first-section-pt">
      <div className="container">
        <div className="card px-3">
          <div className="row">
            <div className="col-lg-7 card-body border-end p-md-8">
              <h4 className="mb-2">Checkout</h4>
              <p className="mb-0">
                All plans include 40+ advanced tools and features to boost your product. <br />
                Choose the best plan to fit your needs.
              </p>
              <div className="row g-5 py-8">
                <div className="col-md col-lg-12 col-xl-6">
                  <div className="form-check custom-option custom-option-basic checked">
                    <label
                      className="form-check-label custom-option-content form-check-input-payment gap-4 align-items-center"
                      htmlFor="customRadioVisa">
                      <input
                        name="customRadioTemp"
                        className="form-check-input my-2"
                        type="radio"
                        value="credit-card"
                        id="customRadioVisa"
                        checked={paymentMethod === 'credit-card'}
                        onChange={() => setPaymentMethod('credit-card')}
                      />
                      <span className="custom-option-body">
                        <img
                          src="/assets/img/icons/payments/visa-light.png"
                          alt="visa-card"
                          width="58"
                          data-app-light-img="icons/payments/visa-light.png"
                          data-app-dark-img="icons/payments/visa-dark.png"
                          style={{ visibility: 'visible', display: 'block' }}
                        />
                        <span className="ms-4 fw-medium text-heading">Credit Card</span>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="col-md col-lg-12 col-xl-6">
                  <div className="form-check custom-option custom-option-basic">
                    <label
                      className="form-check-label custom-option-content form-check-input-payment gap-4 align-items-center"
                      htmlFor="customRadioPaypal">
                      <input
                        name="customRadioTemp"
                        className="form-check-input my-2"
                        type="radio"
                        value="paypal"
                        id="customRadioPaypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={() => setPaymentMethod('paypal')}
                      />
                      <span className="custom-option-body">
                        <img
                          src="/assets/img/icons/payments/paypal-light.png"
                          alt="paypal"
                          width="58"
                          data-app-light-img="icons/payments/paypal-light.png"
                          data-app-dark-img="icons/payments/paypal-dark.png"
                          style={{ visibility: 'visible', display: 'block' }}
                        />
                        <span className="ms-4 fw-medium text-heading">Paypal</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <h4 className="mb-6">Billing Details</h4>
              <form>
                <div className="row g-6">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="billings-email">Email Address</label>
                    <input type="text" id="billings-email" className="form-control" placeholder="john.doe@gmail.com" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="billings-password">Password</label>
                    <input type="password" id="billings-password" className="form-control" placeholder="Password" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="billings-country">Country</label>
                    <select id="billings-country" className="form-select" data-allow-clear="true">
                      <option value="">Select</option>
                      <option value="Australia">Australia</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Canada">Canada</option>
                      <option value="China">China</option>
                      <option value="France">France</option>
                      <option value="Germany">Germany</option>
                      <option value="India">India</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="billings-zip">Billing Zip / Postal Code</label>
                    <input
                      type="text"
                      id="billings-zip"
                      className="form-control billings-zip-code"
                      placeholder="Zip / Postal Code" />
                  </div>
                </div>
              </form>
              {paymentMethod === 'credit-card' && (
                <div id="form-credit-card">
                  <h4 className="mt-8 mb-6">Credit Card Info</h4>
                  <form>
                    <div className="row g-6">
                      <div className="col-12">
                        <label className="form-label" htmlFor="billings-card-num">Card number</label>
                        <div className="input-group input-group-merge">
                          <input
                            type="text"
                            id="billings-card-num"
                            className="form-control billing-card-mask"
                            placeholder="7465 8374 5837 5067"
                            aria-describedby="paymentCard" />
                          <span className="input-group-text cursor-pointer p-1" id="paymentCard">
                            <span className="card-type"></span>
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="billings-card-name">Name</label>
                        <input type="text" id="billings-card-name" className="form-control" placeholder="John Doe" />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label" htmlFor="billings-card-date">EXP. Date</label>
                        <input
                          type="text"
                          id="billings-card-date"
                          className="form-control billing-expiry-date-mask"
                          placeholder="MM/YY" />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label" htmlFor="billings-card-cvv">CVV</label>
                        <input
                          type="text"
                          id="billings-card-cvv"
                          className="form-control billing-cvv-mask"
                          maxLength="3"
                          placeholder="965" />
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
            <div className="col-lg-5 card-body p-md-8">
              <h4 className="mb-2">Order Summary</h4>
              <p className="mb-8">
                It can help you manage and service orders before,<br />
                during and after fulfilment.
              </p>
              <div className="bg-lighter p-6 rounded">
                <p>A simple start for everyone</p>
                <div className="d-flex align-items-center mb-4">
                  <h1 className="text-heading mb-0">$59.99</h1>
                  <sub className="h6 text-body mb-n3">/month</sub>
                </div>
                <div className="d-grid">
                  <button
                    type="button"
                    data-bs-target="#pricingModal"
                    data-bs-toggle="modal"
                    className="btn btn-label-primary">
                    Change Plan
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0">Subtotal</p>
                  <h6 className="mb-0">$85.99</h6>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <p className="mb-0">Tax</p>
                  <h6 className="mb-0">$4.99</h6>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center mt-4 pb-1">
                  <p className="mb-0">Total</p>
                  <h6 className="mb-0">$90.98</h6>
                </div>
                <div className="d-grid mt-5">
                  <button className="btn btn-success">
                    <span className="me-2">Proceed with Payment</span>
                    <i className="icon-base ti tabler-arrow-right scaleX-n1-rtl"></i>
                  </button>
                </div>

                <p className="mt-8">
                  By continuing, you accept to our Terms of Services and Privacy Policy. Please note that payments are
                  non-refundable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
