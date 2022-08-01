/**
 * Kata link: https://www.codewars.com/kata/583203e6eb35d7980400002a
 *
 *
 * Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
 *
 * Rules for a smiling face:
 *
 * Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
 * A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
 * Every smiling face must have a smiling mouth that should be marked with either ) or D
 * No additional characters are allowed except for those mentioned.
 *
 * Valid smiley face examples: :) :D ;-D :~)
 * Invalid smiley faces: ;( :> :} :]
 *
 * Example
 * countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
 * countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
 * countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
 * Note
 * In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
 *
 * *--------------------------------------
 *  Expected outputs:
 *
 * console.log(countSmileys([]), 0)
 * console.log(countSmileys([':D', ':~)', ';~D', ':)']), 4)
 * console.log(countSmileys([':)', ':(', ':D', ':O', ':;']), 2)
 * console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1)
 ** */

/**
 * @param {string} string
 * @returns {boolean}
 */

function isSmilyFace(string) {
  return !!string.match(/[:;][~-]?[D)]/)
}

/**
 * return the total number of smiling faces in the array
 *
 * @param {Array<string>} arr
 * @returns {number}
 */

function countSmileys(arr) {
  return arr.reduce((sum, face) => sum + isSmilyFace(face), 0)
}

// -------------------------------------
// Other solutions
//---------------------------------------

// https://www.codewars.com/kata/reviews/583203efeb35d7980400002c/groups/58320d6db3081b590300017d
// 50% faster than my solution based on jsbench

// countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0)

module.exports = countSmileys
