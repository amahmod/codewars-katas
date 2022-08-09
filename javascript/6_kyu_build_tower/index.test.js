const { assert } = require('chai')
const towerBuilder = require('.')

describe('Tests', () => {
  it('test', () => {
    assert.deepEqual(towerBuilder(1), ['*'])
    assert.deepEqual(towerBuilder(2), [' * ', '***'])
    assert.deepEqual(towerBuilder(3), ['  *  ', ' *** ', '*****'])
  })
})
