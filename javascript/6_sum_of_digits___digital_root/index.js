/*
  Title: Sum of Digits / Digital Root

  Kata Link: https://www.codewars.com/kata/541c8630095125aba6000c00

  Discuss Link: https://www.codewars.com/kata/541c8630095125aba6000c00/discuss

  Solutions Link: https://www.codewars.com/kata/541c8630095125aba6000c00/solutions

  Description:
  [Digital root](https://en.wikipedia.org/wiki/Digital_root) is the _recursive sum of all the digits in a number._

Given `n`, take the sum of the digits of `n`. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

## Examples
```
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
```


  Examples:

  Notes:
*
*/

/**
 * @param {number} number
 */

function digitalRoot(number) {
  const sum = String(number)
    .split('')
    .reduce((acc, n) => acc + parseInt(n, 10), 0)

  return sum >= 10 ? digitalRoot(sum) : sum
}

/**

Best and cleaver solution

Link: https://www.codewars.com/kata/reviews/541c8b5e7e4b4c61e2000149/groups/541df7aa259d9c7b80000a88

function digital_root(n) {
  return (n - 1) % 9 + 1;
}


  */

module.exports = digitalRoot
