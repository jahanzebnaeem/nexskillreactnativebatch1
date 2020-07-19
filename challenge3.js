/*
  BMI Calculator Challenge

  Create a BMI calculator using JavaScript functions.

  The Body Mass Index (BMI) is a way of estimating the amount of body fat. It's used in medicine to calculate risk of heart disease.

  You can calculate it using the formula below, where weight divided by height squared.

  BMI = weight(kg)/height2(m2)

  Your challenge is to create a function that takes weight and height as inputs and gives the calculated BMI value as an output. The output should be rounded to the nearest whole number.

  The first parameter should be the weight and the second should be the height.
*/

// Create your function below this line.
// The first parameter should be the weight and the second should be the height.


/* 
  If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

  var bmi = bmiCalculator(65, 1.8);

  bmi should equal 20 when it's rounded to the nearest whole number.

*/

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);