/*
  Title: Get the Middle Character

  Kata Link: https://www.codewars.com/kata/56747fd5cb988479af000028

  Discuss Link: https://www.codewars.com/kata/56747fd5cb988479af000028/discuss

  Solutions Link: https://www.codewars.com/kata/56747fd5cb988479af000028/solutions

  Description:
  You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

```
Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

```



#Input

A word (string) of length `0

  Examples:

  Notes:
*
*/

/**
 * Get middle character from string
 *
 * @param {string} str - string
 * @returns {string}
 */
function getMiddle(str) {
  const len = str.length
  const halfLen = Math.floor(len / 2)

  return len % 2 === 0 ? str.substr(halfLen - 1, 2) : str.substr(halfLen, 1)
}

module.exports = getMiddle
