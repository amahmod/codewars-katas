/*
  Title: Equal Sides Of An Array

  Kata Link: https://www.codewars.com/kata/5679aa472b8f57fb8c000047

  Discuss Link: https://www.codewars.com/kata/5679aa472b8f57fb8c000047/discuss

  Solutions Link: https://www.codewars.com/kata/5679aa472b8f57fb8c000047/solutions

  Description:
  You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return `-1`.

__For example:__

Let's say you are given the array `{1,2,3,4,3,2,1}`:
Your function will return the index `3`, because at the 3rd position of the array, the sum of left side of the index (`{1,2,3}`) and the sum of the right side of the index (`{3,2,1}`) both equal `6`.


Let's look at another one.
You are given the array `{1,100,50,-51,1,1}`:
Your function will return the index `1`, because at the 1st position of the array, the sum of left side of the index (`{1}`) and the sum of the right side of the index (`{50,-51,1,1}`) both equal `1`.

Last one:
You are given the array `{20,10,-80,10,10,15,35}`
At index 0 the left side is `{}`
The right side is `{10,-80,10,10,15,35}`
They both are equal to `0` when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

__Input:__
An integer array of length `0

  Examples:

  Notes:
*
*/

/**
 * Sum of all array items
 *
 * @param {Array<number>} arr - Array of integers
 */
function arraySum(arr) {
  return arr.reduce((a, b) => a + b, 0)
}

/**
 * @param {Array<number>} arr
 *  @returns {number}
 */
function findEvenIndex(arr) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    const leftSide = arr.slice(0, i)
    const rightSide = arr.slice(i + 1)
    if (arraySum(leftSide) === arraySum(rightSide)) return i
  }

  return -1
}

// assert.strictEqual(findEvenIndex([1, 100, 50, -51, 1, 1]), 1, 'The array was: [1,100,50,-51,1,1] \n')

module.exports = findEvenIndex
