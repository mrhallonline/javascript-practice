// random number love calculator prompting for name inputs outputting alert answer with percentage
var firstName = prompt("Enter the first name.");
var secondName = prompt ("Enter the name of the second person.");
var lovePercentage = Math.floor((Math.random()*100) + 1);
alert("There is a " + lovePercentage + "% " + "chance that " + firstName + " and " + secondName + " will be in love!")