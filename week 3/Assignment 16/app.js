
let inString = prompt("Enter a string:");


let lowerString = inString.toLowerCase()
let vowels = "aeiou";

let vowelCount = 0;

for (let char of lowerString) {
    if (vowels.includes(char)) {
        vowelCount++;
    }
}


console.log("Number of vowels:", vowelCount);
