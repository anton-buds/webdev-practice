
let buttonColours = ["red", "blue", "green", "yellow"]; 
let gamePattern = [];
let userClickedPattern = [];

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4 + 1);
    let randomChosenColor = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).on("click", function () {
        let sound = new Audio("assets/sounds/"+randomChosenColor+".mp3")
        $("#"+randomChosenColor).animate({opacity: 0.3}, 100).animate({opacity: 1}, 100);
        sound.play();
    });
}

function playSound(name){
    $("#"+randomChosenColor).on("click", function () {
        let sound = new Audio("assets/sounds/"+randomChosenColor+".mp3")
        $("#"+randomChosenColor).animate({opacity: 0.3}, 100).animate({opacity: 1}, 100);
        sound.play();
    });
}


//handler function
$(document).click(function (e) { 
    let userChosenColour = $(e.target).attr("id"); // get the id attribute of clicked element

    console.log(userChosenColour); // determine what is clicked in the document

    userClickedPattern.push(userChosenColour);//putting userChosenColour value to the end of the array.

    console.log(userClickedPattern); // check if values is pushed into the array
});



