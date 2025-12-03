import Header from '@/components/front/Header'
import Footer from '@/components/front/Footer'
import DropdownInit from '@/components/front/DropdownInit'
import Link from 'next/link'

export const metadata = {
  title: 'Help Center - Relisync UI',
  description: 'Get help and support',
}

export default function HelpCenterPage() {
  return (
    <>
      <DropdownInit />
      <Header />
      
      {/* Help Center Header */}
      <section className="section-py first-section-pt help-center-header position-relative overflow-hidden">
        <img className="banner-bg-img z-n1" src="/assets/img/pages/header.png" alt="Help center header" />
        <h4 className="text-center text-primary">Hello, how can we help?</h4>
        <div className="input-wrapper mb-4 input-group input-group-merge position-relative mx-auto">
          <span className="input-group-text" id="basic-addon1">
            <i className="icon-base ti tabler-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1" />
        </div>
        <p className="text-center px-4 mb-0">Common troubleshooting topics: eCommerce, Blogging to payment</p>
      </section>

      {/* Popular Articles */}
      <section className="section-py">
        <div className="container">
          <h4 className="text-center mb-6">Popular Articles</h4>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="row g-6">
                <div className="col-xl-4 col-md-6">
                  <div className="card border shadow-none">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i className="icon-base ti tabler-help icon-3x text-primary"></i>
                      </div>
                      <h5 className="my-3">Getting Started</h5>
                      <p className="mb-3">Whether you're new or you're a power user, this article will…</p>
                      <Link href="/help-center/article" className="btn btn-sm btn-label-primary">Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card border shadow-none">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i className="icon-base ti tabler-book icon-3x text-primary"></i>
                      </div>
                      <h5 className="my-3">First Steps</h5>
                      <p className="mb-3">Are you a new customer wondering how to get started?</p>
                      <Link href="/help-center/article" className="btn btn-sm btn-label-primary">Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card border shadow-none">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i className="icon-base ti tabler-file-text icon-3x text-primary"></i>
                      </div>
                      <h5 className="my-3">Add External Content</h5>
                      <p className="mb-3">This article will show you how to expand the functionality of...</p>
                      <Link href="/help-center/article" className="btn btn-sm btn-label-primary">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="section-py bg-body">
        <div className="container knowledge-base">
          <h4 className="text-center mb-6">Knowledge Base</h4>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="row g-6">
                <div className="col-xl-4 col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-primary">
                            <i className="icon-base ti tabler-shopping-cart"></i>
                          </span>
                        </div>
                        <h5 className="mb-0">Buying</h5>
                      </div>
                      <ul className="list-unstyled my-6">
                        <li className="mb-2">
                          <Link href="/help-center/article" className="text-heading d-flex justify-content-between align-items-center">
                            <span className="text-truncate me-2 me-lg-4">What are Favourites?</span>
                            <i className="icon-base ti tabler-chevron-right scaleX-n1-rtl text-body-secondary"></i>
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link href="/help-center/article" className="text-heading d-flex justify-content-between align-items-center">
                            <span className="text-truncate me-2 me-lg-4">How do I purchase an item?</span>
                            <i className="icon-base ti tabler-chevron-right scaleX-n1-rtl text-body-secondary"></i>
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link href="/help-center/article" className="text-heading d-flex justify-content-between align-items-center">
                            <span className="text-truncate me-2 me-lg-4">How do refunds work?</span>
                            <i className="icon-base ti tabler-chevron-right scaleX-n1-rtl text-body-secondary"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-success">
                            <i className="icon-base ti tabler-settings"></i>
                          </span>
                        </div>
                        <h5 className="mb-0">Account</h5>
                      </div>
                      <ul className="list-unstyled my-6">
                        <li className="mb-2">
                          <Link href="/help-center/article" className="text-heading d-flex justify-content-between align-items-center">
                            <span className="text-truncate me-2 me-lg-4">Change my password</span>
                            <i className="icon-base ti tabler-chevron-right scaleX-n1-rtl text-body-secondary"></i>
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link href="/help-center/article" className="text-heading d-flex justify-content-between align-items-center">
                            <span className="text-truncate me-2 me-lg-4">Update profile</span>
                            <i className="icon-base ti tabler-chevron-right scaleX-n1-rtl text-body-secondary"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-warning">
                            <i className="icon-base ti tabler-help"></i>
                          </span>
                        </div>
                        <h5 className="mb-0">Support</h5>
                      </div>
                      <ul className="list-unstyled my-6">
                        <li className="mb-2">
                          <Link href="/help-center/article" className="text-heading d-flex justify-content-between align-items-center">
                            <span className="text-truncate me-2 me-lg-4">Contact support</span>
                            <i className="icon-base ti tabler-chevron-right scaleX-n1-rtl text-body-secondary"></i>
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link href="/help-center/article" className="text-heading d-flex justify-content-between align-items-center">
                            <span className="text-truncate me-2 me-lg-4">FAQs</span>
                            <i className="icon-base ti tabler-chevron-right scaleX-n1-rtl text-body-secondary"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
