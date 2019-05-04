console.log("exercise3.js start");
// INSTRUCTIONS
// Write a function named isMonday that accepts a string
// as an argument and uses a switch statement to determine
// if that string is equal to Monday.


switch (isMonday().getDay()) {
  case 0: 
    getDay = "Sunday";
    break;
  case 1: 
    getDay = "Monday";
    break;
  case 2: 
    getDay = "Tuesday";
    break;
  case 3: 
    getDay = "Wednesday";
    break;
  case 4: 
    getDay = "Thursday";
    break;
  case 5:
    getDay = "Friday";
    break;
  case 6:
    getDay = "Saturday";
    break
}
if getDay = "Monday";
isMonday = "True";
}
if getDay != "Monday";
isMonday = "False";
}
    
///////////////////////////
// INSTRUCTOR FEEDBACK
//////////////////////////
// You're pretty close here, your missing the function declaration, similar to exercise 1.
// Line 7 could read
// function isMonday (day){
//
// Line 8 would need to be changed to 
// switch (day.getDay()) {
//
// Lines 31 and 34 are missing () and { for the if statements



























// VERIFICATION
// These statements verify that your code does what the instructions
// ask. Do not edit these lines.
console.log(isMonday('Monday')); //should return true
console.log(isMonday('Tuesday')); //should return false
console.log(isMonday('Wednesday')); //should return false
var date1 = new Date('April 1, 2019 03:24:00');
console.log(isMonday(date1.getDay())); //should return false
