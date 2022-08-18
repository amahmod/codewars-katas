/*
  Title: Rot13

  Kata Link: https://www.codewars.com/kata/530e15517bc88ac656000716

  Discuss Link: https://www.codewars.com/kata/530e15517bc88ac656000716/discuss

  Solutions Link: https://www.codewars.com/kata/530e15517bc88ac656000716/solutions

  Description:
  ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

  Create a function that takes a string and returns the string ciphered with Rot13.
  If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

  Examples:

  Notes:
*
*/

/**
 * @param {string} message
 */
function rot13(message) {
  const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const cipher = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM'
  return message.replace(/[a-z]/gi, letter => cipher[alpha.indexOf(letter)])
}

module.exports = rot13
