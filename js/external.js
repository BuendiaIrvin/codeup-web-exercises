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
 alert("Your total is $" + Total)
 var amazonPerHour = 380;
 var googlePerHour = 400;
 var facebookPerHour = 350;
 var amazonHrs = parseFloat(prompt("How many hours did you work for Amazon?"));
 var googleHrs = parseFloat(prompt("How many hours did you work at Google?"));
 var facebookHrs = parseFloat(prompt("How many hours did you work at Facebook"));
 var total = (amazonPerHour * amazonHrs) + (googlePerHour * googleHrs) + (facebookPerHour * facebookHrs)
 alert("Your payment this week is $" + total)
 var register = confirm("Would you like to sign up for Codeup?");
      if(register) {
      var register2 = confirm("Does this class have available seats?");
}
