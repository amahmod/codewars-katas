const chai = require('chai')
const getSum = require('.')

const { assert } = chai
chai.config.truncateThreshold = 0

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(getSum(0, -1), -1)
    assert.strictEqual(getSum(0, 1), 1)
  })
})
