const { assert } = require('chai')
const sumDigits = require('.')

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(sumDigits(10), 1)
    assert.strictEqual(sumDigits(99), 18)
    assert.strictEqual(sumDigits(-32), 5)
  })
})
