/*
  Title: Beginner Series #3 Sum of Numbers

  Kata Link: https://www.codewars.com/kata/55f2b110f61eb01779000053

  Discuss Link: https://www.codewars.com/kata/55f2b110f61eb01779000053/discuss

  Solutions Link: https://www.codewars.com/kata/55f2b110f61eb01779000053/solutions

  Description:
  Given two integers `a` and `b`, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return `a` or `b`.

**Note:** `a` and `b` are not ordered!

## Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

  Examples:

  Notes:
*
*/

/**
 * @param {number} a
 * @param {number} b
 */
function getSum(a, b) {
  return ((Math.abs(a - b) + 1) * (a + b)) / 2
}

module.exports = getSum
