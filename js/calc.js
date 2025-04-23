const output = document.querySelector(".output");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      output.textContent = ""; // CLS
    } else if (value === "=") {
      try {
        const result = eval(output.textContent);
        output.textContent = Math.round(result * 100) / 100; // round to 2 decimal places
      } catch (e) {
        if (value === "=") {
          try {
            const result = eval(output.textContent);
            output.textContent = Math.round(result * 100) / 100;
            output.classList.remove("error");
          } catch (e) {
            output.textContent = "Error";
            output.classList.add("error");
          }
        }
      }
    } else {
      if (output.classList.contains("error")) {
        output.classList.remove("error");
      }
      output.textContent += value; // add operand
    }
  });
});
