const numbers = [1, 2, 3, 4];

// Use reduce to find the sum of all numbers
const Sum = numbers.reduce(
    (sum, value) => sum + value, 0
);

console.log(Sum); 
