// Simple smooth scroll and active link logic
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".bottom-nav a");
  const current = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Highlight Active Page
  const links = document.querySelectorAll(".bottom-nav a");
  const current = window.location.pathname.split("/").pop();
  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });

  // Toggle Login/Register Forms
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (loginBtn && registerBtn && loginForm && registerForm) {
    loginBtn.addEventListener("click", () => {
      loginBtn.classList.add("active");
      registerBtn.classList.remove("active");
      loginForm.classList.remove("hidden");
      registerForm.classList.add("hidden");
    });

    registerBtn.addEventListener("click", () => {
      registerBtn.classList.add("active");
      loginBtn.classList.remove("active");
      registerForm.classList.remove("hidden");
      loginForm.classList.add("hidden");
    });
  }
});
// Employer Form Toggle
const empLoginBtn = document.getElementById("empLoginBtn");
const empRegisterBtn = document.getElementById("empRegisterBtn");
const empLoginForm = document.getElementById("empLoginForm");
const empRegisterForm = document.getElementById("empRegisterForm");

if (empLoginBtn && empRegisterBtn && empLoginForm && empRegisterForm) {
  empLoginBtn.addEventListener("click", () => {
    empLoginBtn.classList.add("active");
    empRegisterBtn.classList.remove("active");
    empLoginForm.classList.remove("hidden");
    empRegisterForm.classList.add("hidden");
  });

  empRegisterBtn.addEventListener("click", () => {
    empRegisterBtn.classList.add("active");
    empLoginBtn.classList.remove("active");
    empRegisterForm.classList.remove("hidden");
    empLoginForm.classList.add("hidden");
  });
}
// ---------------- Job Board Script -----------------
const jobs = [
  {
    title: "Home Tutor (Class 8–10)",
    category: "teaching",
    location: "Bhopal",
    description: "Looking for an experienced retired teacher to help students with Maths and Science.",
    contact: "9876543210"
  },
  {
    title: "Part-time Accountant",
    category: "finance",
    location: "Khurai",
    description: "Small business needs retired accountant to manage monthly bookkeeping.",
    contact: "9823001122"
  },
  {
    title: "Startup Mentor",
    category: "consulting",
    location: "Indore",
    description: "Startup founder seeking retired engineer or manager for weekly guidance.",
    contact: "9811008765"
  },
  {
    title: "Craft Trainer",
    category: "craft",
    location: "Sagar",
    description: "NGO project hiring retired artisans to teach handmade craft to women groups.",
    contact: "9876503344"
  }
];

function displayJobs(filteredJobs) {
  const jobList = document.getElementById("jobList");
  if (!jobList) return;
  jobList.innerHTML = "";
  filteredJobs.forEach(job => {
    const card = document.createElement("div");
    card.classList.add("job-card");
    card.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Location:</strong> ${job.location}</p>
      <p>${job.description}</p>
      <a class="apply-btn" href="https://wa.me/91${job.contact}" target="_blank">Apply via WhatsApp</a>
    `;
    jobList.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const jobList = document.getElementById("jobList");
  if (!jobList) return;

  // Display all jobs initially
  displayJobs(jobs);

  // Filter and search
  const searchInput = document.getElementById("searchInput");
  const filterSelect = document.getElementById("filterSelect");

  function filterJobs() {
    const searchValue = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;
    const filtered = jobs.filter(job => {
      const matchSearch = job.title.toLowerCase().includes(searchValue) || job.description.toLowerCase().includes(searchValue);
      const matchCategory = filterValue === "all" || job.category === filterValue;
      return matchSearch && matchCategory;
    });
    displayJobs(filtered);
  }

  searchInput.addEventListener("input", filterJobs);
  filterSelect.addEventListener("change", filterJobs);
});
// ---------------- Add Job Script -----------------
const addJobForm = document.getElementById("addJobForm");
const successMessage = document.getElementById("successMessage");

if (addJobForm) {
  addJobForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Hide form, show success message
    addJobForm.classList.add("hidden");
    successMessage.classList.remove("hidden");

    // Reset form (for next time)
    addJobForm.reset();
  });
}
// ---------------- Contact Form Script -----------------
const contactForm = document.getElementById("contactForm");
const contactSuccess = document.getElementById("contactSuccess");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    contactForm.classList.add("hidden");
    contactSuccess.classList.remove("hidden");
    contactForm.reset();
  });
}
// ---------------- Visual Enhancements ----------------

// Smooth scroll to top when page loads
window.scrollTo({ top: 0, behavior: "smooth" });

// Add subtle fade when navigating between pages
document.querySelectorAll(".bottom-nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    document.body.style.opacity = "0";
    setTimeout(() => {
      window.location = link.href;
    }, 200);
  });
});
// ---------- Premium Visual Polish ----------

// Fade-in animation for sections as user scrolls
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

document.querySelectorAll('main section, .form-container, .job-card, .story-card').forEach(el => {
  observer.observe(el);
});

// Apply visible animation class
const style = document.createElement('style');
style.textContent = `
.visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
  transition: all 0.7s ease;
}
`;
document.head.appendChild(style);
// ---------------- Dashboard Logic ----------------
const buyBtn = document.getElementById("buyBtn");
const skipBtn = document.getElementById("skipBtn");
const subscriptionBox = document.getElementById("subscriptionBox");
const jobRecommendations = document.getElementById("jobRecommendations");
const recommendedJobs = document.getElementById("recommendedJobs");

// Simulated user category (In real version, this comes from login data)
const userCategory = "teaching"; // Example: teaching, finance, consulting, craft

const jobData = [
  { title: "Maths Home Tutor", category: "teaching", location: "Bhopal", desc: "Teach students classes 8–10." },
  { title: "Science Tutor", category: "teaching", location: "Indore", desc: "Retired teacher needed for coaching." },
  { title: "Accountant Assistant", category: "finance", location: "Khurai", desc: "Help a small business with records." },
  { title: "Startup Mentor", category: "consulting", location: "Sagar", desc: "Advise young entrepreneurs weekly." },
  { title: "Handicraft Trainer", category: "craft", location: "Bina", desc: "Teach women’s group handmade skills." },
];

// Handle subscription buttons
if (buyBtn && skipBtn) {
  buyBtn.addEventListener("click", () => {
    alert("Thank you for purchasing the ₹29 Consultancy Plan!");
    subscriptionBox.classList.add("hidden");
    jobRecommendations.classList.remove("hidden");
    showRecommendedJobs(userCategory);
  });

  skipBtn.addEventListener("click", () => {
    subscriptionBox.classList.add("hidden");
    jobRecommendations.classList.remove("hidden");
    showRecommendedJobs(userCategory);
  });
}

// Display jobs matching user category
function showRecommendedJobs(category) {
  const filteredJobs = jobData.filter(j => j.category === category);
  recommendedJobs.innerHTML = filteredJobs.map(j => `
    <div class="job-card">
      <h3>${j.title}</h3>
      <p><b>Location:</b> ${j.location}</p>
      <p>${j.desc}</p>
      <a href="https://wa.me/919876543210" target="_blank" class="apply-btn">Apply via WhatsApp</a>
    </div>
  `).join("");
}
<script>
const employerForm = document.querySelector("form");
if (employerForm) {
  employerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("employerEmail").value.trim();
    const password = document.getElementById("employerPassword").value.trim();

    if (email === "employer@jobconnect.com" && password === "employer123") {
      alert("✅ Login successful! Redirecting to Employer Dashboard...");
      window.location.href = "employer-dashboard.html";
    } else {
      alert("❌ Invalid credentials. Please try again.");
    }
  });
}
</script>