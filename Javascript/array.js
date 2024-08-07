var guestList = ["Jack", "Jennie","Riya","Misty","Carla","John","Mary", "Neil"];
// // length of array
// console.log(guestList.length);

// //includes()

var guestName = prompt("Enter your Name ");

if (guestList.includes(guestName)){
    alert("Welcome");
} else {
    alert("Sorry, Maybe next time");
}
// console.log(guestName);