/*
  Title: Anagram Detection

  Kata Link: https://www.codewars.com/kata/529eef7a9194e0cbc1000255

  Discuss Link: https://www.codewars.com/kata/529eef7a9194e0cbc1000255/discuss

  Solutions Link: https://www.codewars.com/kata/529eef7a9194e0cbc1000255/solutions

  Description:
  An **anagram** is the result of rearranging the letters of a word to produce a new word (see [wikipedia](https://en.wikipedia.org/wiki/Anagram)).

**Note:** anagrams are case insensitive

Complete the function to return `true` if the two arguments given are anagrams of each other; return `false` otherwise.


## Examples

* `"foefet"` is an anagram of `"toffee"`

* `"Buckethead"` is an anagram of `"DeathCubeK"`


  Examples:

  Notes:
*
*/

const sortString = str => str.toLowerCase().split('').sort().join('')

const isAnagram = (test, original) => sortString(test) === sortString(original)

module.exports = isAnagram
