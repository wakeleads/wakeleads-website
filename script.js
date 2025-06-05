// This script only needs to enable smooth scrolling for in‐page nav links.
// (We also set scroll-behavior: smooth in CSS.)
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
  
    function onScroll() {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      navLinks.forEach((link) => {
        const section = document.querySelector(link.getAttribute("href"));
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  
    window.addEventListener("scroll", onScroll);
  });