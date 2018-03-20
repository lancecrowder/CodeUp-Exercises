//Write a function named identity that defines one parameter and returns the argument it was called with.

var oneParameter = "Lance";

function identity(oneParameter) {
    return (oneParameter)
}

console.log(identity(oneParameter));

//Write a function named isOdd that accepts a number and returns true if the passed number is odd, otherwise false

var myNumber = prompt("Please, enter a number.");

function isOdd(myNumber) {
    if (myNumber % 2 === 0){
        return false
    } else {
        return true
    }
}

alert("Your number is odd:  " + isOdd(myNumber));