/*
  Title: You're a square!

  Kata Link: https://www.codewars.com/kata/54c27a33fb7da0db0100040e

  Discuss Link: https://www.codewars.com/kata/54c27a33fb7da0db0100040e/discuss

  Solutions Link: https://www.codewars.com/kata/54c27a33fb7da0db0100040e/solutions

  Description:
  ### A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a _perfect square_.

### Task

Given an integral number, determine if it's a [square number](https://en.wikipedia.org/wiki/Square_number):

> In mathematics, a __square number__ or __perfect square__ is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will _always_ use some integral number, so don't worry about that in dynamic typed languages.

### Examples

```
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
```

  Examples:

  Notes:
*
*/

/**
 * @param {number} n
 * @returns {boolean}
 */

const isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n))
}

module.exports = isSquare
