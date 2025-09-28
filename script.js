const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navbar = document.getElementById("navbar");


mobileMenuToggle.addEventListener("click", function () {
  this.classList.toggle("active");
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
    document.body.style.overflow = "";

    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

document.addEventListener("click", function (event) {
  const isClickInsideNav = navbar.contains(event.target);

  if (!isClickInsideNav && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
    document.body.style.overflow = "";
  }
});

let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    navMenu.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
    document.body.style.overflow = "";
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const sections = document.querySelectorAll("div[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);

window.addEventListener("scroll", function () {
  const section = document.querySelector("#tourist .kotak-kotak");
  const wrapper = document.querySelector(".cards");

  const rect = section.getBoundingClientRect();

  if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
    wrapper.classList.add("dark");
  } else {
    wrapper.classList.remove("dark"); 
  }
});