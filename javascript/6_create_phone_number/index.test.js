const chai = require('chai')
const createPhoneNumber = require('.')

const { assert } = chai
chai.config.truncateThreshold = 0

describe('Create Phone Number', () => {
  it('Fixed tests', () => {
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890')
    assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), '(111) 111-1111')
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890')
  })
})
