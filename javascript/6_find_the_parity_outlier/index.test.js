const { assert } = require('chai')
const findOutlier = require('.')

describe('Tests', () => {
  it('test', () => {
    assert.strictEqual(findOutlier([0, 1, 2]), 1)
    assert.strictEqual(findOutlier([1, 2, 3]), 2)
    assert.strictEqual(findOutlier([2, 6, 8, 10, 3]), 3)
    assert.strictEqual(findOutlier([0, 0, 3, 0, 0]), 3)
    assert.strictEqual(findOutlier([1, 1, 0, 1, 1]), 0)
  })
})
