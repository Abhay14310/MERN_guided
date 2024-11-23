
let number = parseInt(prompt("Enter a number:")); // Convert input to an integer


let table = "Multiplication Table for " + number + ":\n";

for (let i = 1; i <= 10; i++) {
  table += number + " x " + i + " = " + number * i + "\n";
}

alert(table);
