// Global variables for calculator
let firstInput = document.getElementById("first-number");
let secondInput = document.getElementById("second-number");
let output = document.getElementById("output");

// Addition function
function addition() {
    let firstNumber = Number(firstInput.value);
    let secondNumber = Number(secondInput.value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        displayError("Please enter valid numbers");
        return;
    }

    let result = firstNumber + secondNumber;
    displayResult(result);
}

// Subtraction function
function subtraction() {
    let firstNumber = Number(firstInput.value);
    let secondNumber = Number(secondInput.value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        displayError("Please enter valid numbers");
        return;
    }

    let result = firstNumber - secondNumber;
    displayResult(result);
}

// Multiplication function
function multiplication() {
    let firstNumber = Number(firstInput.value);
    let secondNumber = Number(secondInput.value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        displayError("Please enter valid numbers");
        return;
    }

    let result = firstNumber * secondNumber;
    displayResult(result);
}

// Division function
function division() {
    let firstNumber = Number(firstInput.value);
    let secondNumber = Number(secondInput.value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        displayError("Please enter valid numbers");
        return;
    }

    if (secondNumber === 0) {
        displayError("Cannot divide by zero");
        return;
    }

    let result = firstNumber / secondNumber;
    displayResult(result);
}

// Power function using for() loop (required by professor)
function power() {
    let base = Number(firstInput.value);
    let exponent = Number(secondInput.value);

    if (isNaN(base) || isNaN(exponent)) {
        displayError("Please enter valid numbers");
        return;
    }

    let result = 1;

    // Handle negative exponents
    if (exponent < 0) {
        for (let i = 0; i < Math.abs(exponent); i++) {
            result = result / base;
        }
    } else {
        // Handle positive exponents
        for (let i = 0; i < exponent; i++) {
            result = result * base;
        }
    }

    displayResult(result);
}

// Clear function
function clear() {
    firstInput.value = "";
    secondInput.value = "";
    output.innerHTML = "Ready for calculation";
    output.className = "output-display";
}

// Display result function with enhanced styling
function displayResult(result) {
    // Format the result for display
    let formattedResult = result;

    // Handle very large or very small numbers
    if (Math.abs(result) > 999999999) {
        formattedResult = result.toExponential(3);
    } else if (Math.abs(result) < 0.001 && result !== 0) {
        formattedResult = result.toExponential(3);
    } else {
        formattedResult = parseFloat(result.toFixed(8)).toString();
    }

    output.innerHTML = String(formattedResult);

    // Apply styling based on result
    if (result < 0) {
        output.className = "output-display negative";
    } else {
        output.className = "output-display";
    }
}

// Display error function
function displayError(message) {
    output.innerHTML = message;
    output.className = "output-display error";
}
