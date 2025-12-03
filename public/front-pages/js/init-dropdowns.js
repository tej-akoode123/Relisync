// Initialize dropdown hover functionality after Bootstrap loads
(function() {
  'use strict';
  
  function initDropdowns() {
    // Initialize mega dropdowns
    if (typeof MegaDropdown !== 'undefined') {
      const megaDropdowns = document.querySelectorAll('.nav-link.mega-dropdown');
      megaDropdowns.forEach(function(element) {
        if (!element.hasAttribute('data-mega-dropdown-initialized')) {
          new MegaDropdown(element);
          element.setAttribute('data-mega-dropdown-initialized', 'true');
        }
      });
    }
    
    // For regular dropdowns with hover, use Bootstrap's dropdown with custom hover
    const hoverDropdowns = document.querySelectorAll('[data-bs-toggle="dropdown"][data-trigger="hover"]');
    hoverDropdowns.forEach(function(dropdown) {
      const menu = dropdown.nextElementSibling;
      if (!menu || !menu.classList.contains('dropdown-menu')) return;
      
      let timeout;
      
      dropdown.addEventListener('mouseenter', function() {
        clearTimeout(timeout);
        if (typeof bootstrap !== 'undefined' && bootstrap.Dropdown) {
          const bsDropdown = bootstrap.Dropdown.getOrCreateInstance(dropdown);
          bsDropdown.show();
        }
      });
      
      dropdown.addEventListener('mouseleave', function() {
        timeout = setTimeout(function() {
          if (typeof bootstrap !== 'undefined' && bootstrap.Dropdown) {
            const bsDropdown = bootstrap.Dropdown.getInstance(dropdown);
            if (bsDropdown) {
              bsDropdown.hide();
            }
          }
        }, 150);
      });
      
      if (menu) {
        menu.addEventListener('mouseenter', function() {
          clearTimeout(timeout);
        });
        
        menu.addEventListener('mouseleave', function() {
          timeout = setTimeout(function() {
            if (typeof bootstrap !== 'undefined' && bootstrap.Dropdown) {
              const bsDropdown = bootstrap.Dropdown.getInstance(dropdown);
              if (bsDropdown) {
                bsDropdown.hide();
              }
            }
          }, 150);
        });
      }
    });
  }
  
  // Wait for Bootstrap to be available
  if (typeof bootstrap !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initDropdowns);
    } else {
      initDropdowns();
    }
  } else {
    // Wait for Bootstrap to load
    const checkBootstrap = setInterval(function() {
      if (typeof bootstrap !== 'undefined') {
        clearInterval(checkBootstrap);
        initDropdowns();
      }
    }, 100);
    
    // Stop checking after 5 seconds
    setTimeout(function() {
      clearInterval(checkBootstrap);
    }, 5000);
  }
})();
