
let array1 = [1, 2, 3];
let array2 = [3, 4, 5];


let mergedArray = array1.concat(array2);


let uniqueArray = [];
for (let i = 0; i < mergedArray.length; i++) {
    if (!uniqueArray.includes(mergedArray[i])) {
        uniqueArray.push(mergedArray[i]);
    }
}


console.log("Merged array:", uniqueArray);