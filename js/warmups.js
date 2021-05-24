//
// for (var i=1; i < 101; i++){
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }

(() => {
    const fizzBuzz = numTil => {
        for (let x = 1; x <= numTil; x++){
            if (x % 3 === 0 && x % 5 === 0) {
                console.log("FizzBuzz");
            } else if (x % 3 === 0) {
                console.log("Fizz");
            } else if (x % 5 === 0) {
                console.log("Buzz");
            } else {
                console.log(x);
            }
        }
    }
    fizzBuzz(30);
})