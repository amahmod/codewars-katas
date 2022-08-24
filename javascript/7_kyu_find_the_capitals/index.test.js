const chai = require('chai')
const capitals = require('.')

const { assert } = chai
chai.config.truncateThreshold = 0

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.deepEqual(capitals('CodEWaRs'), [0, 3, 4, 6])
  })
})
