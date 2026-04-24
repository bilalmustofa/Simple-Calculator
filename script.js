// selecting all buttons
const buttons = document.querySelectorAll("button");
const inputField = document.getElementById("inputField");
const history = document.getElementById("history");

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
  history.textContent = "0";
}

// Calculate the result
function calculateResult() {
  if(inputField.value === ""){
    inputField.value = "0";
  }
  history.textContent = inputField.value + " ="; // it show that you calculate
  inputField.value = eval(inputField.value); // eval solve mathematical problem through user input
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
  // prevent repeating zeros at first place
  if(inputField.value === "0" && buttonValue === '0') {
    return;
  }
  // prevent repeating double zeros at first place
  if(inputField.value === "" && buttonValue === '00') {
    return;
  }
  inputField.value += buttonValue;
}

// Clear Single Value
function delateSingleValue() {
  inputField.value = inputField.value.slice(0, -1);
}
