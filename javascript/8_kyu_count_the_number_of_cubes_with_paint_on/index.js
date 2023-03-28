/*
  Title: Count the number of cubes with paint on

  Kata Link: https://www.codewars.com/kata/5763bb0af716cad8fb000580

  Discuss Link: https://www.codewars.com/kata/5763bb0af716cad8fb000580/discuss

  Solutions Link: https://www.codewars.com/kata/5763bb0af716cad8fb000580/solutions

  Description:
  Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

Your function takes as parameter the number of times the cube has been cut.
You must return the number of smaller cubes created by the cuts that have at least one red face.

To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.



```
Examples:
countSquares(2) --> 26
countSquares(4) --> 98
```

  Examples:

  Notes:

Details answers from stackexchange https://math.stackexchange.com/a/1874800
*
*/

function countSquares(cuts) {
  return cuts === 0 ? 1 : cuts * cuts * 6 + 2
}

module.exports = countSquares
