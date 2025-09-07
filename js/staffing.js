const staffingRoles = [
    {
        title: "Cleaners / Janitorial Staff",
        icon: "fas fa-broom",
        image: "assets/staffing/placeholder.png",
        shortDescription: "Move-in/out cleaning, turnover prep, daily upkeep and maintenance cleaning services.",
        longDescription: "Our cleaning and janitorial staff specialize in maintaining pristine environments for residential and commercial properties. From detailed move-in/move-out cleanings to ongoing daily upkeep, they ensure every space is hygienic, welcoming, and well-presented for residents and visitors."
    },
    {
        title: "Security & Fire Watch",
        icon: "fas fa-shield-alt",
        image: "assets/staffing/placeholder.png",
        shortDescription: "Certified staff to ensure compliance, resident safety, and emergency response protocols.",
        longDescription: "Our security and fire watch professionals are fully certified to safeguard communities and properties. They enforce compliance with safety regulations, provide vigilant monitoring, and respond quickly to emergencies, ensuring peace of mind for residents and property owners alike."
    },
    {
        title: "Concierge / Lobby Attendants",
        icon: "fas fa-concierge-bell",
        image: "assets/staffing/placeholder.png",
        shortDescription: "Front desk support, resident relations, guest services, and professional building representation.",
        longDescription: "Concierge and lobby attendants deliver exceptional front-desk services, acting as the first point of contact for residents and visitors. They handle guest relations, assist with inquiries, and represent the property with professionalism, enhancing overall resident satisfaction."
    },
    {
        title: "Leasing Agents",
        icon: "fas fa-handshake",
        image: "assets/staffing/placeholder.png",
        shortDescription: "Handle property tours, process applications, lease renewals, and resident communications.",
        longDescription: "Leasing agents manage the full tenant acquisition process — from conducting property tours and processing applications to managing lease renewals and handling communications. Their goal is to drive occupancy while providing excellent customer service."
    },
    {
        title: "Leasing Managers",
        icon: "fas fa-chart-line",
        image: "assets/staffing/placeholder.png",
        shortDescription: "Lead leasing operations, marketing campaigns, and team coordination for optimal occupancy.",
        longDescription: "Leasing managers oversee leasing strategies and ensure properties reach maximum occupancy. They coordinate leasing teams, design marketing campaigns, and analyze market data to optimize property performance and resident retention."
    },
    {
        title: "Assistant Property Managers",
        icon: "fas fa-user-tie",
        image: "assets/staffing/placeholder.png",
        shortDescription: "Support daily operations, onsite teams, administrative tasks, and resident relations.",
        longDescription: "Assistant property managers provide critical support to property managers by handling administrative duties, coordinating on-site teams, and ensuring smooth daily operations. They serve as a bridge between management and residents, fostering a well-organized community environment."
    },
    {
        title: "Property Managers",
        icon: "fas fa-building",
        image: "assets/staffing/placeholder.png",
        shortDescription: "Provide full-service community and site management, strategic planning, and operations oversight.",
        longDescription: "Property managers take charge of full-service operations for residential and commercial sites. They handle budgeting, vendor management, maintenance coordination, and long-term strategic planning, ensuring properties run efficiently and residents remain satisfied."
    },
    {
        title: "Transition / Lease-Up Teams",
        icon: "fas fa-users",
        image: "assets/staffing/placeholder.png",
        shortDescription: "Temporary teams to open, close, or stabilize properties during major transitions.",
        longDescription: "Our transition and lease-up teams specialize in managing critical property phases, such as openings, closures, or large-scale turnover. They bring the expertise and manpower needed to stabilize operations quickly and maintain tenant satisfaction during these pivotal times."
    },
    {
        title: "Maintenance Team Helpers",
        icon: "fas fa-tools",
        image: "assets/staffing/placeholder.png",
        shortDescription: "Assist with light maintenance, site support tasks, and general property upkeep (optional service).",
        longDescription: "Maintenance team helpers support core maintenance staff by performing light repairs, assisting with routine upkeep, and handling minor tasks around the property. Their role ensures properties remain safe, functional, and visually appealing without interruption."
    }
];


window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("roles-container");
    staffingRoles.forEach((role, i) => {
        const card = document.createElement("div");
        card.className =
            "bg-white rounded-xl p-6 shadow-lg border border-gray-100 cursor-pointer";
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-delay", 100 + i * 50);

        card.innerHTML = `
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
            <i class="${role.icon} text-primary text-xl"></i>
          </div>
          <h3 class="font-semibold text-lg text-primary">${role.title}</h3>
        </div>
        <p class="text-gray-600 text-sm">${role.shortDescription}</p>
      `;

        card.addEventListener("click", () => showModal(role));
        container.appendChild(card);
    });

    // Re-init AOS after dynamic render
    if (window.AOS) AOS.refresh();
});


function showModal(role) {
    document.getElementById("modalTitle").innerText = role.title;
    document.getElementById("modalIcon").className = role.icon + " text-3xl text-primary";
    document.getElementById("modalImage").src = role.image;
    document.getElementById("modalDescription").innerText = role.longDescription;

    const modal = document.getElementById("roleModal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeModal() {
    const modal = document.getElementById("roleModal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}

// Close on button click
document.getElementById("closeModal").addEventListener("click", closeModal);

// Close on backdrop click
document.getElementById("roleModal").addEventListener("click", (e) => {
    if (e.target.id === "roleModal") closeModal();
});

// Close on ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});