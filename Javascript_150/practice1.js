// Display Current Day and Time


let today = new Date();
let day = today.getDay();
let daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
];
console.log("Today is : " + daylist[day] + ".");
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let meridiem = hour >= 12 ? " PM " : " AM ";
hour = hour >= 12 ? hour - 12 : hour;
if (hour === 0 && meridiem === " PM ") {
    if (minute === 0 && second === 0) {
        hour = 12;
        meridiem = " Noon";
    } else {
        hour = 12;
        meridiem = " PM";
    }
}
if (hour === 0 && meridiem === " AM ") {
    if (minute === 0 && second === 0) {
        hour = 12;
        meridiem = " Midnight";
    } else {
        hour = 12;
        meridiem = " AM";
    }
}
console.log(
    "Current Time : " + hour + meridiem + " : " + minute + " : " + second
);
