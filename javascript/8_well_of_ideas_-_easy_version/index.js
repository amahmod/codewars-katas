/*
  Title: Well of Ideas - Easy Version

  Kata Link: https://www.codewars.com/kata/57f222ce69e09c3630000212

  Discuss Link: https://www.codewars.com/kata/57f222ce69e09c3630000212/discuss

  Solutions Link: https://www.codewars.com/kata/57f222ce69e09c3630000212/solutions

  Description:
  For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


  Examples:

  Notes:
*
*/

/**
 *
 *
 * @param {Array<string>} list - Array of items contains either 'good' or 'bad'
 *
 */
function well(list) {
  let goodCount = 0
  // INFO: Array.filter can be used instead of foreach
  list.forEach(item => {
    if (/good/i.test(item)) {
      goodCount += 1
    }
  })

  if (goodCount > 2) {
    return 'I smell a series!'
  }
  if (goodCount >= 1) {
    return 'Publish!'
  }
  return 'Fail!'
}

module.exports = well
