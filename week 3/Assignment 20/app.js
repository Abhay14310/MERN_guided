//abhay is a hero and hero
let inString = prompt("Enter a string:");
let toReplace = prompt("Enter the word to replace:");
let replace = prompt("Enter the replacement word:");


let updatedString = inString.split(toReplace).join(replace);


console.log("Updated string:", updatedString);
