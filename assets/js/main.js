document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNavigation = document.querySelector('.main-navigation');
  const body = document.body;
  
  if (menuToggle && mainNavigation) {
    menuToggle.addEventListener('click', () => {
      const isActive = menuToggle.classList.contains('active');
      
      menuToggle.classList.toggle('active');
      mainNavigation.classList.toggle('active');
      body.classList.toggle('menu-open');
      
      // Handle accessibility
      menuToggle.setAttribute('aria-expanded', !isActive);
    });
    
    // Close menu when clicking on links
    const navLinks = mainNavigation.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mainNavigation.classList.remove('active');
        body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', false);
      });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNavigation.classList.contains('active')) {
        menuToggle.classList.remove('active');
        mainNavigation.classList.remove('active');
        body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', false);
      }
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