/*
  Title: Sum of a sequence

  Kata Link: https://www.codewars.com/kata/586f6741c66d18c22800010a

  Discuss Link: https://www.codewars.com/kata/586f6741c66d18c22800010a/discuss

  Solutions Link: https://www.codewars.com/kata/586f6741c66d18c22800010a/solutions

  Description:
  Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: **begin**, **end**, **step (inclusive)**.

If **begin** value is greater than the **end**, function should returns **0**

**Examples**

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)


  Examples:

  Notes:
*
*/

/**
 *
 *
 * @param {number} begin
 * @param {number} end
 * @param {number} step
 */
const sequenceSum = (begin, end, step) => {
  let sum = 0
  for (let i = begin; i <= end; i += step) {
    sum += i
  }
  return sum
}

module.exports = sequenceSum
