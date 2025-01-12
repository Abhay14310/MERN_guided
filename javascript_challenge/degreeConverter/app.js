// // quesion 8  celcius to farenheight   c  to f formula is n * 1.8 + 32 and vice versa is n - 32/ 1.8
// // quesion 8  celcius to farenheight   c  to f formula is n * 1.8 + 32 and vice versa is n - 32/ 1.8
// function celciusToFarenheit(n) {
//   return n * 1.8 + 32;
// }
// // let degree = celciusToFarenheit( parseFloat(20.8989));
// function farenToCelcius(n){
//     return (n - 32)/1.8;
// }
// // console.log(degree);
//  let input =prompt("what you want to change (FOR CELCIUS TO FARENHEIT PRESS F and for opposite PRESS C");
//  let cleanInput=input.toLowerCase();
// let output = 0;
//  let degree = prompt(parseFloat("Enter the degree of any scale: "));
// if(cleanInput=='c'){
//      output = farenToCelcius(degree);
// }else if(cleanInput=='f'){
//     output=celciusToFarenheit(degree);
// }else{
//     alert("ERROR : CHOOSE EITHER C OR F ");
// }
function celciusToFarenheit(n) {
    return n * 1.8 + 32;
}

function farenToCelcius(n) {
    return (n - 32) / 1.8;
}

let input = prompt(
    "What do you want to change? (FOR CELSIUS TO FAHRENHEIT PRESS F and for the opposite PRESS C): "
);
let cleanInput = input.toLowerCase();

if (cleanInput === "c" || cleanInput === "f") {
    let degree = parseFloat(prompt("Enter the degree of any scale: "));

    if (isNaN(degree)) {
        alert("ERROR: Please enter a valid number for degrees!");
    } else {
        let output;
        if (cleanInput === "c") {
            output = farenToCelcius(degree);
            alert(`${degree}° Fahrenheit is equal to ${output.toFixed(2)}° Celsius.`);
        } else if (cleanInput === "f") {
            output = celciusToFarenheit(degree);
            alert(`${degree}° Celsius is equal to ${output.toFixed(2)}° Fahrenheit.`);
        }
    }
} else {
    alert("ERROR: CHOOSE EITHER C OR F.");
}
