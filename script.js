const jobs = [
  {
    title: "House Cleaning",
    location: "Carmen, Cagayan de Oro",
    pay: 500,
    category: "Cleaning",
    description: "wiping dirty places",
  },
  {
    title: "Babysitter Needed",
    location: "Lapasan, Cagayan de Oro",
    pay: 400,
    category: "Babysitting",
    description: "experience with infant",
  },
  {
    title: "Garden Cleanup",
    location: "Bulua, Cagayan de Oro",
    pay: 350,
    category: "Gardening",
    description: "watering my plants.",
  },
  {
    title: "Gardening Services",
    location: "Manolo, Cagayan de Oro",
    pay: 350,
    category: "Gardening",
    description: "planting flowers in the backyard.",
  },
  {
    title: "Dry Cleaning Services",
    location: "Alae, Manolo Fortich",
    pay: 350,
    category: "Dry Cleaning",
    description:
      "Need help cleaning a 2-bedroom house. Sweeping, mopping, and washing dishes.",
  },
];

function createJobCard(job) {
  const card = document.createElement("article");
  card.className = "job-card";

  const titleEl = document.createElement("h3");
  titleEl.className = "job-title";
  titleEl.textContent = job.title;

  const locationEl = document.createElement("p");
  locationEl.className = "job-location";
  locationEl.textContent = "Location: " + job.location;

  const payEl = document.createElement("p");
  payEl.className = "job-pay";
  payEl.textContent = "Pay: ₱" + job.pay;

  const categoryEl = document.createElement("p");
  categoryEl.className = "job-category";
  categoryEl.textContent = "Category: " + job.category;

  const descriptionEl = document.createElement("p");
  descriptionEl.className = "description";
  descriptionEl.textContent = "description: " + job.description;

  card.append(titleEl, locationEl, payEl, categoryEl);
  return card;
}

console.log(jobs);
const jobGrid = document.querySelector(".job-grid");
function showJobs(list) {
  jobGrid.innerHTML = "";

  if (list.length === 0) {
    const message = document.createElement("p");
    message.className = "no-results";
    message.textContent = "No jobs found.";
    jobGrid.append(message);
    return;
  }

  list.forEach(function (job) {
    jobGrid.append(createJobCard(job));
  });
}

showJobs(jobs);
const categoryFilter = document.getElementById("category-filter");
const searchInput = document.getElementById("search-input");

function applyFilters() {
  const selected = categoryFilter.value;
  const keyword = searchInput.value.trim().toLowerCase();

  const result = jobs.filter(function (job) {
    const matchesCategory = selected === "all" || job.category === selected;
    const matchesKeyword =
      job.title.toLowerCase().includes(keyword) ||
      job.location.toLowerCase().includes(keyword);
    return matchesCategory && matchesKeyword;
  });

  showJobs(result);
}

categoryFilter.addEventListener("change", applyFilters);
searchInput.addEventListener("input", applyFilters);
const popup = document.getElementById("job-popup");
const popupClose = document.getElementById("popup-close");

function openJobPopup(job) {
  document.getElementById("popup-title").textContent = job.title;
  document.getElementById("popup-description").textContent = job.description;
  document.getElementById("popup-location").textContent =
    "Location: " + job.location;
  document.getElementById("popup-pay").textContent = "Pay: ₱" + job.pay;
  popup.showModal();
}

popupClose.addEventListener("click", function () {
  popup.close();
});
