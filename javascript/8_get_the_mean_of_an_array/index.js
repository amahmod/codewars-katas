/*
  Title: Get the mean of an array

  Kata Link: https://www.codewars.com/kata/563e320cee5dddcf77000158

  Discuss Link: https://www.codewars.com/kata/563e320cee5dddcf77000158/discuss

  Solutions Link: https://www.codewars.com/kata/563e320cee5dddcf77000158/solutions

  Description:

  It's the academic year's end, fateful moment of your school report.
  The averages must be calculated. All the students come to you and entreat you to calculate their average for them.
  Easy ! You just need to write a script.

  Return the average of the given array rounded **down** to its nearest integer.

  The array will never be empty.


  Examples:

  Notes:
*
*/

/**
 *
 *
 * @param {Array<number>} marks
 */
function getAverage(marks) {
  return Math.floor(marks.reduce((sum, num) => sum + num, 0) / marks.length)
}

module.exports = getAverage
