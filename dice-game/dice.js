
function playDice(){
    // Math.random() generates a random number between 0 and 1
    // Math.floor() rounds down the number to the nearest whole number
    // Math.random() * 6 generates a random number between 0 and 5
    // Math.random() * 6 + 1 generates a random number between 1 and 6
    // The output of this is a whole number between 1 and 6
    let randomNumber1 = Math.floor(Math.random() * 6)+ 1;
    let randomNumber2 = Math.floor(Math.random() * 6)+ 1;
    console.log(randomNumber1);
    console.log(randomNumber2);

    // randomImage variables stores the image path and the random number generated
    // is the number of the dice image that will be displayed
    // Make sure that the file name of the images are dice1.png and so on.
    // The output of this is a string that leads to the image path
    // Example: images/dice + randomNumber1 + .png = images/dice1.png
    let randomImage1 = "images/" + "dice" + randomNumber1 + ".png";
    let randomImage2 = "images/"   + "dice" + randomNumber2 + ".png";

    //This DOM manipulation changes the src attribute of the img tag
    //The src attribute is the path of the image that will be displayed
    //The randomImage variables are the paths of the images
    //The output of this is the display of the dice images
    //Make sure that you have a container for this img tag
    //Example: <div><img class="img1" src="images/dice1.png"></div>
    document.querySelector(".img1").setAttribute("src", randomImage1);
    document.querySelector(".img2").setAttribute("src", randomImage2);


    //This condition checks if the random number of the dice of player 1 is greater than the random number of the dice of player 2 and vice versa
    if(randomNumber1 > randomNumber2){
        document.querySelecter("h1").innerHTML = "Player 1 Wins!";
    }
    else if(randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";
    }
}