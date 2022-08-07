const { assert } = require('chai')
const uniqueInOrder = require('.')

describe('Tests', () => {
  it('test', () => {
    assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])
  })
})
