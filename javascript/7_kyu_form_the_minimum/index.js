/*
  Title: Form The Minimum

  Kata Link: https://www.codewars.com/kata/5ac6932b2f317b96980000ca

  Discuss Link: https://www.codewars.com/kata/5ac6932b2f317b96980000ca/discuss

  Solutions Link: https://www.codewars.com/kata/5ac6932b2f317b96980000ca/solutions

  Description:
  # Task

**_Given_** a **_list of digits_**, *return the **_smallest number_** that could be formed from these digits, using the digits only once (ignore duplicates).*
___

# Notes:

* Only **_positive integers_** *will be passed to the function (> 0 ), no negatives or zeros.*
___
# Input >> Output Examples

```
minValue ({1, 3, 1})  ==> return (13)
```
## Explanation:
**_(13)_** *is the minimum number could be formed from* **_{1, 3, 1}_** , *Without duplications*
___
```
minValue({5, 7, 5, 9, 7})  ==> return (579)
```
## Explanation:
**_(579)_** *is the minimum number could be formed from* **_{5, 7, 5, 9, 7}_** , *Without duplications*
___

```
minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
```
## Explanation:
**_(134679)_** *is the minimum number could be formed from* **_{1, 9, 3, 1, 7, 4, 6, 6, 7}_** , *Without duplications*
___
___

## [Playing with Numbers Series](https://www.codewars.com/collections/playing-with-numbers)

# [Playing With Lists/Arrays Series](https://www.codewars.com/collections/playing-with-lists-slash-arrays)

# [Bizarre Sorting-katas](https://www.codewars.com/collections/bizarre-sorting-katas)

# [For More Enjoyable Katas](http://www.codewars.com/users/MrZizoScream/authored)
___

## ALL translations are welcomed

## Enjoy Learning !!
# Zizou


  Examples:

  Notes:
*
*/

/**
 * @param {Array<number>} values
 */
function minValue(values) {
  return Number([...new Set(values)].sort().join(''))
}

module.exports = minValue
