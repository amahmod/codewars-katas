/*
  Title: Find The Parity Outlier

  Kata Link: https://www.codewars.com/kata/5526fc09a1bbd946250002dc

  Discuss Link: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/discuss

  Solutions Link: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/solutions

  Description:
  You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer `N`. Write a method that takes the array as an argument and returns this "outlier" `N`.

## Examples

```python
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
```

  Examples:

  Notes: Since the input array can be very large, we have to  try to avoid looping through all the elements

*
*/

/**
 * Get first odd number found in an array
 *
 * @param {Array<number>} numbers
 * @returns {number|null} First odd number if found, otherwise null
 */
const getFirstOddNumber = numbers => {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
      return numbers[i]
    }
  }
  return null
}

/**
 * Get first even number found in an array
 *
 * @param {Array<number>} numbers
 * @returns {number|null} First even number if found, otherwise null
 */
const getFirstEvenNumber = numbers => {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      return numbers[i]
    }
  }
  return null
}

/**
 * Get Odd and Even number counts in an array
 *
 * @param {Array<number>} numbers
 * @returns{{odd: number, even: number}}
 */
const getOddEvenCount = numbers => {
  const count = {
    odd: 0,
    even: 0
  }

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      count.even += 1
    } else {
      count.odd += 1
    }
  }
  return count
}

/**
 * Get first first encounter of odd or even number
 *
 * @param {Array<number>} integers
 * @returns {number}
 */
function findOutlier(integers) {
  const oddEvenCount = getOddEvenCount(integers.slice(0, 3))
  if (oddEvenCount.even > oddEvenCount.odd) {
    return getFirstOddNumber(integers)
  }
  return getFirstEvenNumber(integers)
}

/**
Best solution. This is more cleaner, readable and short solution

Link: https://www.codewars.com/kata/reviews/565349bca24428f2870000a9/groups/57d1b4f795497e15bc000448


function findOutlier(integers){
  return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
}

function even(num){
  return (num % 2 == 0);
}

function odd(num){
  return !even(num)
}
*/
module.exports = findOutlier
