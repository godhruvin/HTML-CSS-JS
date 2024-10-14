let currentInput = "";
// let inputVal = document.getElementById("inpt").value;

// Append to the input section when the user has enter the button
const appendToInput = () => {
  let btnVal = document.querySelectorAll(
    ".button , .button-operator , .button-equals"
  );
  let clickButton = Array.from(btnVal).find(
    (button) => button === document.activeElement
  );
  currentInput += clickButton.value;

  document.getElementById("inpt").value  = currentInput;
};

// Evaluate the expression and display the output.
const evaluateExpression = () => {
  try {
    const result = eval(currentInput);
    document.getElementById("inpt").value = result;
    currentInput = result.toString();
  } catch {
    alert("Invalid expression");
  }
};
// Clear the Display or Input Section
const clearInput = () => {
  currentInput = "";
  document.getElementById("inpt").value = currentInput;
};


