/*
  Title: Geometry Basics: Distance between points in 2D

  Kata Link: https://www.codewars.com/kata/58dced7b702b805b200000be

  Discuss Link: https://www.codewars.com/kata/58dced7b702b805b200000be/discuss

  Solutions Link: https://www.codewars.com/kata/58dced7b702b805b200000be/solutions

  Description:
  This series of katas will introduce you to basics of doing geometry with computers.

`Point` objects have `x` and `y` attributes (`X` and `Y` in `C#`) attributes.

Write a function calculating distance between `Point a` and `Point b`.

Tests round answers to 6 decimal places.

  Examples:

  Notes:
*
*/

/**
 *
 * distance = √[( y2 –  y1)² + ( x1 –  x2)²]
 * https://www.toppr.com/guides/maths/introduction-to-three-dimensional-geometry/distance-between-two-points
 */

/**
 * @typedef Point
 *  @property {number} x - x coordinate
 *  @property {number} y - y coordinate
 *
 * @param {Point} a
 * @param {Point} b
 */

function distanceBetweenPoints(a, b) {
  const q1 = (b.y - a.y) ** 2
  const q2 = (b.x - a.x) ** 2
  return Math.sqrt(q1 + q2)
}

/**
 Best solution.
 Didn't know that hypot method existed.


function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}
  */

module.exports = distanceBetweenPoints
