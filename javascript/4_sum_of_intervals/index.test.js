const chai = require('chai')
const sumIntervals = require('.')

const { assert } = chai
chai.config.truncateThreshold = 0

describe('sumIntervals', () => {
  it('should return the correct sum for non overlapping intervals', () => {
    const test1 = [[1, 5]]
    const test2 = [
      [1, 5],
      [6, 10]
    ]
    assert.strictEqual(sumIntervals(test1), 4)
    assert.strictEqual(sumIntervals(test2), 8)
  })

  it('should return the correct sum for overlapping intervals', () => {
    const test1 = [
      [1, 5],
      [1, 5]
    ]
    const test2 = [
      [1, 4],
      [7, 10],
      [3, 5]
    ]
    assert.strictEqual(sumIntervals(test1), 4)
    assert.strictEqual(sumIntervals(test2), 7)
  })
})
