/*
  Title: Find the unique string

  Kata Link: https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

  Discuss Link: https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/discuss

  Solutions Link: https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/solutions

  Description:
  There is an array of strings. All strings contains similar _letters_ except one. Try to find it!

  findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
  findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'


  Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

  It’s guaranteed that array contains more than 2 strings.

  This is the second kata in series:

  1. [Find the unique number](https://www.codewars.com/kata/585d7d5adb20cf33cb000235)
  2. Find the unique string (this kata)
  3. [Find The Unique](https://www.codewars.com/kata/5862e0db4f7ab47bed0000e5)

  Examples:

  Notes:
*
*/

/**
 * Trim, sort and replce duplicate characters from string
 * @param  {string} str
 */

function sort(str) {
  return str
    .toLowerCase()
    .split('')
    .sort()
    .join('')
    .trim()
    .replace(/(\w)(\1+)/g, '$1')
}

/**
 * Find the unique string
 *
 * @param {Array<string>} arr - array of string
 * @returns {string} unique string
 */
function findUniq(arr) {
  const [a, b, c] = arr.slice(0, 3)
  const asort = sort(a)
  if (asort !== sort(b) && asort !== sort(c)) return a

  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (asort !== sort(arr[i])) return arr[i]
  }

  return null
}

module.exports = findUniq
