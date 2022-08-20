/*
  Title: Find Multiples of a Number

  Kata Link: https://www.codewars.com/kata/58ca658cc0d6401f2700045f

  Discuss Link: https://www.codewars.com/kata/58ca658cc0d6401f2700045f/discuss

  Solutions Link: https://www.codewars.com/kata/58ca658cc0d6401f2700045f/solutions

  Description:
  In this simple exercise, you will build a program that takes a value, `integer `, and returns a list of its multiples up to another value, `limit `. If `limit` is a multiple of ```integer```, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are `(2, 6)`, the function should return `[2, 4, 6]` as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.

  Examples:

  Notes:
*
*/

/**
 *
 * @param {number} integer
 * @param {number} limit
 */
function findMultiples(integer, limit) {
  return Array.from(Array(Math.floor(limit / integer))).map((_, i) => integer * (i + 1))
}

module.exports = findMultiples
