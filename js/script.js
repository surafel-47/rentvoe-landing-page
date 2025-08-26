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





  // Job listings data
const jobListings = [
  {
    title: "Property Manager",
    location: "Downtown District",
    type: "Full-time",
    description:
      "Lead property operations for luxury residential complex. Experience with tenant relations and maintenance coordination required.",
    salary: "$65,000 - $75,000",
  },
  {
    title: "Leasing Agent",
    location: "Midtown Area",
    type: "Part-time",
    description:
      "Conduct property tours, process applications, and assist with lease renewals. Weekend availability preferred.",
    salary: "$18 - $22/hour",
  },
  {
    title: "Concierge",
    location: "Luxury High-rise",
    type: "Full-time",
    description:
      "Provide exceptional front desk service in upscale residential building. Previous hospitality experience a plus.",
    salary: "$45,000 - $50,000",
  },
  {
    title: "Security Officer",
    location: "Commercial Complex",
    type: "Full-time",
    description: "Certified security professional needed for commercial property. Fire watch certification required.",
    salary: "$40,000 - $45,000",
  },
  {
    title: "Maintenance Assistant",
    location: "Multiple Locations",
    type: "Contract",
    description: "Support maintenance team with basic repairs and property upkeep. Tools and training provided.",
    salary: "$20 - $25/hour",
  },
  {
    title: "Assistant Property Manager",
    location: "Suburban Community",
    type: "Full-time",
    description: "Support property manager with daily operations, tenant communications, and administrative tasks.",
    salary: "$50,000 - $55,000",
  },
]


