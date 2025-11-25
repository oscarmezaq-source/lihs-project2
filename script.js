// Run after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // ====== FOOTER YEAR (works on any page that has #year) ======
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ====== PROGRAM CARD FILTER (index.html only) ======
  const filterButtons = document.querySelectorAll(".filter-btn-group .btn");
  const programCards = document.querySelectorAll(".program-card-wrapper");

  if (filterButtons.length > 0 && programCards.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Change active button
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        programCards.forEach((card) => {
          const category = card.getAttribute("data-category");
          if (filter === "all" || category === filter) {
            card.classList.remove("d-none");
          } else {
            card.classList.add("d-none");
          }
        });
      });
    });
  }

  // ====== CONTACT FORM CONFIRMATION (contact.html only) ======
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      formStatus.textContent = "Thank you! Your message was received.";
      formStatus.classList.remove("text-danger");
      formStatus.classList.add("text-success");
      contactForm.reset();
    });
  }
});
