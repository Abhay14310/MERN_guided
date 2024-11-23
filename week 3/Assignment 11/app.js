
let numbers = [5, 3, 8, 1, 2];


let ascending = [...numbers]; 
for (let i = 0; i < ascending.length; i++) {
    for (let j = i + 1; j < ascending.length; j++) {
        if (ascending[i] > ascending[j]) {
            // Swap 
            let temp = ascending[i];
            ascending[i] = ascending[j];
            ascending[j] = temp;
        }
    }
}

// Sort in descending 
let descending = [...numbers]; 
for (let i = 0; i < descending.length; i++) {
    for (let j = i + 1; j < descending.length; j++) {
        if (descending[i] < descending[j]) {
            // Swap the elements
            let temp = descending[i];
            descending[i] = descending[j];
            descending[j] = temp;
        }
    }
}

// Display the results
console.log("Ascending order:" ,  ascending);
console.log("Descending order:", descending);
// document.writeln("Ascending order :" + ascending)
