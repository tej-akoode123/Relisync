'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="layout-navbar shadow-none py-0">
      <div className="container">
        <div className="navbar navbar-expand-lg landing-navbar px-3 px-md-8">
          {/* Menu logo wrapper: Start */}
          <div className="navbar-brand app-brand demo d-flex py-0 me-4 me-xl-8 ms-0">
            {/* Mobile menu toggle: Start*/}
            <button
              className="navbar-toggler border-0 px-0 me-4"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <i className="icon-base ti tabler-menu-2 icon-lg align-middle text-heading fw-medium"></i>
            </button>
            {/* Mobile menu toggle: End*/}
            <Link href="/" className="app-brand-link">
              <span className="app-brand-logo demo">
                <span className="text-primary">
                  <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.06"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                      fill="#161616"
                    />
                    <path
                      opacity="0.06"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                      fill="#161616"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </span>
              <span className="app-brand-text demo menu-text fw-bold ms-2 ps-1">Relisync</span>
            </Link>
          </div>
          {/* Menu logo wrapper: End */}
          {/* Menu wrapper: Start */}
          <div className={`collapse navbar-collapse landing-nav-menu ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <button
              className="navbar-toggler border-0 text-heading position-absolute end-0 top-0 scaleX-n1-rtl p-2"
              type="button"
              onClick={() => setIsMenuOpen(false)}
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <i className="icon-base ti tabler-x icon-lg"></i>
            </button>
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link fw-medium" aria-current="page" href="#landingHero">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#landingFeatures">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#landingTeam">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#landingFAQ">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#landingContact">Contact us</a>
              </li>
              <li className="nav-item mega-dropdown">
                <a
                  href="javascript:void(0);"
                  className="nav-link dropdown-toggle navbar-ex-14-mega-dropdown mega-dropdown fw-medium"
                  aria-expanded="false"
                  data-bs-toggle="mega-dropdown"
                  data-trigger="hover"
                >
                  <span data-i18n="Pages">Pages</span>
                </a>
                <div className="dropdown-menu p-4 p-xl-8">
                  <div className="row gy-4">
                    <div className="col-12 col-lg">
                      <div className="h6 d-flex align-items-center mb-3 mb-lg-5">
                        <div className="avatar flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-primary">
                            <i className="icon-base ti tabler-layout-grid icon-lg"></i>
                          </span>
                        </div>
                        <span className="ps-1">Other</span>
                      </div>
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="/pricing">
                            <i className="icon-base ti tabler-circle me-1 icon-12px"></i>
                            <span data-i18n="Pricing">Pricing</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="/payment">
                            <i className="icon-base ti tabler-circle me-1 icon-12px"></i>
                            <span data-i18n="Payment">Payment</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="/checkout">
                            <i className="icon-base ti tabler-circle me-1 icon-12px"></i>
                            <span data-i18n="Checkout">Checkout</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="/help-center">
                            <i className="icon-base ti tabler-circle me-1 icon-12px"></i>
                            <span data-i18n="Help Center">Help Center</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                      <div className="bg-body nav-img-col p-2">
                        <img
                          src="/front-pages/images/front-pages/misc/nav-item-col-img.png"
                          alt="nav item col image"
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium" href="/broker">Admin</Link>
              </li>
            </ul>
          </div>
          <div className="landing-menu-overlay d-lg-none"></div>
          {/* Menu wrapper: End */}
          {/* Toolbar: Start */}
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            {/* navbar button: Start */}
            <li>
              <Link href="/broker" className="btn btn-primary">
                <span className="tf-icons icon-base ti tabler-login scaleX-n1-rtl me-md-1"></span>
                <span className="d-none d-md-block">Login/Register</span>
              </Link>
            </li>
            {/* navbar button: End */}
          </ul>
          {/* Toolbar: End */}
        </div>
      </div>
    </nav>
  )
}
