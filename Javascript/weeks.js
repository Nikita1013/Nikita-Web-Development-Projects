// for user input
// var age =  console.log("Enter your age : ");

function lifeInWeeks(age){
    var yearsRemianing = 90 - age;
    var days = yearsRemianing * 365;
    var Weeks = yearsRemianing * 52;
    var months =  yearsRemianing * 12;

    console.log("You have " + days+ " days, "+ Weeks + "weeks, and "+ months + "months left.");
}

lifeInWeeks(22);