/*
  Title: Find the unique number

  Kata Link: https://www.codewars.com/kata/585d7d5adb20cf33cb000235

  Discuss Link: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/discuss

  Solutions Link: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/solutions

  Description:
  There is an array with some numbers. All numbers are equal except for one. Try to find it!

  findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
  findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55


  It’s guaranteed that array contains at least 3 numbers.

  The tests contain some very huge arrays, so think about performance.

  This is the first kata in series:

  1. Find the unique number (this kata)
  2. [Find the unique string](https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3)
  3. [Find The Unique](https://www.codewars.com/kata/5862e0db4f7ab47bed0000e5)


  Examples:

  Notes:
*
*/

/**
 * Find first non unique array item
 *
 * @param {Array} arr
 */
function firstNonUnique(arr) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (i !== arr.lastIndexOf(arr[i])) return arr[i]
  }

  return null
}

/**
 * @param {Array<number>} arr
 */
function findUniq(arr) {
  const nonUniqueNum = firstNonUnique(arr.slice(0, 3))

  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] !== nonUniqueNum) return arr[i]
  }

  return null
}

/**

Best solution

function findUniq(arr) {
  const [a, b, c] = arr.slice(0, 3)
  if (a !== b && a !== c) return a

  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] !== a) return arr[i]
  }

  return null
}

*/

module.exports = findUniq
