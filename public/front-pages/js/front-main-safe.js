// Safe wrapper for front-main.js that checks for element existence
(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Only run if we're not on the landing page (which doesn't have these elements)
    const isLandingPage = document.querySelector('[data-template="front-pages-no-customizer"]');
    if (isLandingPage) {
      // Skip dashboard-specific initialization on landing page
      return;
    }

    // Get style from local storage or use 'system' as default
    let storedStyle =
      localStorage.getItem('templateCustomizer-' + (window.templateCustomizer?.templateName || 'vertical-menu-template') + '--Theme') ||
      (window.templateCustomizer?.settings?.defaultStyle ?? document.documentElement.getAttribute('data-bs-theme') || 'light');

    let styleSwitcher = document.querySelector('.dropdown-style-switcher');
    
    // Only proceed if element exists
    if (styleSwitcher) {
      const styleSwitcherIcon = styleSwitcher.querySelector('i');
      if (styleSwitcherIcon && typeof bootstrap !== 'undefined') {
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
  }
})();
