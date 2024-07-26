document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile");
  const body = document.querySelector("body");

  hamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
  hamburgerButton.addEventListener("click", () =>
    hamburgerButton.classList.toggle("active")
  );
  hamburgerButton.addEventListener("click", () =>
    body.classList.toggle("stop-scrolling")
  );
});