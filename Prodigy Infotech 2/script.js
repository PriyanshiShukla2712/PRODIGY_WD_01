// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // offset for fixed navbar
        behavior: "smooth"
      });
    }
  });
});

// Highlight active link while scrolling
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 100;

  document.querySelectorAll(".nav-links a").forEach(link => {
    let section = document.querySelector(link.getAttribute("href"));

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});