/*
  Title: Third Angle of a Triangle

  Kata Link: https://www.codewars.com/kata/5a023c426975981341000014

  Discuss Link: https://www.codewars.com/kata/5a023c426975981341000014/discuss

  Solutions Link: https://www.codewars.com/kata/5a023c426975981341000014/solutions

  Description:
  You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle

  Examples:

  Notes:
*
*/

/**
 * @param {number} a
 * @param {number} b
 */
function otherAngle(a, b) {
  return 180 - (a + b)
}

module.exports = otherAngle
