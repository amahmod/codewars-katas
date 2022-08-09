/*
  Title: Find the missing letter

  Kata Link: https://www.codewars.com/kata/5839edaa6754d6fec10000a2

  Discuss Link: https://www.codewars.com/kata/5839edaa6754d6fec10000a2/discuss

  Solutions Link: https://www.codewars.com/kata/5839edaa6754d6fec10000a2/solutions

  Description:
  #Find the missing letter

  Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

  You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
  The array will always contain letters in only one case.

  Example:
  ['a','b','c','d','f'] -> 'e'
  ['O','Q','R','S'] -> 'P'

  (Use the English alphabet with 26 letters!)

  Have fun coding it and please don't forget to vote and rank this kata! :-)

  I have also created other katas. Take a look if you enjoyed this kata!

  Examples:

  Notes:
*
*/

/**
 * Find the missing letter
 *
 * @param {Array<string>} array - Sequence of alphabets
 * @returns {string} Missing alphabet in the sequence
 */
function findMissingLetter(array) {
  for (let i = 1, len = array.length, first = array[0].charCodeAt(); i < len; i += 1) {
    if (first + i !== array[i].charCodeAt()) return String.fromCharCode(first + i)
  }

  return null
}

module.exports = findMissingLetter
