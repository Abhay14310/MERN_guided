// // let array = [1,2,3,4,5];

// // Input: Define the array and the value to search
// let array = [10, 20, 30, 40, 50];
// let valueToSearch = parseInt(prompt("Enter the value to search:"));

// // Initialize a variable to store the index
// let index = -1; // Default value if the value is not found

// // Search for the value in the array
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === valueToSearch) {
//         index = i; // Store the index of the found value
//         break; // Exit the loop once the value is found
//     }
// }

// // Output the result
// if (index !== -1) {
//     console.log("Index of " + valueToSearch + ": " + index);
// } else {
//     console.log("Value " + valueToSearch + " not found in the array.");
// }

let array = [10,20,30,40,50,60,70];

toSearch = parseInt(prompt("enter the number you want to search : "));
let index = -1;
for(let i = 0; i < array.length;i++){
    if(array[i]==toSearch){
        index=i;
        break;
    }
}
if(index!==-1){
    console.log("index of " + toSearch  + ":" + index);
}else{
    console.log("value that is " + toSearch + "not found in the array" );
}