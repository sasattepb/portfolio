(function () {
  const dropdown = document.getElementById("portfolioDropdown");
  const button = dropdown ? dropdown.querySelector(".dropbtn") : null;

  if (dropdown && button) {
    button.addEventListener("click", function () {
      const isOpen = dropdown.classList.toggle("open");
      button.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
      }
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
