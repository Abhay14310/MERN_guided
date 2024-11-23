
let numbers = [];
for (let i = 0; i < 5; i++) {
    let number = parseFloat(prompt("Enter number " + (i + 1) + ":"));
    numbers.push(number);
}


let sum = 0;
for (let num of numbers) {
    sum += num; 
}

alert("Sum of numbers: " + sum);
