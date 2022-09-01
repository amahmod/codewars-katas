/*
  Title: Find the position!

  Kata Link: https://www.codewars.com/kata/5808e2006b65bff35500008f

  Discuss Link: https://www.codewars.com/kata/5808e2006b65bff35500008f/discuss

  Solutions Link: https://www.codewars.com/kata/5808e2006b65bff35500008f/solutions

  Description:
  When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"


  Examples:

  Notes:
*
*/

/**
 * @param {string} letter
 */
function position(letter) {
  return `Position of alphabet: ${letter.charCodeAt() - 96}`
}

module.exports = position
