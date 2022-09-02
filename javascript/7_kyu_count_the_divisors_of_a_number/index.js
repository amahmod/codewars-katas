/*
  Title: Count the divisors of a number

  Kata Link: https://www.codewars.com/kata/542c0f198e077084c0000c2e

  Discuss Link: https://www.codewars.com/kata/542c0f198e077084c0000c2e/discuss

  Solutions Link: https://www.codewars.com/kata/542c0f198e077084c0000c2e/solutions

  Description:
  Count the number of divisors of a positive integer `n`.

Random tests go up to `n = 500000`.

### Examples (input --> output)
```
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
```

  Examples:

  Notes:
*
*/

/**
 *
 *
 * @param {number} n
 */
function getDivisorsCnt(n) {
  let divisorCount = 0
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      divisorCount += 1
    }
  }
  return divisorCount
}

module.exports = getDivisorsCnt
