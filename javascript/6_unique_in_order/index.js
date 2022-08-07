/*
  Title: Unique In Order

  Kata Link: https://www.codewars.com/kata/54e6533c92449cc251001667

  Discuss Link: https://www.codewars.com/kata/54e6533c92449cc251001667/discuss

  Solutions Link: https://www.codewars.com/kata/54e6533c92449cc251001667/solutions

  Description:
  Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

  Examples:

  Notes:
*
*/

/**
 * @param {string|Array} iterable
 */
const uniqueInOrder = iterable => {
  return Array.prototype.filter.call(iterable, (item, index, arr) => {
    return item !== arr[index - 1]
  })
}

module.exports = uniqueInOrder
