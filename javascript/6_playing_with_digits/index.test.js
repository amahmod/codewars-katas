const { assert } = require('chai')
const digPow = require('.')

describe('Tests', () => {
  it('test', () => {
    assert.strictEqual(digPow(89, 1), 1)
    assert.strictEqual(digPow(92, 1), -1)
    assert.strictEqual(digPow(46288, 3), 51)
  })
})
