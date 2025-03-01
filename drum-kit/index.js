
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
let numDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        this.style.color = "white";
        
        //new Audio("assets/sounds/tom-1.mp3").play();
    });
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

