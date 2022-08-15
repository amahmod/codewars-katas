/*
  Title: Isograms

  Kata Link: https://www.codewars.com/kata/54ba84be607a92aa900000f1

  Discuss Link: https://www.codewars.com/kata/54ba84be607a92aa900000f1/discuss

  Solutions Link: https://www.codewars.com/kata/54ba84be607a92aa900000f1/solutions

  Description:
  An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

**Example: (Input --> Output)**
```
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
```


  Examples:

  Notes:
*
*/

/**
 *  Detect if str is isograms
 * @param {string} str
 * @returns {boolean}
 */
function isIsogram(str) {
  return !/(\w).*\1+/gi.test(str)
}

module.exports = isIsogram
