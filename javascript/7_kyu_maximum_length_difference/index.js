/*
  Title: Maximum Length Difference

  Kata Link: https://www.codewars.com/kata/5663f5305102699bad000056

  Discuss Link: https://www.codewars.com/kata/5663f5305102699bad000056/discuss

  Solutions Link: https://www.codewars.com/kata/5663f5305102699bad000056/solutions

  Description:
  You are given two arrays `a1` and `a2` of strings. Each string is composed with letters from `a` to `z`.
Let `x` be any string in the first array and `y` be any string in the second array.

  `Find max(abs(length(x) − length(y)))`

If `a1` and/or `a2` are empty return `-1` in each language
except in Haskell (F#) where you will return `Nothing` (None).

#### Example:
```
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13

```

#### Bash note:
 - input : 2 strings with substrings separated by `,`
 - output: number as a string

  Examples:

  Notes:
*
*/

/**
 * @param {Array<string>} a1
 * @param {Array<string>} a2
 */
function mxdiflg(a1, a2) {
  if (!a1.length || !a2.length) return -1
  const l1 = a1.sort((a, b) => b.length - a.length)
  const l2 = a2.sort((a, b) => b.length - a.length)
  return Math.max(l1[0].length - l2[l2.length - 1].length, l2[0].length - l1[l1.length - 1].length)
}

module.exports = mxdiflg
