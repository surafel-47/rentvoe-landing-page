const vendorList = [
    {
        "serviceName": "Professional Cleaning Services",
        "companyName": "FDP Mold Remediation",
        "logoIcon": "fa-broom",
        "description": "We provide professional mold removal and cleaning services that restore safety and air quality to your home or business. Our certified experts handle everything from inspection to full remediation.",
        "website": "https://www.fdpmoldremediation.com",
        "image": "../assets/1.jpg",
        "services": [
            "Mold Inspection & Testing",
            "Mold Remediation",
            "Water Damage Cleanup",
            "Air Duct Cleaning",
            "Dehumidification",
            "Odor Removal"
        ]
    },
    {
        "serviceName": "Mold Testing & Inspection",
        "companyName": "O2 Mold Testing",
        "logoIcon": "fa-vial-circle-check",
        "description": "We specialize in accurate, fast, and affordable mold testing for residential and commercial properties. Get peace of mind with our certified lab results and expert recommendations.",
        "website": "https://www.o2moldtesting.com",
        "image": "../assets/1.jpg",
        "services": [
            "Mold Air Sampling",
            "Surface Testing",
            "Moisture Mapping",
            "Indoor Air Quality Reports",
            "Post-Remediation Verification",
            "Consultation & Prevention Advice"
        ]
    },
    {
        "serviceName": "Home Restoration Services",
        "companyName": "Elite Restoration Pros",
        "logoIcon": "fa-house-crack",
        "description": "Our team handles water, fire, and storm damage restoration with professionalism and speed. We bring your property back to life while managing the entire insurance process.",
        "website": "https://www.eliterestorationpros.com",
        "image": "../assets/1.jpg",
        "services": [
            "Water Damage Repair",
            "Fire Damage Cleanup",
            "Smoke Odor Removal",
            "Structural Drying",
            "Mold Prevention",
            "Full Restoration"
        ]
    },
    {
        "serviceName": "HVAC & Air Quality",
        "companyName": "FreshFlow Air Systems",
        "logoIcon": "fa-fan",
        "description": "We provide complete air duct cleaning and HVAC maintenance to ensure your indoor air stays clean, healthy, and energy-efficient all year round.",
        "website": "https://www.freshflowairsystems.com",
        "image": "../assets/1.jpg",
        "services": [
            "Air Duct Cleaning",
            "Dryer Vent Cleaning",
            "Filter Replacement",
            "System Sanitization",
            "Air Quality Testing",
            "Maintenance Plans"
        ]
    },
    {
        "serviceName": "Exterior Cleaning",
        "companyName": "ShinePro Power Washing",
        "logoIcon": "fa-water",
        "description": "We keep your property’s exterior spotless with powerful yet eco-friendly washing solutions. From driveways to decks, we remove grime without damaging surfaces.",
        "website": "https://www.shinepropowerwash.com",
        "image": "../assets/1.jpg",
        "services": [
            "Driveway Pressure Washing",
            "House Siding Cleaning",
            "Deck & Patio Wash",
            "Roof Soft Washing",
            "Gutter Brightening",
            "Fence Cleaning"
        ]
    }
]


document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".vendor-cards-section");
    if (!container) return;

    vendorList.forEach((vendor, index) => {
        // Determine layout: odd → image left, even → image right
        const reverseLayout = index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row";

        // Optional: alternate animation direction based on index
        const aosEffect = index % 2 === 0 ? "fade-right" : "fade-left";

        const card = document.createElement("div");
        card.className = "bg-white rounded-2xl overflow-hidden border border-gray-100 mt-24";

        // Add AOS attributes directly to the main card div
        card.setAttribute("data-aos", aosEffect);
        card.setAttribute("data-aos-duration", "1000"); // animation duration in ms
        card.setAttribute("data-aos-once", "true");     // animate only once

        card.innerHTML = `
            <div class="flex ${reverseLayout} flex-col lg:flex-row gap-0">
                <!-- Image Section -->
                <div class="relative h-[300px] lg:h-[500px] bg-gray-900 w-full lg:w-2/5 flex-shrink-0">
                    <img src="${vendor.image}" alt="${vendor.serviceName}" class="w-full h-full object-cover">
                </div>

                <!-- Right Side - Details -->
                <div class="p-8 lg:p-10 flex flex-col w-full lg:w-3/5">
                    <!-- Header -->
                    <div class="mb-6 flex items-center gap-x-6">
                        <div class="w-24 h-24 bg-gradient-to-br from-[#271033] to-[#3d1a4f] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                            <i class="fas ${vendor.logoIcon} text-white text-3xl"></i>
                        </div>
                        <div>
                            <h2 class="font-heading font-bold text-3xl text-[#271033] mb-2">${vendor.serviceName}</h2>
                            <h2 class="font-heading font-bold text-xl text-[#169c64]">${vendor.companyName}</h2>
                        </div>
                    </div>

                    <!-- Description -->
                    <div class="flex-grow">
                        <p class="text-gray-700 text-lg leading-relaxed mb-6">${vendor.description}</p>

                        <!-- Website -->
                        <p class="mb-4">
                            <a href="${vendor.website}" target="_blank" rel="noopener noreferrer"
                               class="inline-flex items-center text-green-600 hover:underline font-semibold">
                                <i class="fas fa-globe mr-2"></i>
                                ${vendor.website.replace(/^https?:\/\//, "")}
                            </a>
                        </p>

                        <!-- Services List -->
                        <div class="mb-6">
                            <h3 class="font-semibold text-lg text-[#271033] mb-3">Services Include:</h3>
                            <div class="grid md:grid-cols-2 gap-x-6 gap-y-2">
                                ${vendor.services.map(service => `
                                    <div class="flex items-start">
                                        <i class="fas fa-check text-green-600 mt-1 mr-2 text-sm"></i>
                                        <span class="text-gray-700 text-sm">${service}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <!-- Request Button -->
                    <div class="mt-auto pt-6">
                        <button class="w-[400px] bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                            <i class="fas fa-handshake mr-2"></i>
                            Request This Vendor
                        </button>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });

    // Refresh AOS to detect newly added elements
    if (AOS) AOS.refresh();
});








document.addEventListener("DOMContentLoaded", () => {
    const formVendorListContainer = document.querySelector(".vendor-service-list-form-input");
    if (!formVendorListContainer) return;

    // Clear existing checkboxes if any
    formVendorListContainer.innerHTML = "";

    vendorList.forEach((vendor, index) => {
        // Create a checkbox wrapper div
        const checkboxDiv = document.createElement("div");
        checkboxDiv.className = "checkbox-item flex items-center p-2 rounded";

        // Create the checkbox input
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `vendor_${index}`;
        checkbox.name = "vendors_needed[]";
        checkbox.value = vendor.serviceName;
        checkbox.className = "w-4 h-4 text-primary border-gray-300 rounded focus:ring-accent";

        // Create the label
        const label = document.createElement("label");
        label.htmlFor = `vendor_${index}`;
        label.className = "ml-3 text-sm text-gray-700 cursor-pointer";
        label.innerHTML = vendor.serviceName;

        // Append input and label to wrapper div
        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);

        // Append the checkbox div to the container
        formVendorListContainer.appendChild(checkboxDiv);
    });
});