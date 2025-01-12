function checkEvenOrOdd() {
    
    const userInput = document.getElementById("number").value;
    const number = parseInt(userInput, 10);

    
    // if (isNaN(number)) {
    //     document.getElementById("result").textContent =
    //         "Please enter a valid number.";
    //     return;
    // }

    
    if (number % 2 === 0) {
        document.getElementById("result").textContent = `${number} is even.`;
    } else {
        document.getElementById("result").textContent = `${number} is odd.`;
    }
}
