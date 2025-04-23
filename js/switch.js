const toggleButton = document.getElementById("toggle-switch");

function themeSwitcher() {
  document.body.classList.toggle("dark-mode");

  const output = document.querySelector(".output");

  if (document.body.classList.contains("dark-mode")) {
    output.classList.remove("light-mode");
    output.classList.add("dark-mode");
  } else {
    output.classList.remove("dark-mode");
    output.classList.add("light-mode");
  }
}

toggleButton.addEventListener("click", themeSwitcher);
