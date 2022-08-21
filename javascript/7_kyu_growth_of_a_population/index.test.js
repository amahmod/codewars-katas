const { assert } = require('chai')
const nbYear = require('.')

describe('nbYear', function () {
  it('Basic tests', function () {
    assert.equal(nbYear(1000, 2, 50, 1200), 3)
    assert.equal(nbYear(1500, 5, 100, 5000), 15)
    assert.equal(nbYear(1500000, 2.5, 10000, 2000000), 10)
    assert.equal(nbYear(1500000, 0.25, 1000, 2000000), 94)
  })
})
