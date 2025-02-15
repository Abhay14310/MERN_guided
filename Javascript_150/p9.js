// Get the current date
const today = new Date();

// Get the current year
const currentYear = today.getFullYear();

// Set the date for Christmas (December 25th of the current year)
const christmas = new Date(currentYear, 11, 25); // Note: Months are 0-indexed (11 = December)

// If Christmas has already passed this year, set it to next year
if (today > christmas) {
  christmas.setFullYear(currentYear + 1);
}

// Calculate the difference in time (in milliseconds)
const timeDifference = christmas - today;

// Convert the time difference from milliseconds to days
const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

// Display the result
console.log(`There are ${daysLeft} days left until Christmas!`);
