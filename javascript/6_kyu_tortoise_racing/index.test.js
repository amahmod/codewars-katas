const chai = require('chai')
const race = require('.')

const { assert } = chai
chai.config.truncateThreshold = 0

describe('Tortoise Racing', () => {
  it('Basic tests', () => {
    assert.deepEqual(race(720, 850, 70), [0, 32, 18])
    assert.deepEqual(race(80, 91, 37), [3, 21, 49])
    assert.deepEqual(race(80, 100, 40), [2, 0, 0])
    assert.deepEqual(race(720, 850, 37), [0, 17, 4])
  })
})
