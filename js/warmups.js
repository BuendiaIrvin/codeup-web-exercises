//
// for (var i=1; i < 101; i++){
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }

// (() => {
//     const fizzBuzz = numTil => {
//         for (let x = 1; x <= numTil; x++){
//             if (x % 3 === 0 && x % 5 === 0) {
//                 console.log("FizzBuzz");
//             } else if (x % 3 === 0) {
//                 console.log("Fizz");
//             } else if (x % 5 === 0) {
//                 console.log("Buzz");
//             } else {
//                 console.log(x);
//             }
//         }
//     }
//     fizzBuzz(30);
// })

// function seven() {
//     return 7;
// }
// console.log(seven())
//
// const returnSeven = () => 7;
//
// console.log(returnSeven());

function timesFive(x) {
    if(isNaN(x)) {
        console.log("0");
    } else {
        console.log(x * 5);
    }
}
timesFive(5)
timesFive(20)
timesFive("five")

const multiplybyFive = num => typeof  num === "number" ? num * 5 : 0;

function reverseString(s) {
    // Create the result list
    const result = [];
    // Start from the end of the string and iterate towards the start
    for (let i = s.length-1; i >= 0; i -= 1) {
        // Push the current char in the list
        result.push(s[i]);
    }
    // Combine the result in a string
    return result.join('');
}

// Examples
console.log(reverseString(""))
console.log(reverseString("abc"))
console.log(reverseString("aaabbbcccd"))



// Here is a simple example of a Promise:
const resultPromise = function(idea) {
    return new Promise(function(resolve, reject) {
        if (idea.isGood) {
            resolve(idea);
        } else {
            reject({
                idea: idea,
                reason: "Not Realistic"
            });
        }
    });
};

// Write a function that showcases the usage of closures.

resultPromise({idea: "Make Gold from Iron", isGood: false})
    .then(function() {
        console.info("I'm Rich!")
    }, function(err) {
        console.info("Rejected as: " + err.reason);
    });


function multiplier(first) {
    let a = first;
    return function(b) {
        return a * b;
    };
}

let multiplyBy2 = multiplier(2);

console.info(multiplyBy2(4));
console.info(multiplyBy2(5));


function linearSearch(arr, x) {
    let lo = 0;
    let hi = arr.length-1;
    // Iterate from start until the end of list
    while (lo <= hi) {
        // If item was found then return index
        if (arr[lo] === x) {
            return lo;
        } else {
            lo += 1
        }
    }
    // Return -1 to denote the item was not found
    return -1;
}

let arr = [1,3,5,7,9,11,14,18,22];
console.info("Item was found at index: " + linearSearch(arr, 22));