/*
  Title: Remove duplicates from list

  Kata Link: https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118

  Discuss Link: https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/discuss

  Solutions Link: https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/solutions

  Description:
  Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

  Examples:

  Notes:
*
*/

/**
 * Removes duplicates from an array of numbers and returns it as a result.
 *
 * @param {Array<number>} - array of numbers
 * @returns {Array<number>} - array of numbers without duplicates
 */
function distinct(numbers) {
  return [...new Set(numbers)]
}

module.exports = distinct
