/*
  Title: Replace With Alphabet Position

  Kata Link: https://www.codewars.com/kata/546f922b54af40e1e90001da

  Discuss Link: https://www.codewars.com/kata/546f922b54af40e1e90001da/discuss

  Solutions Link: https://www.codewars.com/kata/546f922b54af40e1e90001da/solutions

  Description:
  Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

`"a" = 1`, `"b" = 2`, etc.

## Example

alphabetPosition("The sunset sets at twelve o' clock.")

Should return `"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"` ( as a string )

  Examples:

  Notes:
*
*/

/**
 * @param {string} text
 * @returns {string}
 */
function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const len = text.length
  let res = ''

  for (let i = 0; i < len; i += 1) {
    const index = alphabet.indexOf(text[i].toLowerCase())
    if (index > -1) {
      res += `${index + 1} `
    }
  }

  return res.trim()
}

module.exports = alphabetPosition
