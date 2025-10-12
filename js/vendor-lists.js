const vendorList = [
    {
        "serviceName": "Professional Cleaning Services",
        "companyName": "FDP Mold Remediation",
        "logoIcon": "fa-broom",
        "description": "We provide professional mold removal and cleaning services that restore safety and air quality to your home or business. Our certified experts handle everything from inspection to full remediation.",
        "website": "https://www.fdpmoldremediation.com",
        "image": "../assets/vendors/propery_cleaning.png",
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
        "image": "../assets/vendors/mold_inpection.png",
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
        "website": "",
        "image": "../assets/vendors/home_restoration.png",
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
        "image": "../assets/vendors/hvac.png",
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
        "image": "../assets/vendors/cleaning_exterior.png",
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
    const formVendorListContainer = document.querySelector(".vendor-service-list-form-input");

    if (!container || !formVendorListContainer) return;

    // Populate vendor cards
    vendorList.forEach((vendor, index) => {
        const reverseLayout = index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row";
        const aosEffect = index % 2 === 0 ? "fade-right" : "fade-left";

        const card = document.createElement("div");
        card.className = "bg-white rounded-2xl overflow-hidden border border-gray-100 mt-24";
        card.setAttribute("data-aos", aosEffect);
        card.setAttribute("data-aos-duration", "1000");
        card.setAttribute("data-aos-once", "true");

        card.innerHTML = `
            <div class="flex ${reverseLayout} flex-col lg:flex-row gap-0">
                <div class="relative h-[300px] lg:h-[500px] bg-gray-900 w-full lg:w-2/5 flex-shrink-0">
                    <img src="${vendor.image}" alt="${vendor.serviceName}" class="w-full h-full object-cover">
                </div>
                <div class="p-8 lg:p-10 flex flex-col w-full lg:w-3/5">
                    <div class="mb-6 flex items-center gap-x-6">
                        <div class="w-24 h-24 bg-gradient-to-br from-[#271033] to-[#3d1a4f] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                            <i class="fas ${vendor.logoIcon} text-white text-3xl"></i>
                        </div>
                        <div>
                            <h2 class="font-heading font-bold text-3xl text-[#271033] mb-2">${vendor.serviceName}</h2>
                            <h2 class="font-heading font-bold text-xl text-[#169c64]">${vendor.companyName}</h2>
                        </div>
                    </div>
                    <div class="flex-grow">
                        <p class="text-gray-700 text-lg leading-relaxed mb-6">${vendor.description}</p>
                        <p class="mb-4">
                                ${vendor.website ? `
                                    <p class="mb-4">
                                        <a href="${vendor.website}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-green-600 hover:underline font-semibold">
                                        <i class="fas fa-globe mr-2"></i>${vendor.website.replace(/^https?:\/\//, "")}
                                        </a>
                                    </p>
                                    ` : ""}
                        </p>
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
                    <div class="mt-auto pt-6">
                        <button data-service="${vendor.serviceName}" class="request-vendor-btn w-[400px] bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                            <i class="fas fa-handshake mr-2"></i> Request This Vendor
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    // Populate vendor checkboxes in form
    formVendorListContainer.innerHTML = "";
    vendorList.forEach((vendor, index) => {
        const checkboxDiv = document.createElement("div");
        checkboxDiv.className = "checkbox-item flex items-center p-2 rounded";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `vendor_${index}`;
        checkbox.name = "vendors_needed[]";
        checkbox.value = vendor.serviceName;
        checkbox.className = "w-4 h-4 text-primary border-gray-300 rounded focus:ring-accent";

        const label = document.createElement("label");
        label.htmlFor = `vendor_${index}`;
        label.className = "ml-3 text-sm text-gray-700 cursor-pointer";
        label.innerHTML = vendor.serviceName;

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        formVendorListContainer.appendChild(checkboxDiv);
    });

    // Add click listeners to "Request This Vendor" buttons
    const requestButtons = document.querySelectorAll(".request-vendor-btn");
    requestButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const serviceName = btn.getAttribute("data-service");

            // Find the corresponding checkbox and check it
            const checkbox = Array.from(formVendorListContainer.querySelectorAll("input[type='checkbox']"))
                .find(input => input.value === serviceName);
            if (checkbox && !checkbox.checked) checkbox.checked = true;

            // Scroll to the form
            const form = document.getElementById("vendor-request-form");
            form.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // Refresh AOS to detect newly added elements
    if (AOS) AOS.refresh();
});
