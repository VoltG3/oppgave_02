const toggleButton = document.getElementById("toggle-btn");

function themeSwitcher() {
  document.body.classList.toggle("dark-mode");
}

toggleButton.addEventListener("click", themeSwitcher);
