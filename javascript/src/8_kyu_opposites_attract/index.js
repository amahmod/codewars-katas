/**
 * Kata link: https://www.codewars.com/kata/555086d53eac039a2a000083
 *
 * Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
 *
 * Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
 *
 *
 *  Expected outputs:
 *
 * console.log(lovefunc(1,2), true)
 * console.log(lovefunc(4,4), false)
 * console.log(lovefunc(4,50), false)
 * console.log(lovefunc(4,99), true)
 */

/**
 *
 *
 * @param {number} flower1
 * @param {number} flower2
 * @return {boolean}
 */

function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 > 0
}

/**
 *
 * Explanation:
 *
 * sum of a odd number and an even number are always odd number
 *
 * odd_number + even_number = odd_number
 * even_number + odd_number = odd_number
 *
 * Return `true` of sum of `flower1` and `flower2` are odd number
 *
 */

module.exports = lovefunc
