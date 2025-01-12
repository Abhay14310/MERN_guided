for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
        continue;

    } else if (i % 5 === 0) {
        console.log("Buzz");
        continue;
    }
    console.log(i);
}
