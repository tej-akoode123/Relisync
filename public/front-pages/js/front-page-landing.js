/**
 * Main - Front Pages (Patched with null checks)
 */
'use strict';

(function () {
  const nav = document.querySelector('.layout-navbar'),
    heroAnimation = document.getElementById('hero-animation'),
    animationImg = document.querySelectorAll('.hero-dashboard-img'),
    animationElements = document.querySelectorAll('.hero-elements-img'),
    swiperLogos = document.getElementById('swiper-clients-logos'),
    swiperReviews = document.getElementById('swiper-reviews'),
    ReviewsPreviousBtn = document.getElementById('reviews-previous-btn'),
    ReviewsNextBtn = document.getElementById('reviews-next-btn'),
    ReviewsSliderPrev = document.querySelector('.swiper-button-prev'),
    ReviewsSliderNext = document.querySelector('.swiper-button-next'),
    priceDurationToggler = document.querySelector('.price-duration-toggler'),
    priceMonthlyList = [].slice.call(document.querySelectorAll('.price-monthly')),
    priceYearlyList = [].slice.call(document.querySelectorAll('.price-yearly'));

  // Hero
  const mediaQueryXL = '1200';
  const width = screen.width;
  if (width >= mediaQueryXL && heroAnimation && nav) {
    heroAnimation.addEventListener('mousemove', function parallax(e) {
      animationElements.forEach(layer => {
        layer.style.transform = 'translateZ(1rem)';
      });
      animationImg.forEach(layer => {
        let x = (window.innerWidth - e.pageX * 2) / 100;
        let y = (window.innerHeight - e.pageY * 2) / 100;
        layer.style.transform = `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1, 1, 1)`;
      });
    });
    nav.addEventListener('mousemove', function parallax(e) {
      animationElements.forEach(layer => {
        layer.style.transform = 'translateZ(1rem)';
      });
      animationImg.forEach(layer => {
        let x = (window.innerWidth - e.pageX * 2) / 100;
        let y = (window.innerHeight - e.pageY * 2) / 100;
        layer.style.transform = `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1, 1, 1)`;
      });
    });

    heroAnimation.addEventListener('mouseout', function () {
      animationElements.forEach(layer => {
        layer.style.transform = 'translateZ(0)';
      });
      animationImg.forEach(layer => {
        layer.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    });
  }

  // Reviews slider next and previous - with null checks
  // -----------------------------------
  if (ReviewsNextBtn && ReviewsSliderNext) {
    ReviewsNextBtn.addEventListener('click', function () {
      if (ReviewsSliderNext) {
        ReviewsSliderNext.click();
      }
    });
  }
  
  if (ReviewsPreviousBtn && ReviewsSliderPrev) {
    ReviewsPreviousBtn.addEventListener('click', function () {
      if (ReviewsSliderPrev) {
        ReviewsSliderPrev.click();
      }
    });
  }

  // Swiper Reviews
  // -----------------------------------
  if (swiperReviews && typeof Swiper !== 'undefined') {
    const swiperReviewsInit = new Swiper(swiperReviews, {
      slidesPerView: 1,
      spaceBetween: 20,
      grabCursor: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }

  // Swiper Logos
  // -----------------------------------
  if (swiperLogos && typeof Swiper !== 'undefined') {
    const swiperLogosInit = new Swiper(swiperLogos, {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      breakpoints: {
        576: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 20
        }
      }
    });
  }

  // Pricing toggle
  // -----------------------------------
  if (priceDurationToggler) {
    function togglePrice() {
      priceMonthlyList.forEach(function (el) {
        if (priceDurationToggler.checked) {
          el.classList.add('d-none');
        } else {
          el.classList.remove('d-none');
        }
      });
      priceYearlyList.forEach(function (el) {
        if (priceDurationToggler.checked) {
          el.classList.remove('d-none');
        } else {
          el.classList.add('d-none');
        }
      });
    }

    // Wait for DOMContentLoaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        togglePrice();
        priceDurationToggler.onchange = function () {
          togglePrice();
        };
      });
    } else {
      togglePrice();
      priceDurationToggler.onchange = function () {
        togglePrice();
      };
    }
  }
})();
