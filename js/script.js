/* ===============================
   NAVBAR TOGGLE (Mobile Menu)
================================ */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

/* ===============================
   THEME SWITCH (Dark / Light)
================================ */
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

// Load user’s saved theme on page load
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") toggleSwitch.checked = true;
}

/* ===============================
   FOOTER DATE
================================ */
const myDate = document.querySelector("#datee");
if (myDate) {
  const year = new Date().getFullYear();
  myDate.innerHTML = year;
}

/* ===============================
   PROJECT MODAL LOGIC
================================ */
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalGithub = document.getElementById("modalGithub");
const closeBtn = document.querySelector(".close-btn");

if (modal) {
  // Project Data Array
  const projects = [
    {
      title: "Library Management System",
      description:
        "A comprehensive C++ software that manages books, students, and transactions efficiently. It includes book issue, return, and fine calculation.",
      github: "https://github.com/PrathmeshMasule/LibraryManagementSystem",
    },
    {
      title: "Spotify Clone",
      description:
        "A responsive music streaming clone built using HTML, CSS, and JavaScript. It features playlists, a player UI, and a search bar for tracks.",
      github: "https://github.com/PrathmeshMasule/SpotifyClone",
    },
    {
      title: "SQL Hotel Management",
      description:
        "A SQL-based hotel management system to handle bookings, customers, and rooms. It demonstrates efficient database design and query optimization.",
      github: "https://github.com/PrathmeshMasule/SQLHotelManagement",
    },
  ];

  // Add event to "View" buttons
  document.querySelectorAll(".project-card .btn-primary").forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const project = projects[index];
      modalTitle.textContent = project.title;
      modalDescription.textContent = project.description;
      modalGithub.href = project.github;
      modal.style.display = "block";
    });
  });

  // Close Modal
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  // Close when clicking outside modal
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
