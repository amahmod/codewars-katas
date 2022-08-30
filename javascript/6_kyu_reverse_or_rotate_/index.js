/*
  Title: Reverse or rotate?

  Kata Link: https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

  Discuss Link: https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/discuss

  Solutions Link: https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/solutions

  Description:
  The input is a string `str` of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size `sz` (ignore the last chunk if its size is less than `sz`).

If a chunk represents an integer such as the **sum of the cubes of its digits is divisible by 2**, reverse that chunk;
otherwise rotate it to the left by one position.
Put together these modified chunks and return the result as a string.

If
- `sz` is `)` than the length of `str` it is impossible to take a chunk of size `sz` hence return "".

#### Examples:

```
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> ""
revrot("563000655734469485", 4) --> "0365065073456944"
```
```
Example of a string rotated to the left by one position:
s = "123456" gives "234561".
```

  Examples:

  Notes:
*
*/

/**
 * Reverse string or array
 *
 * @param {string|Array} input
 */
function reverse(input) {
  if (Array.isArray(input)) return input.reverse()
  return input.split('').reverse().join('')
}

/**
 * Rotate left to the one position
 *
 * @param {string|Array} str
 */
function rotate(str) {
  return str.slice(1) + str.slice(0, 1)
}

/**
 * Sum of digits
 *
 * @param {string} digits
 */
function sum(digits) {
  return digits.split('').reduce((total, digit) => total + Number(digit), 0)
}

/**
 * @param {string} str
 * @param {number} sz
 */

function revrot(str, sz) {
  if (sz <= 0 || str.length < sz) return ''

  let result = ''
  for (let i = 0, len = str.length; i <= len; i += sz) {
    const subStr = str.slice(i, i + sz)
    if (subStr.length === sz) {
      result += sum(subStr) % 2 === 0 ? reverse(subStr) : rotate(subStr)
    }
  }
  return result
}

/**
Solution 2
----------

function revrot(str, sz) {
  if (sz <= 0 || str.length < sz) return ''
  const regex = new RegExp(`\\d{${sz}}`, 'g')
  return str
    .substring(0, str.length - (str.length % sz))
    .replace(regex, match => (sum(match) % 2 === 0 ? reverse(match) : rotate(match)))
}
  */

module.exports = revrot
