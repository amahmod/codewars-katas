/*
  Title: Alternate capitalization

  Kata Link: https://www.codewars.com/kata/59cfc000aeb2844d16000075

  Discuss Link: https://www.codewars.com/kata/59cfc000aeb2844d16000075/discuss

  Solutions Link: https://www.codewars.com/kata/59cfc000aeb2844d16000075/solutions

  Description:
  Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index `0` will be considered even.

For example, `capitalize("abcdef") = ['AbCdEf', 'aBcDeF']`. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

[Indexed capitalization](https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1)

[Even-odd disparity](https://www.codewars.com/kata/59c62f1bdcc40560a2000060)

  Examples:

  Notes:
*
*/

/**
 * Capitalize odd or even number of character of the str
 *
 * @param {string} str
 * @param {boolean} [even] - should capitalize oven or odd indexed character
 */
function capitalizeOddOrEven(str, even = false) {
  return str
    .split('')
    .map((char, index) => {
      if (even && index % 2 === 0) return char.toUpperCase()
      if (!even && index % 2) return char.toUpperCase()
      return char
    })
    .join('')
}

/**
 *
 *
 * @param {string} s
 */
function capitalize(s) {
  return [capitalizeOddOrEven(s, true), capitalizeOddOrEven(s)]
}

module.exports = capitalize
