let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener(
  "scroll",
  function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop + 10) {
      header.style.transform = "translateY(-100%)";
    } else if (scrollTop < lastScrollTop - 10) {
      header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
  },
  { passive: true }
);

document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");
  const imgEl = document.querySelector(".moon-btn");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
  }

  themeToggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    imgEl.src = body.classList.contains("dark-theme")
      ? "images/sun.png"
      : "images/moon.png";
    if (body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
