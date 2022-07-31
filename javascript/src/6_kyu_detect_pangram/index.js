/**
 * Kata link: https://www.codewars.com/kata/545cedaa9943f7fe7b000048
 *
 * A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
 *
 * Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 *
 *--------------------------------------
 *  Expected outputs:
 *
 * console.log(isPangram('The quick brown fox jumps over the lazy dog.'), true)
 * console.log(isPangram('This is not a pangram.'), false)
 * */

/**
 *
 * @param {string} string
 * @returns {boolean}
 */

function isPangram(string) {
  return (
    string
      .toLowerCase()
      .replace(/[^a-z]/gi, '')
      .split('')
      .sort()
      .join('')
      .replace(/(\w)(\1+)/g, '$1').length === 26
  )
}

// -------------------------------------
// Other solutions
//---------------------------------------

// https://www.codewars.com/kata/reviews/54a5d4af37f43531e900002e/groups/5745b6ccfd21f034a80016e0
// 13% faster than my solution based on jsbench

// function isPangram(string) {
//   return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26
// }

export default isPangram
