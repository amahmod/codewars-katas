/*
  Title: Find the capitals

  Kata Link: https://www.codewars.com/kata/539ee3b6757843632d00026b

  Discuss Link: https://www.codewars.com/kata/539ee3b6757843632d00026b/discuss

  Solutions Link: https://www.codewars.com/kata/539ee3b6757843632d00026b/solutions

  Description:
  # Instructions

Write a function that takes a single string (`word`) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

# Example

Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

  Examples:

  Notes:
*
*/

/**
 *
 * @param {string} word
 */
const capitals = word => {
  const result = []
  for (let i = 0, len = word.length; i < len; i += 1) {
    if (word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90) {
      result.push(i)
    }
  }
  return result
}

module.exports = capitals
