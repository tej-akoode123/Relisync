// Vanilla JS version of dropdown hover (no jQuery required)
(function() {
  'use strict';
  
  const SELECTOR = '[data-bs-toggle="dropdown"][data-trigger="hover"]';
  const TIMEOUT = 150;
  
  function openDropdown(element) {
    if (!element) return;
    
    // Clear any existing timeout
    if (element.dataset.ddTimeout) {
      clearTimeout(element.dataset.ddTimeout);
      delete element.dataset.ddTimeout;
    }
    
    // Open dropdown if not already open
    if (element.getAttribute('aria-expanded') !== 'true') {
      if (typeof bootstrap !== 'undefined' && bootstrap.Dropdown) {
        const bsDropdown = bootstrap.Dropdown.getOrCreateInstance(element);
        bsDropdown.show();
      }
    }
  }
  
  function closeDropdown(element) {
    if (!element) return;
    
    // Clear any existing timeout
    if (element.dataset.ddTimeout) {
      clearTimeout(element.dataset.ddTimeout);
    }
    
    // Set timeout to close
    const timeout = setTimeout(function() {
      if (element.dataset.ddTimeout) {
        clearTimeout(element.dataset.ddTimeout);
        delete element.dataset.ddTimeout;
      }
      
      if (element.getAttribute('aria-expanded') === 'true') {
        if (typeof bootstrap !== 'undefined' && bootstrap.Dropdown) {
          const bsDropdown = bootstrap.Dropdown.getInstance(element);
          if (bsDropdown) {
            bsDropdown.hide();
          }
        }
      }
    }, TIMEOUT);
    
    element.dataset.ddTimeout = timeout;
  }
  
  function init() {
    if (typeof bootstrap === 'undefined' || !bootstrap.Dropdown) {
      // Wait for Bootstrap
      setTimeout(init, 100);
      return;
    }
    
    const dropdowns = document.querySelectorAll(SELECTOR);
    
    dropdowns.forEach(function(toggle) {
      const menu = toggle.nextElementSibling;
      if (!menu || !menu.classList.contains('dropdown-menu')) return;
      
      // Check if position is static (don't handle hover for static dropdowns)
      const computedStyle = window.getComputedStyle(menu, null);
      if (computedStyle.getPropertyValue('position') === 'static') return;
      
      // Mouse enter on toggle
      toggle.addEventListener('mouseenter', function() {
        toggle.dataset.hovered = 'true';
        openDropdown(toggle);
      });
      
      // Mouse leave on toggle
      toggle.addEventListener('mouseleave', function() {
        toggle.dataset.hovered = 'false';
        closeDropdown(toggle);
      });
      
      // Mouse enter on menu
      menu.addEventListener('mouseenter', function() {
        openDropdown(toggle);
      });
      
      // Mouse leave on menu
      menu.addEventListener('mouseleave', function() {
        closeDropdown(toggle);
      });
      
      // Prevent hiding if hovered
      menu.addEventListener('hide.bs.dropdown', function(e) {
        if (toggle.dataset.hovered === 'true') {
          e.preventDefault();
        }
      });
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
