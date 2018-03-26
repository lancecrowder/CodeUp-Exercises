Write a function named identity that defines one parameter and returns the argument it was called with.

var oneParameter = "Lance";

function identity(oneParameter) {
    return (oneParameter)
}

console.log(identity(oneParameter));

function identity(arg){
 return arg;
}

identity("123")

Write a function named isOdd that accepts a number and returns true if the passed number is odd, otherwise false

var myNumber = prompt("Please, enter a number.");

function isOdd(myNumber) {
    if (myNumber % 2 === 0){
        return false
    } else {
        return true
    }
}

alert("Your number is odd:  " + isOdd(myNumber));

Write a function named isEven that accepts a number and returns true if the passed number is even, false otherwise

var myNumber = prompt("Please, enter a number.");

function isEven(myNumber) {
    if (myNumber % 2 === 0){
        return true
    } else {
        return false
    }
}

alert("Your number is even:  " + isEven(myNumber));

Write a function named isPositive that returns true if the passed number is greater than 0

var myNumber = prompt("Please, enter a number.");

function isPositive(myNumber) {
    if (myNumber > 0){
        return true
    } else {
        return false
    }
}

alert("Your number is Positive:  " + isPositive(myNumber));

Write a function named decrement that accepts a number and returns the number minus 1

var myNumber = prompt("Please, enter a number.");

function decrement(myNumber) {
    return (--myNumber);
}

alert("Your number minus one is: " + decrement(myNumber));

Write a function named hasSpaces that accepts a string and returns true if the string contains any space characters

var aString = prompt("Please type a String.");

function hasSpaces(aString) {
    if (aString.indexOf(" ") === -1) {
        return false
    } else {
        return true
    }
}

alert("Your String has spaces: " + hasSpaces(aString));

Write a function named isFive that accepts a number and returns true if the number is equal to 5

var aNumber = prompt("Please, enter a number");


function isFive(aNumber) {
    if (Number(aNumber) === 5){
        return true
    } else{
        return false
    }
}

alert("Your number is 5: " + isFive(aNumber));

Write a function named square that accepts a number and returns the number times itself

var aNumber = prompt("Please enter a Number");

function square(aNumber) {
    return (Number(aNumber) * Number(aNumber))
}

alert("The Square of your number is: " + square(aNumber));

Write a function named cube that accepts a number and returns the number times itself times itself

var aNumber = prompt("Please enter a Number");

function cube(aNumber) {
    return (Number(aNumber) * Number(aNumber) * Number(aNumber))
}

alert("The Cube of your number is: " + cube(aNumber));

Write a function named half that accepts a number and returns the number halved

var aNumber = prompt("Please enter a Number");

function half(aNumber) {
    return (Number(aNumber) / 2)
}

alert("Half of your number is: " + half(aNumber));

Write a function named double that accepts a number and returns the number doubled

var aNumber = prompt("Please enter a Number");

function double(aNumber) {
    return (Number(aNumber) * 2)
}

alert("Double your number is: " + double(aNumber));

Write a function named isValidPassword that accepts a string and returns a
boolean value based on the rules from the working with data types exercise

var password = prompt("Please, enter a new password");

function isValidPassword(password) {

}