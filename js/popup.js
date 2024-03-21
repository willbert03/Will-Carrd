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
    window.location.href = "#";
  }
});

// Initial check for URL hash and open the popup if it matches
document.addEventListener("DOMContentLoaded", function () {
  // Check if the URL hash matches '#popup'
  if (window.location.hash === "#portfolio") {
    openPopup();
  }

  // Hide when Android back button pressed
  document.addEventListener("backbutton", function () {
    window.location.href = "#";
  });
});

window.addEventListener("hashchange", function () {
  if (window.location.hash === "#portfolio") {
    openPopup();
  } else {
    closePopup();
    window.location.href = "#";
  }
});
