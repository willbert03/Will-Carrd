// Function to open the popup
function openPopup() {
  document.getElementById("portfolioPopup").style.display = "block";
}

// Function to close the popup
function closePopup() {
  document.getElementById("portfolioPopup").style.display = "none";
}

// Hides when press Escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePopup();
  }
});

// Hide when android back button pressed
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("popstate", function (event) {
    closePopup();
  });
});
