/**
 * Kata link: https://www.codewars.com/kata/56269eb78ad2e4ced1000013 *
 *
 * You might know some pretty large perfect squares. But what about the NEXT one?
 *
 * Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
 *
 * If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
 *
 * Examples:(Input --> Output)
 *
 * 121 --> 144
 * 625 --> 676
 * 114 --> -1 since 114 is not a perfect square
 *
 *  Expected outputs:
 *
 * console.log(findNextSquare(121), 144)
 * console.log(findNextSquare(625), 676)
 * console.log(findNextSquare(319225), 320356)
 * console.log(findNextSquare(15241383936), 15241630849)
 * console.log(findNextSquare(155), -1)
 * console.log(findNextSquare(342786627), -1)
 * */

/**
 *
 * @param {number} sq
 * @returns {number} number
 */

function findNextSquare(sq) {
  const nextSquare = (Math.sqrt(sq) + 1) ** 2
  return Number.isInteger(nextSquare) ? nextSquare : -1
}

// ----------------------------------
//  Other solutions
// ----------------------------------

// https://www.codewars.com/kata/reviews/564429e7fc3137d3a300009a/groups/56b21455629a6baccb000074

// function findNextSquare(sq) {
//   var root = Math.sqrt(sq)
//   return root % 1 === 0 ? Math.pow(root + 1, 2) : -1
// }

module.exports = findNextSquare
