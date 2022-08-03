/*
  Title: Grasshopper - Summation

  Kata Link: https://www.codewars.com/kata/55d24f55d7dd296eb9000030

  Discuss Link: https://www.codewars.com/kata/55d24f55d7dd296eb9000030/discuss

  Solutions Link: https://www.codewars.com/kata/55d24f55d7dd296eb9000030/solutions

  Description: # Summation

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


  Examples:

  Notes:
*
*/

const summation = num => {
  if (num === 1) return num
  return num + summation(num - 1)
}

module.exports = summation
