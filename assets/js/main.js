document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNavigation = document.querySelector('.main-navigation');
  
  if (menuToggle && mainNavigation) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mainNavigation.classList.toggle('active');
    });
  }
  
  // Smooth scrolling for anchor links
  const anchors = document.querySelectorAll('a[href^="#"]');
  for (const anchor of anchors) {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  }
});