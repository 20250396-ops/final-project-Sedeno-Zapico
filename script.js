const jobs = [
  {
    title: "House Cleaning",
    location: "Carmen, Cagayan de Oro",
    pay: 500,
    category: "Cleaning",
    description: "Discription: wiping dirty places",
  },
  {
    title: "Babysitter Needed",
    location: "Lapasan, Cagayan de Oro",
    pay: 400,
    category: "Babysitting",
    description: "Discription: experience with infant",
  },
  {
    title: "Garden Cleanup",
    location: "Bulua, Cagayan de Oro",
    pay: 350,
    category: "Gardening",
    description: "Discription: watering my plants.",
  },
  {
    title: "Gardening Services",
    location: "Manolo, Cagayan de Oro",
    pay: 350,
    category: "Gardening",
    description: "Discription: planting flowers in the backyard.",
  },
  {
    title: "Dry Cleaning Services",
    location: "Alae, Manolo Fortich",
    pay: 350,
    category: "Dry Cleaning",
    description:
      "Discription: Need help cleaning a 2-bedroom house. Sweeping, mopping, and washing dishes.",
  },
  {
    title: "Handy man for a pool",
    location: "Tankulan, Manolo Fortich",
    pay: 350,
    category: "Handy Man",
    description: "Discription: Need help fixing tiles on 100m pool.",
  },
];

const STORAGE_KEY = "alijob-my-jobs";

function saveMyJobs() {
  const mine = jobs.filter(function (job) {
    return job.mine;
  });
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mine));
  } catch (error) {
    console.error("Could not save jobs:", error);
  }
}

function loadMyJobs() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved)) {
      jobs.unshift(...saved);
    }
  } catch (error) {
    console.error("Could not load jobs:", error);
  }
}

loadMyJobs();

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
  card.addEventListener("click", function () {
    openJobPopup(job);
  });
  card.tabIndex = 0;
  card.setAttribute("role", "button");

  card.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openJobPopup(job);
    }
  });
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
const popupTakedown = document.getElementById("popup-takedown");
let currentJob = null;

function openJobPopup(job) {
  document.getElementById("popup-title").textContent = job.title;
  document.getElementById("popup-title").textContent = job.title;
  document.getElementById("popup-category").textContent =
  "Category: " + job.category;
  document.getElementById("popup-description").textContent = job.description;
  document.getElementById("popup-location").textContent =
    "Location: " + job.location;
  document.getElementById("popup-pay").textContent = "Pay: ₱" + job.pay;
    currentJob = job;
  popupTakedown.hidden = !job.mine;
  popup.showModal();
  popup.showModal();
}

popupClose.addEventListener("click", function () {
  popup.close();
});

const postForm = document.getElementById("post-form");
const postMessageEl = document.getElementById("post-message");

function validatePost() {
  const title = document.getElementById("post-title").value.trim();
  const category = document.getElementById("post-category").value;
  const place = document.getElementById("post-location").value.trim();
  const pay = document.getElementById("post-pay").value;
  const description = document.getElementById("post-description").value.trim();

  if (title === "") return "Please enter the title.";
  if (category === "") return "Please choose a category.";
  if (place === "") return "Please enter the location.";
  if (pay === "") return "Please enter the pay.";
  if (Number(pay) < 150) return "The pay must be at least ₱150.";
  if (description === "") return "Please enter the description.";
  return "";
}
postForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const problem = validatePost();
  if (problem !== "") {
    postMessageEl.textContent = problem;
    return;
  }

  const newJob = {
    title: document.getElementById("post-title").value.trim(),
    location: document.getElementById("post-location").value.trim(),
    pay: Number(document.getElementById("post-pay").value),
    category: document.getElementById("post-category").value,
    description: document.getElementById("post-description").value.trim(),
    description: document.getElementById("post-description").value.trim(),
    mine: true,
  };

    jobs.unshift(newJob);
  saveMyJobs();

  categoryFilter.value = "all";
  searchInput.value = "";
  showJobs(jobs);

  postForm.reset();
  postMessageEl.textContent = "Job posted! It is now the first card in the list.";
});

popupTakedown.addEventListener("click", function () {
  if (currentJob === null || !currentJob.mine) {
    return;
  }

  const sure = confirm(
    "Take down \"" + currentJob.title + "\"? This cannot be undone."
  );
  if (!sure) {
    return;
  }

    const index = jobs.indexOf(currentJob);
  if (index !== -1) {
    jobs.splice(index, 1);
  }
  saveMyJobs();

  currentJob = null;
  popup.close();
  applyFilters();
});