/**
 * Main - Front Pages (Patched with null checks for landing page)
 */
'use strict';

// Check if we're on landing page
const isLandingPage = document.querySelector('[data-template="front-pages-no-customizer"]');

if (window.Helpers) {
  window.isRtl = window.Helpers.isRtl();
  window.isDarkStyle = window.Helpers.isDarkStyle();
}

(function () {
  const menu = document.getElementById('navbarSupportedContent'),
    nav = document.querySelector('.layout-navbar'),
    navItemLink = document.querySelectorAll('.navbar-nav .nav-link');

  // Initialised custom options if checked
  if (window.Helpers && window.Helpers.initCustomOptionCheck) {
    setTimeout(function () {
      window.Helpers.initCustomOptionCheck();
    }, 1000);
  }

  if (typeof Waves !== 'undefined') {
    Waves.init();
    Waves.attach(".btn[class*='btn-']:not([class*='btn-outline-']):not([class*='btn-label-'])", ['waves-light']);
    Waves.attach("[class*='btn-outline-']");
    Waves.attach("[class*='btn-label-']");
    Waves.attach('.pagination .page-item .page-link');
  }

  // Init BS Tooltip
  if (typeof bootstrap !== 'undefined') {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  if (window.isRtl && window.Helpers && window.Helpers._addClass) {
    // If layout is RTL add .dropdown-menu-end class to .dropdown-menu
    Helpers._addClass('dropdown-menu-end', document.querySelectorAll('#layout-navbar .dropdown-menu'));
    // If layout is RTL add .dropdown-menu-end class to .dropdown-menu
    Helpers._addClass('dropdown-menu-end', document.querySelectorAll('.dropdown-menu'));
  }

  // Navbar - only if nav exists
  if (nav) {
    window.addEventListener('scroll', e => {
      if (window.scrollY > 10) {
        nav.classList.add('navbar-active');
      } else {
        nav.classList.remove('navbar-active');
      }
    });
    window.addEventListener('load', e => {
      if (window.scrollY > 10) {
        nav.classList.add('navbar-active');
      } else {
        nav.classList.remove('navbar-active');
      }
    });
  }

  // Function to close the mobile menu - only if menu exists
  if (menu) {
    function closeMenu() {
      menu.classList.remove('show');
    }

    document.addEventListener('click', function (event) {
      // Check if the clicked element is inside mobile menu
      if (!menu.contains(event.target)) {
        closeMenu();
      }
    });
    navItemLink.forEach(link => {
      link.addEventListener('click', event => {
        if (!link.classList.contains('dropdown-toggle')) {
          closeMenu();
        } else {
          event.preventDefault();
        }
      });
    });
  }

  // Mega dropdown
  const megaDropdown = document.querySelectorAll('.nav-link.mega-dropdown');
  if (megaDropdown && typeof MegaDropdown !== 'undefined') {
    megaDropdown.forEach(e => {
      new MegaDropdown(e);
    });
  }

  // Get style from local storage or use 'system' as default
  const templateName = (window.templateCustomizer && window.templateCustomizer.templateName) ? window.templateCustomizer.templateName : 'vertical-menu-template';
  let storedStyle = localStorage.getItem('templateCustomizer-' + templateName + '--Theme');
  if (!storedStyle) {
    if (window.templateCustomizer && window.templateCustomizer.settings && window.templateCustomizer.settings.defaultStyle) {
      storedStyle = window.templateCustomizer.settings.defaultStyle;
    } else {
      storedStyle = document.documentElement.getAttribute('data-bs-theme') || 'light';
    }
  }

  let styleSwitcher = document.querySelector('.dropdown-style-switcher');
  
  // Only proceed if styleSwitcher exists (not on landing page)
  if (styleSwitcher && typeof bootstrap !== 'undefined') {
    const styleSwitcherIcon = styleSwitcher.querySelector('i');
    if (styleSwitcherIcon) {
      new bootstrap.Tooltip(styleSwitcherIcon, {
        title: storedStyle.charAt(0).toUpperCase() + storedStyle.slice(1) + ' Mode',
        fallbackPlacements: ['bottom']
      });
    }
  }

  // Run switchImage function based on the stored style (if Helpers exists)
  if (window.Helpers && window.Helpers.switchImage) {
    window.Helpers.switchImage(storedStyle);
  }

  // Update light/dark image based on current style (if Helpers exists)
  if (window.Helpers && window.Helpers.setTheme && window.Helpers.getPreferredTheme) {
    window.Helpers.setTheme(window.Helpers.getPreferredTheme());
  }

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (window.Helpers && window.Helpers.getStoredTheme) {
        const storedTheme = window.Helpers.getStoredTheme();
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
          if (window.Helpers.setTheme && window.Helpers.getPreferredTheme) {
            window.Helpers.setTheme(window.Helpers.getPreferredTheme());
          }
        }
      }
    });
  }

  function getScrollbarWidth() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.setProperty('--bs-scrollbar-width', `${scrollbarWidth}px`);
  }
  getScrollbarWidth();

  //Style Switcher (Light/Dark/System Mode) - only if not on landing page
  if (!isLandingPage && styleSwitcher) {
    window.addEventListener('DOMContentLoaded', () => {
      if (window.Helpers && window.Helpers.showActiveTheme && window.Helpers.getPreferredTheme) {
        window.Helpers.showActiveTheme(window.Helpers.getPreferredTheme());
      }
      getScrollbarWidth();
      const themeToggles = document.querySelectorAll('[data-bs-theme-value]');
      if (themeToggles && typeof bootstrap !== 'undefined') {
        themeToggles.forEach(toggle => {
          toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value');
            if (window.Helpers && window.Helpers.setStoredTheme) {
              window.Helpers.setStoredTheme(templateName, theme);
            }
            if (window.Helpers && window.Helpers.setTheme) {
              window.Helpers.setTheme(theme);
            }
            if (window.Helpers && window.Helpers.showActiveTheme) {
              window.Helpers.showActiveTheme(theme, true);
            }
            if (window.Helpers && window.Helpers.syncCustomOptions) {
              window.Helpers.syncCustomOptions(theme);
            }
            let currTheme = theme;
            if (theme === 'system' && window.matchMedia) {
              currTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            const icon = styleSwitcher.querySelector('i');
            if (icon) {
              new bootstrap.Tooltip(icon, {
                title: theme.charAt(0).toUpperCase() + theme.slice(1) + ' Mode',
                fallbackPlacements: ['bottom']
              });
            }
            if (window.Helpers && window.Helpers.switchImage) {
              window.Helpers.switchImage(currTheme);
            }
          });
        });
      }
    });
  }
})();
