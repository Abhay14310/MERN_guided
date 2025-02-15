<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiplication and Division</title>
</head>
<body>
    <h1>Multiplication and Division Calculator</h1>
    <label for="num1">Enter first number:</label>
    <input type="number" id="num1">
    <br><br>
    <label for="num2">Enter second number:</label>
    <input type="number" id="num2">
    <br><br>
    <button onclick="calculate()">Calculate</button>
    <p id="result"></p>

    <script>
        function calculate() {
            // Get the input values
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);

            // Check if inputs are valid numbers
            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById("result").textContent = "Please enter valid numbers.";
                return;
            }

            // Calculate multiplication
            const multiplication = num1 * num2;

            // Calculate division (check if num2 is not zero)
            let division;
            if (num2 !== 0) {
                division = num1 / num2;
            } else {
                division = "Cannot divide by zero!";
            }

            // Display the results
            document.getElementById("result").innerHTML = `
                Multiplication: ${multiplication} <br>
                Division: ${division}
            `;
        }
    </script>
</body>
</html>