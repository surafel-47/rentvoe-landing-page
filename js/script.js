  // Initialize AOS
  AOS.init({
      duration: 800,
      once: true,
      offset: 100
  });

  // Navbar scroll behavior
  let lastScrollTop = 0;
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop && scrollTop > 100) {
          navbar.classList.remove('navbar-visible');
          navbar.classList.add('navbar-hidden');
      } else {
          navbar.classList.remove('navbar-hidden');
          navbar.classList.add('navbar-visible');
      }
      
      lastScrollTop = scrollTop;
  });

  
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
  });


