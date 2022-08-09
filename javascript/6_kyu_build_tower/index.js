/*
  Title: Build Tower

  Kata Link: https://www.codewars.com/kata/576757b1df89ecf5bd00073b

  Discuss Link: https://www.codewars.com/kata/576757b1df89ecf5bd00073b/discuss

  Solutions Link: https://www.codewars.com/kata/576757b1df89ecf5bd00073b/solutions

  Description:
  Build Tower
---

Build a pyramid-shaped tower given a positive integer `number of floors`. A tower block is represented with `"*"` character.

For example, a tower with `3` floors looks like this:

```
[
  "  *  ",
  " *** ",
  "*****"
]
```

And a tower with `6` floors looks like this:

```
[
  "     *     ",
  "    ***    ",
  "   *****   ",
  "  *******  ",
  " ********* ",
  "***********"
]
```

___

Go challenge [Build Tower Advanced](https://www.codewars.com/kata/57675f3dedc6f728ee000256) once you have finished this :)


  Examples:

  Notes:
*
*/

/**
 *
 *
 * @param {string} nFloors
 */
function towerBuilder(nFloors) {
  const tower = []
  for (let i = 0; i < nFloors; i += 1) {
    tower.push(' '.repeat(nFloors - i - 1) + '*'.repeat(i * 2 + 1) + ' '.repeat(nFloors - i - 1))
  }
  return tower
}

module.exports = towerBuilder
