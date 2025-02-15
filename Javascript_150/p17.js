function differenceFrom19(number) {
  const difference = Math.abs(number - 19); // Calculate the absolute difference

  if (number > 19) {
    return difference * 3; // Return triple the absolute difference
  } else {
    return difference; // Return the absolute difference
  }
}

// Test cases
console.log(differenceFrom19(15)); // Output: 4 (|15 - 19| = 4)
console.log(differenceFrom19(19)); // Output: 0 (|19 - 19| = 0)
console.log(differenceFrom19(22)); // Output: 9 (|22 - 19| * 3 = 9)
console.log(differenceFrom19(25)); // Output: 18 (|25 - 19| * 3 = 18)
