// "use strict";
//
// Make a function called returnTwo() that returns the number 2 when called
// Test this function with console.log(returnTwo())
//
// function returnTwo() {
//     return 2;
// }
// console.log(returnTwo());
//
//
//     Make a function called sayHowdy() which console.logs the string “Howdy!”
//     Test this function by directly calling sayHowdy()
//  Remember this function does not need a defined return value
//
// function sayHowdy() {
//     return ("Howdy!")
// }
// console.log(sayHowdy());
//
//
// Make a function called returnName() that returns the string of your name
// Test this function with console.log(returnName())
//
// function returnName() {
//     return "Irvin Buendia";
// }
// console.log(returnName());
//
//
//
//     Make a function called addThree() which takes in a number input and returns the number plus 3.
// Test this function with console.log(addThree(5))
//
//
// function addThree(x) {
//     return x + 3;
// }
// console.log(addThree(5));
//
//
//     Make a function called sayString() which returns the string input passed in.
// Test this function with console.log(sayString('codeup'))
//
// function sayString(x) {
//     return x;
// }
// console.log(sayString("codeup"));
//
//
//     Write a function called identity(input) that takes in an argument called input and returns that input.
//
//     function identity(input) {
//         return input;
//     }
//     console.log(identity(2+2));
//
//
//         Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.
//
//      function getRandomNumber(min , max) {
//             return (Math.random() * (max - min) + min).toFixed();
//      }
// console.log(getRandomNumber(50,100));
//
//
//
//         Write a function called first(input) that returns the first character in the provided string.
//
//     function first(input) {
//         return input.charAt(0)
//     }
// console.log(first("Codeup"));
//
//             Write a function called last(input) that returns the last character of a string
//
// function last(input) {
//     return input.slice(-1)
// }
// console.log(last("Codeup"));
//
//         Write a function called rest(input) that returns everything but the first character of a string.
//
// function rest(input) {
//     return input.substring(1);
// }
// console.log(rest("Iphone"));
//
//
//             Write a function called reverse(input) that takes a string and returns it reversed.
//
// function reverse(input) {
//     return input.split("").reverse().join("")
// }
// console.log(reverse("yelnats"));
//
//             Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
//
// function isNumeric(input) {
//     return !!input;
// }
// console.log(isNumeric(50));
//
//
//             Write a function called count(input) that takes in a string and returns the number of characters.
//
// function count(input) {
//     return input.length;
// }
// console.log(count("Supercalifradgileisticexpialadocious"));
// console.log(count("Irvin"));
//
//             Write a function called add(a, b) that returns the sum of a and b
//
// function add(a , b) {
//     return a + b;
// }
// console.log(add(45,45));
//
//         Write a function called subtract(a, b) that return the difference between the two inputs.
//
// function subtract(a , b) {
//     return a - b;
// }
// console.log(subtract(10, 5));
//
//
//
//             Write multiply(a, b) function that returns the product
//
// function multiply(a , b) {
//     return a * b;
// }
// console.log(multiply(8,7));
//
//         Write a divide(numerator, denominator) function that returns a divided by b
//
// function divide(numerator, denominator) {
//     return (numerator / denominator);
// }
// console.log(divide(100,4));
//
//
//         Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
//
// function remainder(number, divisor) {
//     return number % divisor;
// }
// console.log(remainder(50,45));
//
//         Write the function square(a) that takes in a number and returns the number multiplied by itself.
//
// function square(a) {
//     return a * a;
//}
// console.log(square(95));
//
//  Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators

// function sumOfSquares(a , b) {
//     var aSquare = square(a)
//     var bSquare = square(b)
//     return add(aSquare, bSquare)
// }
// console.log(sumOfSquares("5", "5"))


//  Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
//
//
// function doMath(operator, a , b) {
//     if (operator === "addition") {
//         return a + b;
//     } else if
//     (operator === "multiplication") {
//         return a * b;
//     }
// }
//
// console.log(doMath("addition", 5,5))
// console.log(doMath("multiplication",5,5))


// Create a function that will return how many whitespace characters are at the beginning and end of a string.

// function countWhiteSpace (string) {
//     return (string.search(/\S/)) + (string.search(/\S|$/));
// }
// console.log(countWhiteSpace("   Hello, my name is Irvin Buendia.   "))
//


//     Create a function that takes in two string inputs.
//     If the second string input is present in the first, return the first input string with the second input string removed from it.
//     If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.
//     If the second string input is not present in the first, return the first string as entered in the function.




// Create a function that takes in a string and returns true if the last letter is an "a" (otherwise, return false).

// function lastLetter(string) {
//   var myString = string.slice(-1);
// if (myString === "a") {
//     return true;
// } else {
//     return false;
// }
// }
// console.log(lastLetter("Quesadilla"))
// console.log(lastLetter("Adrenaline"))



// EXTRA CHALLENGE: create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).
//
//
//
//
// Create a function returnTrueMessage() that returns the string "Hey, it's true!"
//
//
//
//
// Create a function returnFalseMessage() that returns the string "Hey, it's false!"
//
//
//
// Create a function returnMessage() that takes in a function and returns the call to the function
//
//
// Experiement passing in different functions.
//
//
//     Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.
//
//
//
//     The function will return true if the username is not the same as the password and the user is at least 18 years old. If the user is an admin, they do not have to be a certain age but the password must still not match the username.