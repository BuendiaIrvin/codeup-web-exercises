// var slices = 8;
// while (slices > 0) {
//     console.log("I'll have a slice!");
//     slices = slices -1;
//     console.log("Now there's " + slices + " slices left!");
//     if (slices <= 3 && slices > 0) {
//         console.log("We are almost out of pizza!")
//     }
// }

// var counter = 8;
// while (counter >= 0){
//     console.log(counter);
//     counter = counter -1;
// }

// Pseudocode

// Ask the user for input
// get the user input
// declare user input variable
// store user input in variable
// declare variable to store total (accumulator)
// add the cost of the new item to the total
// keep storing the new totals in the accumulator
// tell the user how to end the program (sentinel value)
// loop back around and do it all over again, -
// - over and over, until the user tells to stop.





// var priceOfItem = parseFloat(prompt("Enter the price of your first item"));
// alert("The price of your item was " + priceOfItem);
//
// // create accumulator variable
// var totalCost = priceOfItem;
// var userInput = "";
//
// // create a sentinel value
// while(userInput !== "STOP") {
//     userInput = prompt("Enter the price of your next item \r\n\ Enter STOP when you are done");
//     if (userInput === "STOP"){
//         alert("OK. Your final total is " + totalCost);
//     } else {
//         priceOfItem = parseFloat(userInput);
//         totalCost = totalCost + priceOfItem;
//         alert("Your total is now " + totalCost.toFixed(2));
//     }
// }

// var number = Math.floor(Math.random() * 6) +1;
// var guess;
//
// do {
//     guess = parseInt(prompt("Enter a number between 1 & 6"));
// }
//     while (guess !== number); {
// alert("Your guess of " + guess + " matches the number " + number + "!");
// }



// An ice cream seller can't go home until she sells all of her cones.
// First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.
//
//
// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

var allCones = Math.floor(Math.random() * 50) + 50;
console.log("We have " + allCones + " to sell.")

do {
    var conesSold = Math.floor(Math.random() * 5) + 1;
    if (allCones < conesSold) {
        console.log("Sorry we do not have " + conesSold + ", we only have " + allCones + " left");
    } else {
        allCones = allCones - conesSold;
        console.log(conesSold + " cones sold " + allCones + " cones left");
    }
}
    while (allCones > 0) ;
        console.log("We sold all the cones!");




