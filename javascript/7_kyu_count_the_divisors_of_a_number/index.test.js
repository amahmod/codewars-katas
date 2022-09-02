const { assert } = require('chai')
const getDivisorsCnt = require('.')

describe('Tests', () => {
  it('test', () => {
    assert.equal(getDivisorsCnt(1), 1)
    assert.equal(getDivisorsCnt(10), 4)
    assert.equal(getDivisorsCnt(11), 2)
    assert.equal(getDivisorsCnt(54), 8)
  })
})
