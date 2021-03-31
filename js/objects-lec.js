"use strict";


var vehicle = {
    make: "Toyota",
    model: "Tacoma",
    truck: true,
    seat: 5,
    color: "Voodoo Blue",
    mileage: 10,
    tonneau: true,
    started: false,
    packages: {
        technology: false,
        navigation: false,
        premiumOffRoad: true,
    },
    stop: function() {
        this.started = false;
    },
    drive: function () {
        if(this.started) {
            console.log("Vroom Vroom")
            this.mileage++;
        } else {
            console.log("You didnt start the engine")
        }
    }
}

var vehicle2 = {
    make: "Ford",
    model: "Fiesta",
    truck: false,
    seat: 5,
    color: "Orange",
    mileage: 102677,
    tonneau: false,
    packages: {
        technology: true,
        navigation: true,
        premiumOffRoad: false,
    },
}

function isNew(car) {
    return car.mileage <= 15;
}










