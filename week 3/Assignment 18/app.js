
let inString = prompt("Enter a string:");
let toCount = prompt("Enter a character to count:");


let count = 0;


for (let char of inString) {
    if (char === toCount) {
        count++;
    }
}

// Output the result
console.log("Occurrences of '" + toCount + "':", count);
