/*
  Title: Sum of Intervals

  Kata Link: https://www.codewars.com/kata/52b7ed099cdc285c300001cd

  Discuss Link: https://www.codewars.com/kata/52b7ed099cdc285c300001cd/discuss

  Solutions Link: https://www.codewars.com/kata/52b7ed099cdc285c300001cd/solutions

  Description:

Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); // => 19
Random Tests
100 tests with 1 - 10 intervals from the range [-20, 20]
100 tests with 20000 - 50000 intervals from the range [-10^9, 10^9]

  Examples:

  Notes:
*
*/

/**
 * Check of two intervals is overlapping
 *
 * @param {Array<number, number>} interval1
 * @param {Array<number, number} interval2
 */
function isOverlapping(interval1, interval2) {
  return interval2[0] < interval1[1]
}

/**
 *
 * @param {Array<Array<number>>} intervals
 */
function sumIntervals(intervals) {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0])
  const uniqueIntervals = []

  sortedIntervals.forEach(interval => {
    if (uniqueIntervals.length === 0) uniqueIntervals.push(interval)

    const lastUniqueInterval = uniqueIntervals[uniqueIntervals.length - 1]

    if (isOverlapping(lastUniqueInterval, interval)) {
      if (lastUniqueInterval[1] < interval[1]) {
        ;[, lastUniqueInterval[1]] = interval
      }
    } else {
      uniqueIntervals.push(interval)
    }
  })

  // calculate interval sum
  let sum = 0
  uniqueIntervals.forEach(interval => {
    sum += interval[1] - interval[0]
  })

  return sum
}

module.exports = sumIntervals
