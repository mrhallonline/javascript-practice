var name = prompt('What is your name?');
var firstLetter = name.slice(0,1);
var remainingLetters = name.slice(1);
var firstLetterU = firstLetter.toUpperCase();
var remainingLettersL = remainingLetters.toLowerCase();
alert("Hello " + firstLetterU + remainingLettersL +" !");