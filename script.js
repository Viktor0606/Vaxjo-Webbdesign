document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile");

  hamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
  hamburgerButton.addEventListener("click", () =>
    hamburgerButton.classList.toggle("active")
  );
});
