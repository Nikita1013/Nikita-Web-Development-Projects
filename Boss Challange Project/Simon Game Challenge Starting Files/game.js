//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red","blue","green","yellow"];

//5. At the top of the game.js file, create a new empty array called gamePattern.
gamePattern =[];

userClickedPattern =[]

var level = 0;

var started = false;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level"+level);
        nextSequence();
        started=true;
    }
});

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    //4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.lenght-1);
});


function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(userClickedPattern.lenght === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else{
        //1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
        playSound("wrong");

        //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
        $("body").addClass("game-over");
        //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
        $("#level-title").text("Game Over, Press Any Key to Restart");
        
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        //2. Call startOver() if the user gets the sequence wrong.
        startOver();
    }

}

//1. Inside game.js create a new function called nextSequence()
function newSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level" + level);

    //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
    randomNumber = Math.floor(Math.random() * 4);

    //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
    var randomChosencolour = buttonColours[randomNumber];
    
    //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
    gamePattern.push(randomChosencolour);

    //1. Use jQuery to select the button with the same id as the randomChosenColour
    //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.

    $("#" + randomChosencolour).fadeIn(100),fadeOut(100).fadeIn(100);

    //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
    playSound(randomChosencolour);
}

function animatePress(currentColour){
    $("#"+ currentColour).addClass("pressed");
    setTimeout(function(){
    $("#"+ currentColour).removeClass("pressed");
    }, 100);
}

//2. Create a new function called playSound() that takes a single input parameter called name.
function playSound(name){
    //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


//1. Create a new function called startOver().
function startOver(){
    //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    level = 0;
    gamePattern=[];
    started = false;
}




