const chai = require('chai')
const isIsogram = require('.')

const { assert } = chai
chai.config.truncateThreshold = 0

describe('Tests', () => {
  it('test', () => {
    assert.strictEqual(isIsogram('Dermatoglyphics'), true)
    assert.strictEqual(isIsogram('isogram'), true)
    assert.strictEqual(isIsogram('aba'), false, 'same chars may not be adjacent')
    assert.strictEqual(isIsogram('moOse'), false, 'same chars may not be same case')
    assert.strictEqual(isIsogram('isIsogram'), false)
    assert.strictEqual(isIsogram(''), true, 'an empty string is a valid isogram')
  })
})
