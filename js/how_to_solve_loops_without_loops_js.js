"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// Write a function named `upperCaseLastNames` 
// that accepts an array of objects
// where each object has properties `firstName` and `lastName` and returns the
// same array of objects with each last name capitalized

var names = [
    {firstName: 'Harry', lastName: 'potter'},
    {firstName: 'Ron', lastName: 'weasley'},
    {firstName: 'Hermione', lastName: 'granger'}
];


// ensure that the function takes in an input argument
// figure out the data type of the input
// if the input is an array, then make sure our output is an array
// we need to check each element on the array... .forEach
// we need code to capitalize the first char of a string and make the rest lowercase
// once capitalized, we need to make sure that string is saved (assigned)

function upperCaseLastNames(input) {

    // if(!Array.isArray(input)){ 
    //     return false;
    // }

    // scenario: we know we have an array of stuff
    // and we know we're gonna need to iterate across that array
    // (we know we need to loop across that array)
    // but how?

    // Orsinger's approach to loopless solving of loop problems
    // "One weird trick to sovling looping problems without going loopy!"
    // How to solve loop problems without a loop

    // Step 1. start by ignoring the loop completely
    // if an array has elements and all the elements are the same...
    // then... create a variable that only holds the very first item on that array
    // var input = input[0];

    // Step 2. now that we can ignore the "loop" part
    // we focus on getting the appropriate procedure for just that one item.
    
    // Step 3. Define the output that we need for the procedure on just that one value.
    // input is {firstName: 'Harry', lastName: 'potter'}
    // output should be {firstName: 'Harry', lastName: 'Potter'}

    // Step 4. Ask yourself, do I have any helper functions that can help me do this?
    // If not, take a moment to identify a single procedure (verb) 
    // that we can make its own function
    // Another way to say this: Is there a piece of Step 3 that I've seen/done before?

    // Step 5. How small/simple can get that helper function?
    // In this example, we need a capitalize function...
    // scenario: we need capitalize to accept a string and return a string.
    // benefit to Step 5 is: How much more detail can we effectively ignore?

    // Enlightenment => lighten up
    
    // input is {firstName: 'Harry', lastName: 'potter'}
    // output is {firstName: 'Harry', lastName: capitalize('potter')}
    // output is {firstName: 'Harry', lastName: 'Potter'}
    
    // use this later...
    // var input = input[0];
    // input.firstName = capitalize(input.firstName);
    // input.lastName = capitalize(input.lastName);

    // Step 6. Test out your procedure on just that one single input. Verify it works.     

    // Step 7.      
    // define your input variable as the singular version of the array's name..
    // if the array is cars, make your singlular variable car

    // Step 8.
    // take the array you need to iterate and add .forEach to it.
    // then, define the first argument of forEach's function to be the singular of the array.
    // delete your var person = input[0] part.
    // move your procedural code into the loop
    
    // var person = input[0];
    var output = [];

    input.forEach(function(person) {
        person.firstName = capitalize(person.firstName);
        person.lastName = capitalize(person.lastName);

        // we need to push the person object onto the output array
        output.push(person);
    });

    return output;
}

function capitalize(input) {
    if(typeof input != "string") {
        return false;
    }

    // take in a string input
    // take the first character of the input and capitalize it.
    // assign or use that uppercased character
    // get the rest of the string. (all characters except for the first)
    // "how to get all characters in a string except for the first character"
    var first = input[0].toUpperCase();

    var rest = input.substring(1).toLowerCase();

    return first + rest;
}
