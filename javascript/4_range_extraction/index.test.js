const { assert } = require('chai')
const solution = require('.')

describe('Tests', () => {
  it('test', () => {
    // assert.strictEqual(
    //   solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]),
    //   '-6,-3-1,3-5,7-11,14,15,17-20'
    // )

    assert.strictEqual(
      solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]),
      '-10--8,-6,-3-1,3-5,7-11,14,15,17-20'
    )
  })
})
