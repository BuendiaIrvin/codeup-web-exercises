"use strict";

console.log("Hello from external JavaScript");
 alert("Welcome to my website!");
 var userInput = prompt('What is your favorite color?');
 alert("Cool, " + userInput + " is my favorite color too!");


 var Cost = 3;
 var LittleM = parseFloat(prompt("How many days will you rent The Little Mermaid?"));
 var BrotherB = parseFloat(prompt( "How many days will you rent Brother Bear?"));
 var Herc = parseFloat(prompt( "How many days will you rent Hercules?"));
 var Total = (LittleM + BrotherB + Herc) * Cost
 alert("Your total is $" + Total.toFixed(2));


var amazonPerHour = 380;
 var googlePerHour = 400;
 var facebookPerHour = 350;
 var amazonHrs = parseFloat(prompt("How many hours did you work for Amazon?"));
 var googleHrs = parseFloat(prompt("How many hours did you work at Google?"));
 var facebookHrs = parseFloat(prompt("How many hours did you work at Facebook"));
 var total = (amazonPerHour * amazonHrs) + (googlePerHour * googleHrs) + (facebookPerHour * facebookHrs)
 alert("Your payment this week is $" + total.toFixed(2));


 var onTime = confirm("Can you take a class from 2:30-4:00?");
 var isClassFull = confirm("Does the class have available seats?");
 var canRegister = onTime && isClassFull
 if (canRegister === true) {
  alert("Awesome! You are able to sign up for this class!")
 }else{
 alert("Sorry! You are unable to sign up for this class")
};

 //var offerValid = confirm
 var premium = prompt("Are you a premium member?")
 var items = prompt("How many items are you purchasing?")
if (items >= 2 || premium) {alert("Offer has been applied")}
 else{alert("This offer is not valid!")};

