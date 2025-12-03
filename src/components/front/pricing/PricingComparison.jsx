import Link from 'next/link'

export default function PricingComparison() {
  return (
    <section className="section-py pricing-plans-comparison">
      <div className="container">
        <div className="col-12 text-center mb-6">
          <h3 className="mb-2">Pick a plan that works best for you</h3>
          <p>Stay cool, we have a 48-hour money back guarantee!</p>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="table-responsive border border-top-0 rounded">
              <table className="table table-striped text-center mb-0">
                <thead>
                  <tr>
                    <th scope="col">
                      <p className="mb-0">Features</p>
                      <small className="text-body fw-normal text-capitalize">Native front features</small>
                    </th>
                    <th scope="col">
                      <p className="mb-0">Starter</p>
                      <small className="text-body fw-normal text-capitalize">Free</small>
                    </th>
                    <th scope="col">
                      <p className="mb-0 position-relative">
                        Pro
                        <span className="badge badge-center rounded-pill bg-primary position-absolute mt-n2 ms-1">
                          <i className="icon-base ti tabler-star"></i>
                        </span>
                      </p>
                      <small className="text-body fw-normal text-capitalize">$7.5/month</small>
                    </th>
                    <th scope="col">
                      <p className="mb-0">Enterprise</p>
                      <small className="text-body fw-normal text-capitalize">$16/month</small>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-heading">14-days free trial</td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary p-0">
                        <i className="icon-base ti tabler-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary p-0">
                        <i className="icon-base ti tabler-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary p-0">
                        <i className="icon-base ti tabler-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-heading">No user limit</td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary p-0 ">
                        <i className="icon-base ti tabler-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary p-0 ">
                        <i className="icon-base ti tabler-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary p-0 ">
                        <i className="icon-base ti tabler-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-heading">Product Support</td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary p-0 ">
                        <i className="icon-base ti tabler-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary p-0 ">
                        <i className="icon-base ti tabler-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary p-0 ">
                        <i className="icon-base ti tabler-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-heading">Email Support</td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary p-0 ">
                        <i className="icon-base ti tabler-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="badge bg-label-primary badge-sm">Add-On-Available</span>
                    </td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary p-0 ">
                        <i className="icon-base ti tabler-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-heading">Integrations</td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary p-0 ">
                        <i className="icon-base ti tabler-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary p-0 ">
                        <i className="icon-base ti tabler-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary p-0 ">
                        <i className="icon-base ti tabler-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-heading">Removal of Front branding</td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary p-0 ">
                        <i className="icon-base ti tabler-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="badge bg-label-primary badge-sm">Add-On-Available</span>
                    </td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary p-0 ">
                        <i className="icon-base ti tabler-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-heading">Active maintenance & support</td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary p-0 ">
                        <i className="icon-base ti tabler-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary p-0 ">
                        <i className="icon-base ti tabler-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary p-0 ">
                        <i className="icon-base ti tabler-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-heading">Data storage for 365 days</td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary p-0 ">
                        <i className="icon-base ti tabler-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-secondary p-0 ">
                        <i className="icon-base ti tabler-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 bg-label-primary p-0 ">
                        <i className="icon-base ti tabler-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <Link href="/payment" className="btn text-nowrap btn-label-primary">Choose Plan</Link>
                    </td>
                    <td>
                      <Link href="/payment" className="btn text-nowrap btn-primary">Choose Plan</Link>
                    </td>
                    <td>
                      <Link href="/payment" className="btn text-nowrap btn-label-primary">Choose Plan</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
