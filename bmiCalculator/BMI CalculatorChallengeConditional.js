//Create your function below this line.

function bmiCalculator(weight, height) {
    var bmi = (weight/height*height);
    bmi = Math.round (bmi);
if (bmi < 18.5) {return("Your BMI is" + bmi + " , so you are underweight.");}
if (bmi > 18.5 && bmi < 24.9) {return("Your BMI is" + bmi + " , so you have a normal weight.");}
if (bmi > 24.9) {return("Your BMI is" + bmi + " , so you are overweight.");}
}

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
var bmi = bmiCalculator(65, 1.8); 

bmi should equal around 20 in this case.
The formula is BMI = kg/m2 where kg is a person’s weight in kilograms and m2 is their height in metres squared.

if the BMI is <18.5, the output should be: "Your BMI is <bmi>, so you are underweight." 
if the BMI is 18.5 - 24.9, the output should be: "Your BMI is <bmi>, so you have a normal weight." 
if the BMI is >24.9, the output should be: "Your BMI is <bmi>, so you are overweight." 
</bmi>"
*/

var bmi = bmiCalculator(70, 1.7);
console.log(bmi)
  
console.log(bmiCalculator(100, 2));

function bmiCalculator(weight, height) {
var bmiComputation = weight / Math.pow(height, 2);
var bmi = Math.round(bmiComputation);

if (bmi < 18.5) {
return ("Your BMI is " + bmi + ", so you are underweight.");
}

if (bmi >= 18.5 && bmi <= 24.9) {
return ("Your BMI is " + bmi + ", so you have a normal weight.");
}

if (bmi > 24.9) {
return ("Your BMI is " + bmi + ", so you are overweight.");
}

}