let array = [1, 2, 3, 4, 5, 12,122,1445,353.5,57,9,8,2,22,2222,222,222,22222,2222];

let evenNumbers = [];

for (let number of array) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
}

console.log("Even numbers:", evenNumbers);
