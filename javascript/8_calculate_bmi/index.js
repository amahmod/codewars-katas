/*
  Title: Calculate BMI

  Kata Link: https://www.codewars.com/kata/57a429e253ba3381850000fb

  Discuss Link: https://www.codewars.com/kata/57a429e253ba3381850000fb/discuss

  Solutions Link: https://www.codewars.com/kata/57a429e253ba3381850000fb/solutions

  Description:
  Write function bmi that calculates body mass index (bmi = weight / height√).


if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

  Examples:

  Notes:
*
*/

function bmi(weight, height) {
  const bmiNum = weight / (height * height)
  let result = ''

  if (bmiNum <= 18.5) result = 'Underweight'
  else if (bmiNum <= 25.0) result = 'Normal'
  else if (bmiNum <= 30.0) result = 'Overweight'
  else result = 'Obese'

  return result
}

module.exports = bmi
