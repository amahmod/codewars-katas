/*
  Title: Build a pile of Cubes

  Kata Link: https://www.codewars.com/kata/5592e3bd57b64d00f3000047

  Discuss Link: https://www.codewars.com/kata/5592e3bd57b64d00f3000047/discuss

  Solutions Link: https://www.codewars.com/kata/5592e3bd57b64d00f3000047/solutions

  Description:
  Your task is to construct a building which will be a pile of n cubes.
The cube at the bottom will have a volume of n^3, the cube above
will have  volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building.
Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb `(find_nb, find-nb, findNb, ...)` will be an integer m
and you have to return the integer n such as
n^3 + (n-1)^3 + ... + 1^3 = m
if such a n exists or -1 if there is no such n.

#### Examples:

findNb(1071225) --> 45

findNb(91716553919377) --> -1

  Examples:

  Notes:
*
*/

/**
 * @param {number} m
 * @returns {number}
 */
function findNb(m) {
  let counter = 0

  while (m > 0) {
    counter += 1
    const cubes = counter ** 3
    m -= cubes
  }

  return m < 0 ? -1 : counter
}

module.exports = findNb
