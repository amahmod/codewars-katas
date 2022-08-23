/*
  Title: Summing  a number's digits

  Kata Link: https://www.codewars.com/kata/52f3149496de55aded000410

  Discuss Link: https://www.codewars.com/kata/52f3149496de55aded000410/discuss

  Solutions Link: https://www.codewars.com/kata/52f3149496de55aded000410/solutions

  Description:
  Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (**Input --> Output**)

```
10 --> 1
99 --> 18
-32 --> 5
```

Let's assume that all numbers in the input will be integer values.



  Examples:

  Notes:
*
*/

/**
 * Sum of the absolute value of each number's deciam digits
 *
 * @param {number} number
 */
function sumDigits(number) {
  return String(number)
    .match(/\d/g)
    .reduce((sum, n) => sum + Number(n), 0)
}

module.exports = sumDigits
