
//this is what anonymous function looks like
//Anonymous function is a function that does not have a name
//      document.querySelectorAll("button").addEventListener("click", handleClick);
//      function handleClick(){
//          alert("I got clicked!");
//      }


//Angela's code
//Usage of FOR LOOP
// Makes sense since you want to loop through all the buttons within the drum class
// .length is the length on how many buttons are there in the drum class
// .addEventListener is the event listener that listens to the click event

// Make a variable for the drum class to not make it too long

// Detecting Button Press
let numDrumButtons = document.querySelectorAll(".drum").length;

    for (let i = 0; i < numDrumButtons; i++){
        document.querySelectorAll(".drum")[i].addEventListener("click", function(){ 
        // create a container for this 
        // this here, if you used console.log shows the elements your are targeting, like for example here, the eventListener targets the buttons that has the class of drum
        // in this case, that is also the target

        let buttonInner = this.innerHTML;// checks where the character inside the html tags is equal to W        
       
        makeSound(buttonInner);
        buttonAnimation(buttonInner);
     });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function(event){ // this function inside a parameter is a CALL BACK FUNCTION
    makeSound(event.key);
    buttonAnimation(event.key);
});

// function that 
function makeSound(key){
    let keyPressed = key.toUpperCase(); // since our case has strings that are in UpperCase, I converted the key parameter first into UpperCased characters to be accepted and play a sound
    // but normally, you wouldn't need to do this

    switch (keyPressed) { // this is like if statements
        case "W": //class w
            let crash = new Audio("assets/sounds/crash.mp3");
            crash.play();
            break;
        case "A":
            let bass = new Audio("assets/sounds/kick-bass.mp3");
            bass.play();
            break;
        case "S":
            let snare = new Audio("assets/sounds/snare.mp3");
            snare.play();
            break;
        case "D":
            let tom1 = new Audio("assets/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "J":
            let tom2 = new Audio("assets/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "K":
            let tom3 = new Audio("assets/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "L":
            let tom4 = new Audio("assets/sounds/tom-4.mp3");
            tom4.play();
            break;
        default: // like else statement, good practice to include something in default
            console.log(keyPressed);
    }
}

// Animation
function buttonAnimation (keyPressed){

    let activeKey = document.querySelector("." + keyPressed);
    activeKey.classList.add("pressed");

    //setTimeout(function() {
    //    activeKey.classList.remove("pressed");
    //}, 200);

    // or make a function, not an anonymous function
    function revert(){
        activeKey.classList.remove("pressed");
    }
    setTimeout(revert, 200);
}



/**
 *      function handleClick(){
 *          alert("I got clicked!");
 *       }
 */


// Calculator Sample
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

// this is a higher order function
// a higher order function is a function that takes another function as an argument
//Example below, Calculator is the higher order function
// You can use debugger to see how the code works
//      debugger; (shift + enter)
//      Calculator(5, 5, add); (then add your function you want to debug)
function Calculator(num1, num2, operator){ 
    return operator(num1, num2);
}


