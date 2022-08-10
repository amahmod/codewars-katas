const { assert } = require('chai')
const humanYearsCatYearsDogYears = require('.')

describe('Example Tests', function () {
  it('one', function () {
    assert.deepEqual(humanYearsCatYearsDogYears(1), [1, 15, 15])
  })

  it('two', function () {
    assert.deepEqual(humanYearsCatYearsDogYears(2), [2, 24, 24])
  })

  it('ten', function () {
    assert.deepEqual(humanYearsCatYearsDogYears(10), [10, 56, 64])
  })
})
