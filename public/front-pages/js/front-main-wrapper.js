// Wrapper to safely load front-main.js with error handling
(function() {
  'use strict';
  
  // Check if we're on landing page - skip dashboard-specific code
  const isLandingPage = document.querySelector('[data-template="front-pages-no-customizer"]');
  
  if (isLandingPage) {
    // On landing page, only run safe parts
    if (window.Helpers && window.Helpers.setTheme && window.Helpers.getPreferredTheme) {
      try {
        window.Helpers.setTheme(window.Helpers.getPreferredTheme());
      } catch (e) {
        console.warn('Theme helper error:', e);
      }
    }
    return; // Skip the rest for landing page
  }
  
  // For dashboard pages, load the full front-main.js
  const script = document.createElement('script');
  script.src = '/front-pages/js/front-main.js';
  script.onerror = function() {
    console.warn('front-main.js failed to load');
  };
  document.body.appendChild(script);
})();
