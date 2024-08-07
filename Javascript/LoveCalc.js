prompt("What is your name ?")
prompt("What is their name ?")

var loveScore = Math.random() * 100 ; 
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70){
    alert("Your Love Score is " + loveScore + "%. " + "Your love is like Coke and Mentos.")
} 
if(loveScore > 30 && loveScore <= 70){
    alert("Your Love Score is " + loveScore + "%");
}
if(loveScore <= 30){
    alert("Your Love Score is " + loveScore + "%" + "Your love is like oil and water.");
}



