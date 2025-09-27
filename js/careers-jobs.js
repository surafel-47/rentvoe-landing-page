
const jobListings = [
  { title: "Property Manager", location: "Downtown District", type: "Full-time", description: "Lead property operations for luxury residential complex. Experience with tenant relations and maintenance coordination required.", salary: "$65,000 - $75,000" },
  { title: "Leasing Agent", location: "Midtown Area", type: "Part-time", description: "Conduct property tours, process applications, and assist with lease renewals. Weekend availability preferred.", salary: "$18 - $22/hour" },
  { title: "Concierge", location: "Luxury High-rise", type: "Full-time", description: "Provide exceptional front desk service in upscale residential building. Previous hospitality experience a plus.", salary: "$45,000 - $50,000" },
  { title: "Maintenance Technician", location: "Various Locations", type: "Full-time", description: "Handle routine maintenance and emergency repairs across multiple properties. HVAC and plumbing experience preferred.", salary: "$50,000 - $60,000" },
  { title: "Assistant Property Manager", location: "Suburban Complex", type: "Full-time", description: "Support property management operations including tenant communications, lease administration, and vendor coordination.", salary: "$45,000 - $55,000" },
  // add more jobs to see pagination
];



let currentPage = 1;
const itemsPerPage = 4;

function renderJobListings(filteredJobs) {
  const container = document.getElementById('job-listings');
  container.innerHTML = '';

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedJobs = filteredJobs.slice(start, end);

  paginatedJobs.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.className = 'job-card bg-white rounded-xl p-6 shadow-sm border border-gray-200';

    // Highlight search matches
    const search = document.getElementById('searchInput').value.trim();
    const regex = new RegExp(`(${escapeRegex(search)})`, 'gi');
    const highlightedTitle = search ? job.title.replace(regex, '<span class="bg-yellow-200">$1</span>') : job.title;
    const highlightedDesc = search ? job.description.replace(regex, '<span class="bg-yellow-200">$1</span>') : job.description;

    jobCard.innerHTML = `
      <div class="flex flex-col md:flex-row md:items-center md:justify-between">
        <div class="flex-1">
          <h3 class="font-heading font-semibold text-xl text-primary mb-2">${highlightedTitle}</h3>
          <div class="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
            <span><i class="fas fa-map-marker-alt mr-1 text-accent"></i>${job.location}</span>
            <span><i class="fas fa-clock mr-1 text-success"></i>${job.type}</span>
            <span><i class="fas fa-dollar-sign mr-1 text-warning"></i>${job.salary}</span>
          </div>
          <p class="text-gray-700 mb-4">${highlightedDesc}</p>
        </div>
        <div class="md:ml-6">
          <button onclick="applyForJob('${job.title}')" class="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all w-full md:w-auto">
            <i class="fas fa-paper-plane mr-2"></i>Apply Now
          </button>
        </div>
      </div>
    `;
    container.appendChild(jobCard);
  });

  renderPagination(filteredJobs.length);
}

function renderPagination(totalItems) {
  const pages = Math.ceil(totalItems / itemsPerPage);
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  for (let i = 1; i <= pages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.className = `px-3 py-1 rounded ${i === currentPage ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`;
    btn.addEventListener('click', () => {
      currentPage = i;
      filterAndRenderJobs();
    });
    pagination.appendChild(btn);
  }
}

// Escape regex special characters
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function filterAndRenderJobs() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const type = document.getElementById('typeFilter').value;

  const filtered = jobListings.filter(job => {
    return (job.title.toLowerCase().includes(search) || job.description.toLowerCase().includes(search)) &&
      (type === '' || job.type === type);
  });

  currentPage = Math.min(currentPage, Math.ceil(filtered.length / itemsPerPage)) || 1; // Fix page overflow
  renderJobListings(filtered);
}


// Function to populate the select
function populatePositionOptions() {
  const select = document.getElementById("position");
  if (!select) return;

  // Clear existing options except the first placeholder
  select.innerHTML = '<option value="">Select a position</option>';

  jobListings.forEach(job => {
    const option = document.createElement("option");
    option.value = job.title;
    option.textContent = job.title;
    select.appendChild(option);
  });
}


// Filters
document.getElementById('searchInput').addEventListener('input', filterAndRenderJobs);
document.getElementById('typeFilter').addEventListener('change', filterAndRenderJobs);

function applyForJob(jobTitle) {
  document.getElementById('position').value = jobTitle;
  document.getElementById('apply').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  renderJobListings(jobListings);
  populatePositionOptions();
});
