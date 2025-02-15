function checkFor50(a, b) {
  // Check if either number is 50 or their sum is 50
  return a === 50 || b === 50 || a + b === 50;
}

// Test cases
console.log(checkFor50(50, 20)); // Output: true (one number is 50)
console.log(checkFor50(10, 40)); // Output: true (sum is 50)
console.log(checkFor50(25, 25)); // Output: true (sum is 50)
console.log(checkFor50(10, 20)); // Output: false (neither condition is met)
