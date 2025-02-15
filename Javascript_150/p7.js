// function findYearsWithJan1Sunday(startYear, endYear) {
//     const yearsWithJan1Sunday = [];

//     for (let year = startYear; year <= endYear; year++) {
//         // Create a Date object for January 1st of the current year
//         const date = new Date(year, 0, 1); // Month is 0-based (0 = January)

//         // Check if January 1st is a Sunday (getDay() returns 0 for Sunday)
//         if (date.getDay() === 0) {
//             yearsWithJan1Sunday.push(year);
//         }
//     }

//     return yearsWithJan1Sunday;
// }

// // Define the range of years
// const startYear = 2014;
// const endYear = 2050;

// // Find the years
// const result = findYearsWithJan1Sunday(startYear, endYear);

// // Output the result
// console.log(
//     "Years between 2014 and 2050 where January 1st is a Sunday:"
// );
// console.log(result);



function jan1Sunday(startYear,endYear){
        const yearSunday=[];
        for(let year = startYear; year <=endYear;year++){
            const date = new Date(year,0,1);
            if(date.getDay()==0){
                yearSunday.push(year);
            }
        }
        return yearSunday;
}
const  startYear=2024;
const endYear = 2100;


const result =jan1Sunday(startYear,endYear);


console.log("Years between 2014 and 2050 where January 1st is a Sunday: ");
console.log(result);