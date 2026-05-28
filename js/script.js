const burger = document.querySelector(".burger");

const mobileNav = document.querySelector(".mobile-nav");

const overlay = document.querySelector(".mobile-overlay");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");

  mobileNav.classList.toggle("active");

  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  burger.classList.remove("active");

  mobileNav.classList.remove("active");

  overlay.classList.remove("active");
});
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
