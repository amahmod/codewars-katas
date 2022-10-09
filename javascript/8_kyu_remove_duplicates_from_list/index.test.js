const chai = require('chai')

const { assert } = chai
const distinct = require('.')

chai.config.truncateThreshold = 0

describe('Sample Tests', () => {
  it('test', () => {
    assert.deepEqual(distinct([1]), [1])
    assert.deepEqual(distinct([1, 2]), [1, 2])
    assert.deepEqual(distinct([1, 1, 2]), [1, 2])
  })
})
