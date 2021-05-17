"use strict";

// Write a function, filterNumbers() that takes in an array of mixed data types and
// returns an array of only the numbers type in ascencding order.
// Example input: ["fred", true, 5, 3] Example output: [3, 5]

function filterNumbers(array) {
    var bucket=[];
    array.forEach(function(element) {
        if (typeof element === "number") {
           bucket.push(element);
        }
    })
    return bucket.sort(function(a, b){return a-b});
}

console.log(filterNumbers(["fred", true, 5, 3, 2, 10, 4, 349, "10", "3"]));


// Write a function, getOlder() that takes in array of dog objects and increases
// the value of each object's age property by 1.
// Example input:
  var dogs = [
        {
            name: "Chompers",
            breed: "Pug",
            age: 7
        },
        {
            name: "Freddy",
            breed: "Lab",
            age: 4
        },
        {
            name: "Mr. Pig",
            breed: "Mastif",
            age: 10

        }
    ]
function getOlder(array) {
      array.forEach(function(element){
          return element.age++;
    })
    }
    getOlder(dogs);
    console.log(dogs)

// Example output
//
//     [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 8
//     },
//         {
//             name: "Freddy",
//             breed: "Lab",
//             age: 5
//         },
//         {
//             name: "Mr. Pig",
//             breed: "Mastif",
//             age: 11
//         }
//     ]



// Write a function, washCars() that takes in a array of car objects and sets
// the boolean properties of isDirty to false.



//     Example input:
//
   var vehicles = [
        {
            make: 'Volvo',
            color: 'red',
            year: 1996,
            isDirty: true
        },
        {
            make: 'Toyota',
            color: 'black',
            year: 2004,
            isDirty: false
        },
        {
            make: 'Ford',
            color: 'white',
            year: 2007,
            isDirty: true
        }
    ]
    function washCars(array) {
        array.forEach(function (element) {
            if (element.isDirty = true) {
                return (element.isDirty = false);
            };
        });
    }

washCars(vehicles);
console.log(vehicles);

// Example output
//
//     [
//     {
//         make: 'Volvo',
//         color: 'red',
//         year: 1996,
//         isDirty: false // changed to false
//     },
//         {
//             make: 'Toyota',
//             color: 'black',
//             year: 2004,
//             isDirty: false // stays the same
//         },
//         {
//             make: 'Ford',
//             color: 'white',
//             year: 2007,
//             isDirty: false // changed to false
//         }
//     ]
// Write a function, adminList() that takes in an array of user objects and returns
// a count of all admins based on the isAdmin property. Refactor to return an array
// of admin-only user emails. Refactor again to return an array of user objects that are admins.

//  Example Input:
//
 var user =[
        {
            isAdmin: true,
            email: 'user1@email.com'
        },
        {
            isAdmin: true,
            email: 'user2@email.com'
        },
        {
            isAdmin: false,
            email: 'user3@email.com'
        }
        ]
    var userAdmin=[];

    function adminList(array) {
        array.forEach(function (element) {
            if (element.isAdmin === true) {
                userAdmin.push(element.email);
            }
        })
    }
    adminList(user);
    console.log(userAdmin);

// Example Output (before refactor): 2
//
// Example Output (after 1st refactor):
//
// [
//     'user1@email.com',
//     'user2@email.com'
// ]
// Example Output (after 2nd refactor):
//
// [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     }
// ]
// Create a function, makeSandwhichObjects() that takes in two array of strings,
// breads and fillings and returns an array of sandwhichObjects that contain properties for
// bread and filling and values correspond to the same order of the two passed in arrays.
// Assume the two array inputs are the same length.

    // Example Input:

    var breads  = [
        "white",
        "wheat",
        "rhy",
        "white"
    ];

    var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];

// makeSandwhichObjects(breads, fillings)
// Example Output:
//
//     [
//         {
//             bread: "white,
//             filling: "pb&j"
//         },
//         {
//             bread: "wheat",
//             filling: "ham"
//         },
//         {
//             bread: "rhy",
//             filling: "cheese steak"
//         },
//         {
//             bread: "white",
//             filling: "tuna"
//         }
//     ]

    var result = {};
    breads.forEach((breads, i) => result[breads] = fillings[i]);
    console.log(result);






