var year = prompt("Enter the year : ");

function isLeap(year){

    if(year % 4 === 0){
        if(year % 100 === 0){
        if(year % 400 === 0){
        return "Leap Year";
    } else{
        return "Not Leap Year";
    }
    } else{
        return "Leap Year";
    }
    } else{
        return "Not Leap Year";
    }

}

isLeap(year);