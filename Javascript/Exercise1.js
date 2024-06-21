var names = ["Angela", "Jack", "Jenny", "Ruth" ,"Rose"];
function whosPaying(names){
    var noOfPeople = names.length;
    var randomPersonPosition =  Math.floor(Math.random() * noOfPeople);
    var randomPerson = names[randomPersonPosition]
   return  randomPerson + " is going to buy lunch today!";
}

whosPaying(names);