// Initialize images visibility for landing page
(function() {
  'use strict';
  
  function initImages() {
    // Find all images with data-app-light-img and data-app-dark-img
    const themeImages = document.querySelectorAll('img[data-app-light-img][data-app-dark-img]');
    
    if (themeImages.length > 0) {
      // Get current theme
      const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
      
      themeImages.forEach(function(img) {
        // Make sure image is visible
        img.style.visibility = 'visible';
        img.style.display = 'block';
        
        // Set correct image source based on theme
        const lightImg = img.getAttribute('data-app-light-img');
        const darkImg = img.getAttribute('data-app-dark-img');
        
        if (currentTheme === 'dark' && darkImg) {
          img.src = '/front-pages/images/' + darkImg;
        } else if (lightImg) {
          img.src = '/front-pages/images/' + lightImg;
        }
      });
    }
    
    // Also ensure all regular images are visible
    const allImages = document.querySelectorAll('.hero-animation-img img, .animation-img');
    allImages.forEach(function(img) {
      if (img.style.visibility === 'hidden' || getComputedStyle(img).visibility === 'hidden') {
        img.style.visibility = 'visible';
        img.style.display = '';
      }
    });
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImages);
  } else {
    initImages();
  }
  
  // Also run after a short delay to ensure CSS is loaded
  setTimeout(initImages, 100);
  
  // Run when Helpers is available (if it exists)
  if (typeof window !== 'undefined') {
    const checkHelpers = setInterval(function() {
      if (window.Helpers && window.Helpers.switchImage) {
        clearInterval(checkHelpers);
        // Call switchImage to properly initialize images
        const theme = document.documentElement.getAttribute('data-bs-theme') || 'light';
        try {
          window.Helpers.switchImage(theme);
        } catch (e) {
          console.warn('switchImage error:', e);
          // Fallback: just make images visible
          initImages();
        }
      }
    }, 100);
    
    // Stop checking after 2 seconds
    setTimeout(function() {
      clearInterval(checkHelpers);
      // Final fallback
      initImages();
    }, 2000);
  }
})();
