"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var enterNumber = confirm("Would you like to play a game?");

if (enterNumber){
    var yourNumber = prompt("Please, enter a number.");
        yourNumber = Number(yourNumber);
            if (isNaN(yourNumber)) {
                alert("That is not a number")
                }  else {
                    if (yourNumber % 2 === 0) {
                        alert("Your number is even")
                    } else {
                        alert("Your number is NOT EVEeeN.  Mmnnaaaa!")
                    }

                    alert("100 plus your number is: " + (yourNumber + 100));

                    if (yourNumber > 0) {
                        alert("Your number is Positive.");
                    } else if (yourNumber < 0) {
                        alert("Your Number is Negative.");
                    } else
                        alert("Your number is Zero.")
                    }
}

else {
    alert ("Kill Joy!")
}



/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

var aColor = prompt ("Do you like Blue, Red, or Cyan?");

function analyzeColor(aColor) {
    if (aColor === "blue") {
        alert ("Blue is the color of the sky");
    } else if (aColor === "red"){
        alert ("Strawberries are red");
    } else if (aColor === "cyan") {
        alert("I don't know anything about cyan");
    } else {
            alert ("I don't recognize that color");
        }
        return aColor;
    }

console.log(analyzeColor(aColor));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

function seeRandom(randomColor) {
    return randomColor;
}

console.log(seeRandom(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
var switchColor = randomColor;

var switchColor = prompt("Please, enter one of the following colors: 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'");

switch(switchColor){
    case "red":
        alert ("Red Rocks");
        break;
    case "orange":
        alert("Orange Oranges");
        break;
    case "yellow":
        alert("Amarillo by Morning");
        break;
    case "green":
        alert ("Mean Green Marine");
        break;
    case "blue":
        alert("Bluest Eyes in Texas");
        break;
    case "indigo":
        alert ("I don't have anything clever for Indigo...");
        break;
    case "violet":
        alert("Violet Fems?!  let's be honest... none of these are clever.");
        break;
    default:
        alert("Sorry, I don't recognize that color.");
        break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

var luckyNumber = prompt("what is your lucky number?(1-5)");
var purchaseAmount = prompt("How much is your bill?");

function calculateTotal(luckyNumber, purchaseAmount){
    if
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
