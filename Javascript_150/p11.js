// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Hardcoded temperature values
const celsiusTemp = 60; // Example: 60°C
const fahrenheitTemp = 45; // Example: 45°F

// Convert Celsius to Fahrenheit
const fahrenheitResult = celsiusToFahrenheit(celsiusTemp);
console.log(`${celsiusTemp}°C is ${fahrenheitResult}°F`);

// Convert Fahrenheit to Celsius
const celsiusResult = fahrenheitToCelsius(fahrenheitTemp);
console.log(`${fahrenheitTemp}°F is ${celsiusResult}°C`);
