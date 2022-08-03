/*
  Title: Beginner - Lost Without a Map

  Kata Link: https://www.codewars.com/kata/57f781872e3d8ca2a000007e

  Discuss Link: https://www.codewars.com/kata/57f781872e3d8ca2a000007e/discuss

  Solutions Link: https://www.codewars.com/kata/57f781872e3d8ca2a000007e/solutions

  Description:
  Given an array of integers, return a new array with each value doubled.

For example:

`[1, 2, 3] --> [2, 4, 6]`


  Examples:

  Notes:
*
*/

/**
 * Double array item
 *
 * @param {Array<number>} x
 */
function maps(x) {
  return x.map(n => n * 2)
}

module.exports = maps
