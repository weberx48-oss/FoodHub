// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.textContent = navLinks.classList.contains("open") ? "✖" : "☰";
});

// ===== SCROLL REVEAL =====
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", revealSections);

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
}

// ===== INITIAL FADE-IN =====
document.addEventListener("DOMContentLoaded", () => {
  revealSections();
});

// Modal functionality
const orderBtn = document.querySelectorAll(".order-btn");
const modal = document.getElementById("orderModal");
const closeBtn = document.querySelector(".close-btn");

orderBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
