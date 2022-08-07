/*
  Title: Convert string to camel case

  Kata Link: https://www.codewars.com/kata/517abf86da9663f1d2000003

  Discuss Link: https://www.codewars.com/kata/517abf86da9663f1d2000003/discuss

  Solutions Link: https://www.codewars.com/kata/517abf86da9663f1d2000003/solutions

  Description:
  Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized **only** if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

### Examples

`"the-stealth-warrior"` gets converted to `"theStealthWarrior"`
`"The_Stealth_Warrior"` gets converted to `"TheStealthWarrior"`


  Examples:

  Notes:
*
*/

/**
 * Convert string to camel case
 *
 * @param {string} str
 * @returns {string}
 */
function toCamelCase(str) {
  return str.replace(/([-_])(\w)/g, (m, _, firstChar) => firstChar.toUpperCase())
}

module.exports = toCamelCase
