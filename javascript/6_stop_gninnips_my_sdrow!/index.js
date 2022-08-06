/*
  Title: Stop gninnipS My sdroW!

  Kata Link: https://www.codewars.com/kata/5264d2b162488dc400000001

  Discuss Link: https://www.codewars.com/kata/5264d2b162488dc400000001/discuss

  Solutions Link: https://www.codewars.com/kata/5264d2b162488dc400000001/solutions

  Description:
  Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:
```
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
```

  Examples:

  Notes:
*
*/

/**
 * Reverse a string
 *
 * @param {string} str
 * @returns {string} Reversed string
 */
function reverserString(str) {
  return str.split('').reverse().join('')
}

/**
 * Reverse words if length is more than 5
 *
 * @param {string} string
 *  @returns {string}
 */
function spinWords(string) {
  return string.replace(/(\w{5,})/g, reverserString)
}

module.exports = spinWords
