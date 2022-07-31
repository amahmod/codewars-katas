/* eslint-disable no-extend-native */
/**
 * Kata link: https://www.codewars.com/kata/520446778469526ec0000001
 *
 *
 * Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.
 *
 * For example:
 *
 * // should return true
 * [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
 * [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );
 *
 * // should return false
 * [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
 * [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );
 *
 * // should return true
 * [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );
 *
 * // should return false
 * [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
 * For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.
 *
 **--------------------------------------
 *  Expected outputs:
 *
 * console.log([1, 1, 1].sameStructureAs([2, 2, 2]), true)
 * console.log([1, [1, 1]].sameStructureAs([2, [2, 2]]), true)
 * console.log([[[], []]].sameStructureAs([[[], []]]), true)
 * console.log([1, [1, 1]].sameStructureAs([[2, 2], 2]), false)
 * console.log([1, [1, 1]].sameStructureAs([[2], 2]), false)
 * console.log([[[], []]].sameStructureAs([[1, 1]]), false)
 * console.log([1, '[', ']'].sameStructureAs(['[', ']', 1]), true)
 * */

// this function was defined given in the test environment
const { isArray } = Array

/**
 * @param {Array} other
 * @returns {boolean}
 */

Array.prototype.sameStructureAs = function sameStructureAs(other) {
  if (!isArray(other)) return false
  if (this.length !== other.length) return false

  for (let i = 0; i < other.length; i += 1) {
    if (isArray(this[i]) && isArray(other[i])) return this[i].sameStructureAs(other[i])
    if (isArray(this[i]) !== isArray(other[i])) return false
  }
  return true
}
