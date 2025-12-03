'use client'

export default function Header() {
  return (
    <nav
      className="layout-navbar container-xxl navbar-detached navbar navbar-expand-xl align-items-center bg-navbar-theme"
      id="layout-navbar"
    >
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0);">
          <i className="icon-base ti tabler-menu-2"></i>
        </a>
      </div>

      <div className="navbar-nav-right d-flex align-items-center justify-content-end" id="navbar-collapse">
        <div className="navbar-nav align-items-center">
          <div className="nav-item navbar-search-wrapper px-md-0 px-2 mb-0">
            <a className="nav-link search-toggler d-flex align-items-center px-0" href="javascript:void(0);">
              <i className="icon-base ti tabler-search icon-lg"></i>
            </a>
          </div>
        </div>

        <ul className="navbar-nav flex-row align-items-center ms-md-auto">
          <li className="nav-item navbar-dropdown dropdown dropdown-user">
            <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
              <div className="avatar avatar-online">
                <img src="/assets/img/avatars/1.png" alt="" className="w-px-40 h-auto rounded-circle" />
              </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="javascript:void(0);">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar avatar-online">
                        <img src="/assets/img/avatars/1.png" alt="" className="w-px-40 h-auto rounded-circle" />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <span className="fw-medium d-block">John Doe</span>
                      <small className="text-muted">Admin</small>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <li>
                <a className="dropdown-item" href="javascript:void(0);">
                  <i className="icon-base ti tabler-user me-2"></i>
                  <span className="align-middle">My Profile</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="javascript:void(0);">
                  <i className="icon-base ti tabler-logout me-2"></i>
                  <span className="align-middle">Log Out</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}
