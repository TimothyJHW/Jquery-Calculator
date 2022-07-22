// Jquery Calculator Morning Project 22/7/22
// Issues: only calculates two numbers at the moment, but this could be changed by using arrays instead of strings.
//


var displayedNumber = "";
var firstNumber = "";
var operator = ""
var result = 0;
var newNumber = false;

$(document).ready(function() {

$(".one").on("click", function() {
    checkDisplayedNumber();
    displayedNumber += "1";
    $(".display").text(displayedNumber);


})
$(".two").on("click", function() {
    displayedNumber += "2";
    $(".display").text(displayedNumber);

})
$(".three").on("click", function() {
    displayedNumber += "3";
    $(".display").text(displayedNumber);

})
$(".four").on("click", function() {
    displayedNumber += "4";
    $(".display").text(displayedNumber);

})
$(".five").on("click", function() {
    displayedNumber += "5";
    $(".display").text(displayedNumber);})

$(".six").on("click", function() {
    displayedNumber += "6";
    $(".display").text(displayedNumber);})

$(".seven").on("click", function() {
    displayedNumber += "7";
    $(".display").text(displayedNumber);})

$(".eight").on("click", function() {
    displayedNumber += "8";
    $(".display").text(displayedNumber);})

$(".nine").on("click", function() {
    displayedNumber += "9";
    $(".display").text(displayedNumber);})

$(".zero").on("click", function() {
    displayedNumber += "0";
    $(".display").text(displayedNumber);})

    $(".equals").on("click", function() {
        if(operator =="*"){
        result = parseFloat(firstNumber) * parseFloat(displayedNumber)}
        else if(operator =="+"){    
        result = parseFloat(firstNumber) + parseFloat(displayedNumber)}
        else if (operator == "-"){ 
        result = parseFloat(firstNumber) - parseFloat(displayedNumber)}
        else if (operator =="/"){
            result = parseFloat(firstNumber) / parseFloat(displayedNumber)
        }
        $(".display").text(result)
        firstNumber,displayedNumber = ""
        result = 0
    })


    // Checks to see if there is already a decimal point in the calculator

    $(".decimal").on("click",function() {
            if(!displayedNumber.includes(".")) {
                displayedNumber += "."
            $(".display").text(displayedNumber)}
        })
    
    $(".times").on("click", function() {
        operator +="*";
        firstNumber = displayedNumber;
        displayedNumber = "";
        $(".display").text("0");

    })
    $(".minus").on("click", function() {
        operator +="-";
        firstNumber = displayedNumber;
        displayedNumber = "";
        $(".display").text("0");

    })

    $(".plus").on("click", function() {
        operator +="+";
        firstNumber = displayedNumber;
        displayedNumber = "";
        $(".display").text("0");

    })
    $(".divideby").on("click", function() {
        operator +="/";
        firstNumber = displayedNumber;
        displayedNumber = "";
        $(".display").text("0");

    })

    $(".clear").on("click", function() {
        operator = "";
        displayedNumber = "";
        firstNumber = "";
        $(".display").text("0");
    })





})



function checkDisplayedNumber() {
    if (displayedNumber.length >11) {displayedNumber = ""

    }
}


