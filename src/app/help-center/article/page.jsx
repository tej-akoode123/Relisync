import Header from '@/components/front/Header'
import Footer from '@/components/front/Footer'
import DropdownInit from '@/components/front/DropdownInit'
import Link from 'next/link'

export const metadata = {
  title: 'Article - Help Center - Relisync UI',
  description: 'Help center article',
}

export default function HelpCenterArticlePage() {
  return (
    <>
      <DropdownInit />
      <Header />
      
      <section className="section-py bg-body first-section-pt">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="card">
                <div className="card-body">
                  <div className="mb-4">
                    <Link href="/help-center" className="btn btn-label-secondary">
                      <i className="icon-base ti tabler-arrow-left scaleX-n1-rtl me-2"></i>
                      Back to Help Center
                    </Link>
                  </div>
                  <h2 className="mb-4">Getting Started Guide</h2>
                  <div className="article-content">
                    <p className="lead">This is a comprehensive guide to help you get started with our platform.</p>
                    <h4 className="mt-5 mb-3">Introduction</h4>
                    <p>
                      Welcome to our help center! This article will guide you through the basics of using our platform.
                      Whether you're a new user or looking to refresh your knowledge, this guide has everything you need.
                    </p>
                    <h4 className="mt-5 mb-3">Key Features</h4>
                    <ul>
                      <li>Easy to use interface</li>
                      <li>Comprehensive documentation</li>
                      <li>24/7 support available</li>
                      <li>Regular updates and improvements</li>
                    </ul>
                    <h4 className="mt-5 mb-3">Next Steps</h4>
                    <p>
                      Now that you've read this article, you can explore more topics in our help center or contact our
                      support team if you have any questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="mb-4">Related Articles</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <Link href="/help-center/article" className="text-heading">First Steps</Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/help-center/article" className="text-heading">Account Setup</Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/help-center/article" className="text-heading">Payment Methods</Link>
                    </li>
                  </ul>
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
