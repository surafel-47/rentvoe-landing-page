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

// Load job listings
function loadJobListings() {
  const jobContainer = document.getElementById("job-listings")

  jobListings.slice(0, 6).forEach((job) => {
    const jobCard = document.createElement("div")
    jobCard.className =
      "bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"

    jobCard.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="text-xl font-semibold text-primary mb-2">${job.title}</h3>
                    <div class="flex items-center text-gray-600 text-sm mb-2">
                        <i class="fas fa-map-marker-alt mr-2"></i>
                        ${job.location}
                    </div>
                    <span class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        ${job.type}
                    </span>
                </div>
                <div class="text-right">
                    <div class="text-lg font-semibold text-primary">${job.salary}</div>
                </div>
            </div>
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">${job.description}</p>
            <button class="w-full bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-light transition-colors" onclick="openContactForm('${job.title}')">
                Apply Now
            </button>
        `

    jobContainer.appendChild(jobCard)
  })
}

// Open contact form for job application
function openContactForm(jobTitle) {
  // Scroll to contact form
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" })

  // Pre-fill message with job title
  const messageField = document.querySelector("#contact textarea")
  if (messageField) {
    messageField.value = `I am interested in applying for the ${jobTitle} position.`
  }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Form submissions
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault()

    // Show success message (you can replace this with actual form submission logic)
    const button = this.querySelector('button[type="submit"]')
    const originalText = button.textContent

    button.textContent = "Sending..."
    button.disabled = true

    setTimeout(() => {
      button.textContent = "Message Sent!"
      button.style.backgroundColor = "#10B981"

      setTimeout(() => {
        button.textContent = originalText
        button.disabled = false
        button.style.backgroundColor = ""
        this.reset()
      }, 2000)
    }, 1000)
  })
})

// Mobile menu toggle
const mobileMenuButton = document.querySelector(".md\\:hidden button")
const mobileMenu = document.createElement("div")
mobileMenu.className = "md:hidden bg-white border-t border-gray-200 px-4 py-2 space-y-2"
mobileMenu.style.display = "none"

mobileMenu.innerHTML = `
    <a href="#home" class="block text-primary hover:text-primary-light px-3 py-2 text-sm font-medium">Home</a>
    <a href="#services" class="block text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">Services</a>
    <a href="#jobs" class="block text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">Jobs</a>
    <a href="#contact" class="block text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">Contact</a>
    <a href="about.html" class="block bg-primary text-white px-3 py-2 rounded-lg text-sm font-medium">About Us</a>
`

mobileMenuButton.parentNode.parentNode.appendChild(mobileMenu)

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.style.display = mobileMenu.style.display === "none" ? "block" : "none"
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".animate-float")

  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + index * 0.1
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadJobListings()
})

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe service cards for animation
document.addEventListener("DOMContentLoaded", () => {
  const serviceCards = document.querySelectorAll(".service-card")
  serviceCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })
})
