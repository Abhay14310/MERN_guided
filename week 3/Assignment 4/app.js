
let marks = parseFloat(prompt("Enter your marks:")); // Convert input to a number

//  grade based on the marks
let grade;
if (marks >= 90) {
    grade = "Grade A";
} else if (marks >= 75) {
    grade = "Grade B";
} else if (marks >= 50) {
    grade = "Grade C";
} else {
    grade = "Fail";
}


alert("Your grade is: " + grade);
