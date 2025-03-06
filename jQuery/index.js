//$("h1").css("color", "blue") //css sets a property with the first parameter being the property and second being the value
//$("button.click").css("border", "none")
//$("body").addClass(className);

$("h1").addClass("margin-50 font-change") // adding of css class in a html element
// you can add classes by putting them in the same quotation mark and giving space between css class

// Removing of css class
//$("h1").removeClass("huge-title"); 

// Checking if element has the class of ("cssClass")
$("h1").hasClass("margin-50"); // should return a value of boolean 

// Changing the contents of an element using jQuery
//$("h1").text("Bye"); // First way of changing text 
//$("h1").text("Bye").removeClass("font-change"); // can add more jQuery commands into a single line
//$("h1").html("<em>Bye</em>"); // use .HTML instead if you want to use html tags inside the string you want to add
// since using .text includes the html tags as it is as STRING


//Adding or changing attributes using jQuery
//$("a").attr("href", "https://www.bing.com"); //This changes the href attribute to bing.com instead of directing to google.com

//console.log($("a").attr("href"));


//change text of h1 on key event
//$(document).keydown(function (e) { 
   // $("h1").text(e.key).css("color", "purple");
   
//});
$("h1 ").css("cursor","pointer");

$("h1").on("click", function () {
    $("h1").css("color", "blue");
});

$("button").on("click", function () {
    // $("h1").hide(); // hide element
    // $("h1").show(); // show element
    // $("h1").toggle(); // toggle hide and show


    // Use cases are in drop down menu
    // $("h1").fadeIn(); // Fade in, opacity from 0 to 100
    // $("h1").fadeOut(); // Fade out, opacity from 100 to 0
    // $("h1").fadeToggle(); // toggle between fade-in and fade-out

    //Animate
    // Animate uses css properties inside a curly brace
    //$("h1").animate({opacity: 0.5}); // only properties whereas their values are numeric

    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});