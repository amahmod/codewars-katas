/*
  Title: String incrementer

  Kata Link: https://www.codewars.com/kata/54a91a4883a7de5d7800009c

  Discuss Link: https://www.codewars.com/kata/54a91a4883a7de5d7800009c/discuss

  Solutions Link: https://www.codewars.com/kata/54a91a4883a7de5d7800009c/solutions

  Description:
  Your job is to write a function which increments a string, to create a new string.

- If the string already ends with a number, the number should be incremented by 1.
- If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

`foo -> foo1`

`foobar23 -> foobar24`

`foo0042 -> foo0043`

`foo9 -> foo10`

`foo099 -> foo100`

*Attention: If the number has leading zeros the amount of digits should be considered.*


  Examples:

  Notes:
*
*/

/**
 * @param {string} str
 */
function incrementString(str) {
  return str.replace(/[0-8]?9*$/, m => Number(m) + 1)
}

module.exports = incrementString
