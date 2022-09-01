const { assert } = require('chai')
const position = require('.')

describe('Tests', () => {
  it('test', () => {
    assert.equal(position('a'), 'Position of alphabet: 1')
    assert.equal(position('z'), 'Position of alphabet: 26')
    assert.equal(position('e'), 'Position of alphabet: 5')
  })
})
