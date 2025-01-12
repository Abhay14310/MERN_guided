// let i = 10;
// while(i>=1){
//     console.log(i);
//     i--;
// }
function countdown() {
    let i = 10; // Start from 10
    const outputElement = document.getElementById("output");
    outputElement.textContent = ""; // Clear previous output

    while (i >= 1) {
        // Loop to count down from 10 to 1
        outputElement.textContent += i + "\n "; // Append numbers to the paragraph
        i--; // Decrement i
    }
}