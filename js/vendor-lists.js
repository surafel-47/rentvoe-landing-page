const serviceList = [
    {
        serviceName: "Maintenance & Facilities",
        subTitle: "Property upkeep and repair experts",
        logoIcon: "fa-wrench",
        description:
            "Comprehensive maintenance and facilities management services covering everything from general maintenance to specialized contractor services. We ensure your property runs smoothly with professional, certified experts.",
        website: "https://www.promaintsolutions.com",
        image: "../assets/vendors/home_restoration.png", // from Elite Restoration Pros (fits general maintenance)
        categories: [
            "General Maintenance",
            "Janitorial / Cleaning",
            "Landscaping & Irrigation",
            "Snow Removal / Groundskeeping",
            "Pest Control",
            "HVAC Service",
            "Plumbing Contractor",
            "Electrical Contractor",
            "Elevator Maintenance",
            "Fire Safety / Alarm",
            "Roofing Contractor",
        ],
    },
    {
        serviceName: "Utilities & Infrastructure",
        subTitle: "Power, water, and connectivity services",
        logoIcon: "fa-bolt",
        description:
            "Reliable utility and infrastructure management services including providers, internet, waste management, and drainage solutions. We handle all your essential utility needs with professional coordination.",
        website: "https://www.infraconnectservices.com",
        image: "../assets/vendors/hvac.png", // fits power, air, and infrastructure theme
        categories: [
            "Utility Providers",
            "Internet / Cable Providers",
            "Waste Management",
            "Stormwater / Drainage Service",
        ],
    },
    {
        serviceName: "Building Systems & Technology",
        subTitle: "Smart building integration specialists",
        logoIcon: "fa-microchip",
        description:
            "Advanced building systems and technology integration for modern properties. From access control to smart home solutions, we provide cutting-edge technology that enhances security and efficiency.",
        website: "https://www.smartbuildtech.com",
        image: "../assets/vendors/mold_inpection.png", // tech/equipment visual fits building systems
        categories: [
            "Access Control / Security",
            "CCTV Monitoring",
            "Smart Home / IoT Integrator",
            "Elevator & Lift Systems",
            "Lighting / Electrical Systems",
        ],
    },
    {
        serviceName: "Amenities & Resident Services",
        subTitle: "Comfort, recreation, and lifestyle support",
        logoIcon: "fa-spa",
        description:
            "Premium amenities and resident services that enhance quality of life. We manage everything from pool maintenance to fitness equipment and package systems for complete resident satisfaction.",
        website: "https://www.lifestyleamenities.com",
        image: "../assets/vendors/cleaning_exterior.png", // outdoor amenities / lifestyle vibe
        categories: [
            "Pool / Spa Maintenance",
            "Fitness Equipment Vendor",
            "BBQ / Outdoor Equipment Vendor",
            "Dog Park / Pet Wash Equipment",
            "Package Lockers / Mail Systems",
            "Laundry Vendor",
        ],
    },
    {
        serviceName: "Security & Access Control",
        subTitle: "Safety and entry management solutions",
        logoIcon: "fa-shield",
        description:
            "Comprehensive security and access control solutions protecting your property 24/7. Our trained professionals and advanced systems ensure maximum safety and controlled access for all residents.",
        website: "https://www.secureguardsystems.com",
        image: "../assets/vendors/propery_cleaning.png", // guard uniforms/clean visual suits secure services
        categories: [
            "Security Guards / Concierge",
            "Intercom & Access System Vendor",
            "Fire / Life Safety Systems",
        ],
    },
    {
        serviceName: "Software & Technology Vendors",
        subTitle: "Digital platforms for modern property ops",
        logoIcon: "fa-laptop",
        description:
            "Cutting-edge software and technology solutions for property management. Our integrated platforms streamline operations, maintenance tracking, and energy management for optimal efficiency.",
        website: "https://www.proptechinnovations.com",
        image: "../assets/vendors/mold_inpection.png", // reuse: tech-focused visual fits
        categories: [
            "Property Management Software",
            "Maintenance Management (CMMS)",
            "Access / Entry Apps",
            "Energy Management",
        ],
    },
];


document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".vendor-cards-section")
    const serviceSelect = document.getElementById("service_name")
    const categoriesContainer = document.getElementById("categories-container")
    const categoriesList = document.querySelector(".vendor-categories-list")

    if (!container) return

    // Populate vendor cards
    serviceList.forEach((service, index) => {
        const reverseLayout = index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
        const aosEffect = index % 2 === 0 ? "fade-right" : "fade-left"

        const card = document.createElement("div")
        card.className = "bg-white max-w-[70vw] mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl mt-24"
        card.setAttribute("data-aos", aosEffect)
        card.setAttribute("data-aos-duration", "1000")
        card.setAttribute("data-aos-once", "true")

        card.innerHTML = `
            <div class="flex ${reverseLayout} flex-col lg:flex-row gap-0">
                <div class="relative w-full lg:w-1/3 flex-shrink-0">
                    <img src="${service.image}" alt="${service.serviceName}" class="w-full h-full object-cover lg:h-full lg:min-h-full">
                </div>

                <div class="p-8 lg:p-10 flex flex-col w-full lg:w-2/3">
                    <div class="mb-6 flex items-center gap-x-6">
                        <div class="w-24 h-24 bg-gradient-to-br from-[#271033] to-[#3d1a4f] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                            <i class="fas ${service.logoIcon} text-white text-3xl"></i>
                        </div>
                        <div>
                            <h2 class="font-heading font-bold text-3xl text-[#271033] mb-2">${service.serviceName}</h2>
                            <h2 class="font-heading font-bold text-xl text-[#169c64]">${service.subTitle}</h2>
                        </div>
                    </div>
                    <div class="flex-grow">
                        <p class="text-gray-700 text-lg leading-relaxed mb-6">${service.description}</p>
                        <p class="mb-4">
                                ${service.website
                ? `
                                    <p class="mb-4">
                                        <a href="${service.website}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-green-600 hover:underline font-semibold">
                                        <i class="fas fa-globe mr-2"></i>${service.website.replace(/^https?:\/\//, "")}
                                        </a>
                                    </p>
                                    `
                : ""
            }
                        </p>
                        <div class="mb-6">
                            <h3 class="font-semibold text-lg text-[#271033] mb-3">Services Include:</h3>
                            <div class="grid md:grid-cols-2 gap-x-6 gap-y-2">
                                ${service.categories
                .map(
                    (category) => `
                                    <div class="flex items-start">
                                        <i class="fas fa-check text-green-600 mt-1 mr-2 text-sm"></i>
                                        <span class="text-gray-800 font-bold hover:underline text-[16px]">${category}</span>
                                    </div>
                                `,
                )
                .join("")}
                            </div>
                        </div>
                    </div>
                    <div class="mt-auto pt-6">
                        <button data-service="${service.serviceName}" class="request-vendor-btn w-[400px] bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                            <i class="fas fa-handshake mr-2"></i> Request This Service
                        </button>
                    </div>
                </div>
            </div>
        `
        container.appendChild(card)
    })

    if (serviceSelect) {
        serviceList.forEach((service) => {
            const option = document.createElement("option")
            option.value = service.serviceName
            option.textContent = service.serviceName
            serviceSelect.appendChild(option)
        })

        serviceSelect.addEventListener("change", (e) => {
            const selectedService = e.target.value
            categoriesList.innerHTML = ""

            if (selectedService) {
                const service = serviceList.find((s) => s.serviceName === selectedService)
                if (service) {
                    // Show categories container
                    categoriesContainer.classList.remove("hidden")

                    // Populate categories as checkboxes
                    service.categories.forEach((category, index) => {
                        const checkboxDiv = document.createElement("div")
                        checkboxDiv.className = "checkbox-item flex items-center p-2 rounded"

                        const checkbox = document.createElement("input")
                        checkbox.type = "checkbox"
                        checkbox.id = `category_${index}`
                        checkbox.name = "categories[]"
                        checkbox.value = category
                        checkbox.className = "w-4 h-4 text-primary border-gray-300 rounded focus:ring-accent"

                        const label = document.createElement("label")
                        label.htmlFor = `category_${index}`
                        label.className = "ml-3 text-sm text-gray-700 cursor-pointer"
                        label.innerHTML = category

                        checkboxDiv.appendChild(checkbox)
                        checkboxDiv.appendChild(label)
                        categoriesList.appendChild(checkboxDiv)
                    })
                }
            } else {
                // Hide categories container if no service selected
                categoriesContainer.classList.add("hidden")
            }
        })
    }

    const requestButtons = document.querySelectorAll(".request-vendor-btn")
    requestButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const serviceName = btn.getAttribute("data-service")

            // Set the service select to this service
            if (serviceSelect) {
                serviceSelect.value = serviceName
                serviceSelect.dispatchEvent(new Event("change"))

                // Add glow effect to service name field
                serviceSelect.classList.add("glow-effect")
                setTimeout(() => serviceSelect.classList.remove("glow-effect"), 3000)
            }

            // Add glow effect to categories container
            if (categoriesContainer && !categoriesContainer.classList.contains("hidden")) {
                categoriesContainer.classList.add("glow-effect")
                setTimeout(() => categoriesContainer.classList.remove("glow-effect"), 3000)
            }

            // Scroll to the form
            const form = document.getElementById("vendor-request-form")
            setTimeout(() => {
                form.scrollIntoView({ behavior: "smooth", block: "start" })
            }, 300)
        })
    })

    // Refresh AOS to detect newly added elements
    const AOS = window.AOS
    if (AOS) AOS.refresh()
})
