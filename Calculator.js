let currentInput = '';
let operation = null;
let firstOperand = null;
let isScientificMode = false;

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperation(op) {
  if (currentInput === '') return;
  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput);
  } else if (operation) {
    firstOperand = calculate();
  }
  operation = op;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  firstOperand = null;
  operation = null;
  updateDisplay();
}

function calculate() {
  if (currentInput === '' || firstOperand === null) return;
  let secondOperand = parseFloat(currentInput);
  let result;
  switch (operation) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    default:
      return;
  }
  currentInput = result.toString();
  firstOperand = result;
  operation = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

function toggleMode() {
  isScientificMode = !isScientificMode;
  const modeButton = document.querySelector('button[onclick="toggleMode()"]');
  if (isScientificMode) {
    modeButton.textContent = 'Basic Mode';
    addScientificFunctions();
  } else {
    modeButton.textContent = 'Scientific Mode';
    removeScientificFunctions();
  }
}

function addScientificFunctions() {
  // Add scientific functions (like sine, cosine, etc.) to the calculator buttons.
}

function removeScientificFunctions() {
  // Remove scientific functions and revert the calculator to basic mode.
}
