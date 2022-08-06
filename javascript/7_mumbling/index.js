/*
  Title: Mumbling

  Kata Link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

  Discuss Link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/discuss

  Solutions Link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/solutions

  Description:
  This time no story, no theory. The examples below show you how to write function `accum`:

#### Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from `a..z` and `A..Z`.

  Examples:

  Notes:
*
*/

/**
 * @param {string} str
 */
function accum(str) {
  let result = ''
  for (let i = 0; i < str.length; i += 1) {
    result += `${str[i].toUpperCase()}${str[i].repeat(i).toLowerCase()}-`
  }

  return result.slice(0, result.length - 1)
}

module.exports = accum
