/* MULAI SELALU DARI PALING ATAS */
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function scrollToTopInstant() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

scrollToTopInstant();
window.addEventListener("load", scrollToTopInstant);

if (location.hash) {
  try {
    history.replaceState(null, "", location.pathname + location.search);
  } catch (e) {}
}

/* TEMA TERANG / GELAP */
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  root.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  root.classList.toggle("dark");
  localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
});

/* LANGIT BINTANG (mode hitam) */
const starsContainer = document.getElementById("stars");
const STAR_COUNT = 70;

for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement("span");
  star.className = "star" + (Math.random() > 0.85 ? " big" : "");
  star.style.left = (Math.random() * 100).toFixed(2) + "%";
  star.style.top = (Math.random() * 100).toFixed(2) + "%";
  star.style.setProperty("--d", (2 + Math.random() * 3).toFixed(2) + "s");
  star.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
  starsContainer.appendChild(star);
}

/* FOOTER TAHUN */
document.getElementById("year").textContent = new Date().getFullYear();

/* NAVBAR SCROLL */
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* MENU MOBILE */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

/* REVEAL ON SCROLL */
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

revealEls.forEach((el) => observer.observe(el));