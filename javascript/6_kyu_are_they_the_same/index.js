/*
  Title: Are they the "same"?

  Kata Link: https://www.codewars.com/kata/550498447451fbbd7600041c

  Discuss Link: https://www.codewars.com/kata/550498447451fbbd7600041c/discuss

  Solutions Link: https://www.codewars.com/kata/550498447451fbbd7600041c/solutions

  Description:
  Given two arrays `a` and `b` write a function `comp(a, b)` (or`compSame(a, b)`) that checks whether the two arrays have the "same" elements, with the same *multiplicities* (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in `b` are the elements in `a` squared, regardless of the order.

  #### Examples
  ##### Valid arrays
  ```
  a = [121, 144, 19, 161, 19, 144, 19, 11]
  b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  ```
  `comp(a, b)` returns true because in `b` 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write `b`'s elements in terms of squares:
  ```
  a = [121, 144, 19, 161, 19, 144, 19, 11]
  b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
  ```
  ##### Invalid arrays
  If, for example, we change the first number to something else, `comp` is not returning true anymore:
  ```
  a = [121, 144, 19, 161, 19, 144, 19, 11]
  b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
  ```
  `comp(a,b)` returns false because in `b` 132 is not the square of any number of `a`.
  ```
  a = [121, 144, 19, 161, 19, 144, 19, 11]
  b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
  ```
  `comp(a,b)` returns false because in `b` 36100 is not the square of any number of `a`.

  #### Remarks
  - `a` or `b` might be `[] or {}` (all languages except R, Shell).
  - `a` or `b` might be `nil` or `null` or `None` or `nothing` (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).

  If `a` or `b` are `nil` (or `null` or `None`, depending on the language), the problem doesn't make sense so return false.

  #### Note for C
  The two arrays have the same size `(> 0)` given as parameter in function `comp`.


  Examples:

  Notes:
*
*/

/**
 * @param {Array<number>} array1
 * @param {Array<number>} array2
 */
function comp(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) return false

  const sortedArr2 = [...array2].sort((a, b) => a - b)
  return [...array1].sort((a, b) => a - b).every((num, index) => num * num === sortedArr2[index])
}

/**
This is faster than the above solution but this will mutate the original arrays, which is not good at all.

function comp(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) return false

  array1.sort()
  array2.sort()

  return array1.every((num, index) => num * num === array2[index])
}
*/

module.exports = comp
