function isOnePositiveOneNegative(a, b) {
    // Check if one number is positive and the other is negative
    return (a > 0 && b < 0) || (a < 0 && b > 0);
}

// Test cases
console.log(isOnePositiveOneNegative(5, -3)); // Output: true (5 is positive, -3 is negative)
console.log(isOnePositiveOneNegative(-10, 20)); // Output: true (-10 is negative, 20 is positive)
console.log(isOnePositiveOneNegative(7, 8)); // Output: false (both are positive)
console.log(isOnePositiveOneNegative(-4, -9)); // Output: false (both are negative)
console.log(isOnePositiveOneNegative(0, -5)); // Output: false (0 is neither positive nor negative)
console.log(isOnePositiveOneNegative(0, 5)); // Output: false (0 is neither positive nor negative)
