/*
  Title: Maximum  subarray sum

  Kata Link: https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

  Discuss Link: https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/discuss

  Solutions Link: https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/solutions

  Description:
  The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

  maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
  // should be 6: [4, -1, 2, 1]

  Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

  Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


  Examples:

  Notes:
*
*/

/**
 * Find maximum subarray sum
 *
 * @param {Array<number>} arr - array of numbers
 * @returns {number}
 */
const maxSequence = arr => {
  let currentSum = 0
  return arr.reduce((maxSum, number) => {
    currentSum = Math.max(currentSum + number, 0)
    return Math.max(currentSum, maxSum)
  }, 0)
}

module.exports = maxSequence
