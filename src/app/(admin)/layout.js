import Sidebar from '@/components/dashboard/Sidebar'
import Header from '@/components/dashboard/Header'

const adminMenuItems = [
  {
    title: 'Dashboard',
    icon: 'tabler-smart-home',
    href: '/admin',
  },
  {
    title: 'Users',
    icon: 'tabler-users',
    href: '/admin/users',
  },
  {
    title: 'Settings',
    icon: 'tabler-settings',
    href: '/admin/settings',
  },
  {
    title: 'Reports',
    icon: 'tabler-chart-bar',
    href: '/admin/reports',
  },
]

export default function AdminLayout({ children }) {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar menuItems={adminMenuItems} />

        {/* Layout page */}
        <div className="layout-page">
          {/* Navbar */}
          <Header />

          {/* Content wrapper */}
          <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
              {children}
            </div>
            {/* / Content */}

            {/* Footer */}
            <footer className="content-footer footer bg-footer-theme">
              <div className="container-xxl">
                <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
                  <div className="text-body">
                    © {new Date().getFullYear()}, made with ❤️ by Relisync
                  </div>
                </div>
              </div>
            </footer>
            {/* / Footer */}

            <div className="content-backdrop fade"></div>
          </div>
          {/* Content wrapper */}
        </div>
        {/* / Layout page */}
      </div>

      {/* Overlay */}
      <div className="layout-overlay layout-menu-toggle"></div>

      {/* Drag Target Area To SlideIn Menu On Small Screens */}
      <div className="drag-target"></div>
    </div>
  )
}
