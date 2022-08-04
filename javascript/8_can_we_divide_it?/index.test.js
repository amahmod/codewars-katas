const chai = require('chai')
const isDivideBy = require('.')

const { assert } = chai
chai.config.truncateThreshold = 0

describe('Tests', () => {
  it('test', () => {
    assert.strictEqual(isDivideBy(-12, 2, -6), true)
    assert.strictEqual(isDivideBy(-12, 2, -5), false)
    assert.strictEqual(isDivideBy(45, 1, 6), false)
    assert.strictEqual(isDivideBy(45, 5, 15), true)
    assert.strictEqual(isDivideBy(4, 1, 4), true)
    assert.strictEqual(isDivideBy(15, -5, 3), true)
  })
})
