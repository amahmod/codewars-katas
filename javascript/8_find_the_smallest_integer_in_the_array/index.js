/*
  Title: Find the smallest integer in the array

  Kata Link: https://www.codewars.com/kata/55a2d7ebe362935a210000b2

  Discuss Link: https://www.codewars.com/kata/55a2d7ebe362935a210000b2/discuss

  Solutions Link: https://www.codewars.com/kata/55a2d7ebe362935a210000b2/solutions

  Description: Given an array of integers your solution should find the smallest integer.

For example:

- Given `[34, 15, 88, 2]` your solution will return `2`
- Given `[34, -345, -1, 100]` your solution will return `-345`

You can assume, for the purpose of this kata, that the supplied array will not be empty.


  Examples:

  Notes:
*
*/

class SmallestIntegerFinder {
  /**
   * return smalled interger from the array
   *
   * @param {Array<number>} args - array of numbers
   */
  // eslint-disable-next-line class-methods-use-this
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0]
  }
}

module.exports = SmallestIntegerFinder
