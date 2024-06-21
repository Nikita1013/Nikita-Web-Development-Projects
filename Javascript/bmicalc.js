var height = prompt("Emter height in m ");
var weight = prompt("Enter weight in kg ");

// var bmi =  weight / height ** 2;


// console.log("Your BMI is " + bmi);

function bmicalc(weight, height){
    var bmi =  Math.round(weight / (height * height));
    return bmi;
}

var bmi = bmicalc(weight, height);
console.log(bmi);
