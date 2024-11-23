// Simple Calculator

let num1 = parseFloat(prompt("Enter the first number:")); // Convert input to a number
let num2 = parseFloat(prompt("Enter the second number:")); // Convert input to a number


let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;


alert(
  "Addition: " +
    addition +
    "\nSubtraction: " +
    subtraction +
    "\nMultiplication: " +
    multiplication +
    "\nDivision: " +
    division
);
