const { assert } = require('chai')
const String = require('.')

describe('Tests', () => {
  it('test', () => {
    const str = "How can mirrors be real if our eyes aren't real"
    assert.equal(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real")
  })
})
