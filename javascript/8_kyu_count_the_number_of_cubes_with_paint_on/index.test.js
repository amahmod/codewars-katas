const { assert } = require('chai')
const countSquares = require('.')

describe('Sample tests', () => {
  it('Fixed tests', () => {
    assert.strictEqual(countSquares(5), 152)
    assert.strictEqual(countSquares(16), 1538)
    assert.strictEqual(countSquares(23), 3176)
  })
})
