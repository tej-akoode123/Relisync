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
                  {/* <img
                          src="/front-pages/images/front-pages/home/relisync-logo.svg"
                          alt="image"
                          className="img-fluid"
                        /> */}
                        <img
                          src="/front-pages/images/front-pages/home/relisync-logo-2.svg"
                          alt="image"
                          className="img-fluid"
                        />
              </span>
              
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
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link fw-medium" aria-current="page" href="#">Home</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link fw-medium" href="#landingFeatures">Features</a>
              </li> */}
              <li className="nav-item mega-dropdown">
                <a
                  href="javascript:void(0);"
                  className="nav-link dropdown-toggle navbar-ex-14-mega-dropdown mega-dropdown fw-medium"
                  aria-expanded="false"
                  data-bs-toggle="mega-dropdown"
                  data-trigger="hover"
                >
                  <span data-i18n="Pages">Features</span>
                </a>
                <div className="dropdown-menu p-4 p-xl-8">
                  <div className="row gy-4">
                    <div className="col-4 col-lg">
                      {/* <div className="h6 d-flex align-items-center mb-3 mb-lg-5">
                        <div className="avatar flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-primary">
                            <i className="icon-base ti tabler-layout-grid icon-lg"></i>
                          </span>
                        </div>
                        <span className="ps-1">Other</span>
                      </div> */}
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="/pricing">
                            <i className="icon-base ti tabler-circle me-1 icon-12px"></i>
                            <div class="men-rig">
                                <strong>Smart Property & Lead Management</strong>
                                <p>Keep every listing and lead organized for faster deal closures.
                                </p>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="/payment">
                            <i className="icon-base ti tabler-circle me-1 icon-12px"></i>
                            <div class="men-rig">
                                <strong>Easy Visit Scheduling
                                </strong>
                                <p>Schedule and track property visits effortlessly in one place.
                                </p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-4 col-lg">
                      {/* <div className="h6 d-flex align-items-center mb-3 mb-lg-5">
                        <div className="avatar flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-primary">
                            <i className="icon-base ti tabler-layout-grid icon-lg"></i>
                          </span>
                        </div>
                        <span className="ps-1">Other</span>
                      </div> */}
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="/pricing">
                            <i className="icon-base ti tabler-circle me-1 icon-12px"></i>
                            <div class="men-rig">
                                <strong>Seller Submission Portal</strong>
                                <p>Let sellers upload property details and media with ease.
                                </p>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="/payment">
                            <i className="icon-base ti tabler-circle me-1 icon-12px"></i>
                            <div class="men-rig">
                                <strong>Advisor Collaboration Network
                                </strong>
                                <p>Connect and collaborate with advisors to expand your reach.</p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-4 col-lg">
                      {/* <div className="h6 d-flex align-items-center mb-3 mb-lg-5">
                        <div className="avatar flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-primary">
                            <i className="icon-base ti tabler-layout-grid icon-lg"></i>
                          </span>
                        </div>
                        <span className="ps-1">Other</span>
                      </div> */}
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="/pricing">
                            <i className="icon-base ti tabler-circle me-1 icon-12px"></i>
                            <div class="men-rig">
                                <strong>Voice Notes & Document Storage
                                </strong>
                                <p>Save voice notes and store documents securely for quick access.
                                </p>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="/payment">
                            <i className="icon-base ti tabler-circle me-1 icon-12px"></i>
                            <div class="men-rig">
                                <strong>Analytics & Real-Time Alerts
                                </strong>
                                <p>Get insights and instant alerts to act faster and convert more.
                                </p>
                            </div>
                          </a>
                        </li>
                        
                      
                      </ul>
                    </div>
                    {/* <div className="col-lg-4 d-none d-lg-block">
                      <div className="bg-body nav-img-col p-2">
                        <img
                          src="/front-pages/images/front-pages/misc/nav-item-col-img.png"
                          alt="nav item col image"
                          className="w-100"
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
              </li>
              <li className="nav-item mega-dropdown">
                <a
                  href="javascript:void(0);"
                  className="nav-link dropdown-toggle navbar-ex-14-mega-dropdown mega-dropdown fw-medium"
                  aria-expanded="false"
                  data-bs-toggle="mega-dropdown"
                  data-trigger="hover"
                >
                  <span data-i18n="Pages">Company</span>
                </a>
                <div className="dropdown-menu p-4 p-xl-8">
                  <div className="row gy-4">
                    <div className="col-4 col-lg">
                      {/* <div className="h6 d-flex align-items-center mb-3 mb-lg-5">
                        <div className="avatar flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-primary">
                            <i className="icon-base ti tabler-layout-grid icon-lg"></i>
                          </span>
                        </div>
                        <span className="ps-1">Other</span>
                      </div> */}
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="/pricing">
                            <i className="icon-base ti tabler-circle me-1 icon-12px"></i>
                            <div class="men-rig">
                                <strong>About Us</strong>
                                <p>Creating a smarter, more impactful customer relationship platform
                                </p>
                            </div>
                          </a>
                        </li>
                        
                      </ul>
                    </div>
                    <div className="col-4 col-lg">
                     
                      <ul className="nav flex-column">
                      <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="/payment">
                            <i className="icon-base ti tabler-circle me-1 icon-12px"></i>
                            <div class="men-rig">
                                <strong>Careers
                                </strong>
                                <p>Lets work together
                                </p>
                            </div>
                          </a>
                        </li>
                       
                      </ul>
                    </div>
                    <div className="col-4 col-lg">
                      <ul className="nav flex-column">
                          <li className="nav-item">
                              <a className="nav-link mega-dropdown-link" href="/payment">
                                <i className="icon-base ti tabler-circle me-1 icon-12px"></i>
                                <div class="men-rig">
                                    <strong>Our Vision
                                    </strong>
                                    <p>Empowering real estate with smart CRM solutions.
                                    </p>
                                </div>
                              </a>
                            </li>
                        </ul>    
                    </div>
                    
                    {/* <div className="col-lg-4 d-none d-lg-block">
                      <div className="bg-body nav-img-col p-2">
                        <img
                          src="/front-pages/images/front-pages/misc/nav-item-col-img.png"
                          alt="nav item col image"
                          className="w-100"
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
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
              
            </ul>
          </div>
          <div className="landing-menu-overlay d-lg-none"></div>
          {/* Menu wrapper: End */}
          {/* Toolbar: Start */}
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            {/* navbar button: Start */}
            <li>
              <Link href="#" className="btn btn-primary">
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
