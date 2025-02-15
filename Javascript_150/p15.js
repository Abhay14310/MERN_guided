function differenceFrom13(number) {
    const difference = number - 13; // Calculate the difference

    if (number > 13) {
        return Math.abs(difference) * 2; // Return double the absolute difference
    } else {
        return difference; // Return the simple difference
    }
}

console.log(differenceFrom13(10));
console.log(differenceFrom13(13));
console.log(differenceFrom13(15));
console.log(differenceFrom13(20)); 
