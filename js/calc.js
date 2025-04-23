const display = document.querySelector(".calc_display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      display.textContent = ""; // cls
    } else if (value === "=") {
      try {
        // calculate the expression and round it
        const result = eval(display.textContent);
        display.textContent = result;
      } catch (e) {
        display.textContent = "Error";
      }
    } else {
      display.textContent += value; // add opertator
    }
  });
});
