function isWithin20Of100Or400(number) {
  // Check if the number is within 20 of 100 or 400
  return Math.abs(100 - number) <= 20 || Math.abs(400 - number) <= 20;
}

// Test cases
console.log(isWithin20Of100Or400(90)); // Output: true (within 20 of 100)
console.log(isWithin20Of100Or400(110)); // Output: true (within 20 of 100)
console.log(isWithin20Of100Or400(390)); // Output: true (within 20 of 400)
console.log(isWithin20Of100Or400(410)); // Output: true (within 20 of 400)
console.log(isWithin20Of100Or400(50)); // Output: false (not within 20 of 100 or 400)
console.log(isWithin20Of100Or400(450)); // Output: false (not within 20 of 100 or 400)
