/*
  Title: Can we divide it?

  Kata Link: https://www.codewars.com/kata/5a2b703dc5e2845c0900005a

  Discuss Link: https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/discuss

  Solutions Link: https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/solutions

  Description:

  Your task is to create the function isDivideBy (or is_divide_by) to check if an integer `number` is divisible by both integers `a` and `b`.

  A few cases:


  (-12, 2, -6)  ->  true
  (-12, 2, -5)  ->  false

  (45, 1, 6)    ->  false
  (45, 5, 15)   ->  true

  (4, 1, 4)     ->  true
  (15, -5, 3)   ->  true



  Examples:

  Notes:
*
*/

/**
 * @param {number} number
 * @param {number}  a
 * @param {number} b
 */
function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0
}

module.exports = isDivideBy
