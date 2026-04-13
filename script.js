// selecting all buttons
const buttons = document.querySelectorAll("button");
const inputField = document.getElementById("inputField");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    const buttonValue = buttons[i].textContent;
    if (buttonValue === "AC") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else if (buttonValue === "DE") {
      delateSingleValue();
    } else {
      appendValue(buttonValue);
    }
  });
}

// Clear All in the display Field
function clearResult() {
  inputField.value = "";
}

// Calculate the result
function calculateResult() {
  inputField.value = eval(inputField.value); // eval solve any mathematical problem through user input
}

// Append The Number and operator in Input/ display Field
function appendValue(buttonValue) {
  let operators = ["+", "-", "*", "%", "/"];
  let lastChar = inputField.value.slice(-1);

  // avoid repeating operator
  if (operators.includes(buttonValue) && operators.includes(lastChar)) {
    inputField.value = inputField.value.slice(0, -1) + buttonValue;
    return;
  }

  // prevent starting with operator
  if (inputField.value === "" && operators.includes(buttonValue)) {
    return;
  }
  inputField.value += buttonValue;
}

// Clear Single Value
function delateSingleValue() {
  inputField.value = inputField.value.slice(0, -1);
}
