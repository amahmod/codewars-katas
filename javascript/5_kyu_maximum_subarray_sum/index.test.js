const { assert } = require('chai')
const maxSequence = require('.')

describe('maxSequence', () => {
  it('should work on an empty array', () => {
    assert.equal(maxSequence([]), 0)
  })
  it('should work on the example', () => {
    assert.equal(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6)
    // assert.equal(maxSequence([7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43]), 155)
  })
})
