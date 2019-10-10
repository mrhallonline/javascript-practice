//Create your function below this line.

function bmiCalculator(weight, height) {
    var bmi = (weight/height**2);
    return Math.round (bmi);
}



/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal around 20 in this case.
The formula is BMI = kg/m2 where kg is a person’s weight in kilograms and m2 is their height in metres squared.

*/

var bmi = bmiCalculator(70, 1.7);
console.log(bmi)
  
  