const chai = require('chai')
const maps = require('.')

const { assert } = chai
chai.config.truncateThreshold = 0

describe('Basic tests', () => {
  it('Fixed tests', () => {
    assert.deepEqual(maps([1, 2, 3]), [2, 4, 6])
    assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8])
    assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4])
  })
})
