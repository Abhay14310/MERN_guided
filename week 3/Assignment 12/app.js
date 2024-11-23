

let inString = prompt("Enter a string:");

let clString = inString.replace(/\s+/g, "").toLowerCase();


let revString = "";
for (let i = clString.length - 1; i >= 0; i--) {
    revString += clString[i];
}

// Check if the original cleaned string is equal to the reversed string
if (clString === revString) {
    // document.writeln("its a pali");
    alert("The string is a palindrome.");
} else {
    alert("The string is not a palindrome.");
    // document.write("its  not a pali");

}
