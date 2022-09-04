const { assert } = require('chai')
const mxdiflg = require('.')

describe('mxdiflg', function () {
  it('Basic tests', function () {
    const s1 = [
      'hoqq',
      'bbllkw',
      'oox',
      'ejjuyyy',
      'plmiis',
      'xxxzgpsssa',
      'xxwwkktt',
      'znnnnfqknaz',
      'qqquuhii',
      'dvvvwz'
    ]
    const s2 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww']
    assert.strictEqual(mxdiflg(s1, s2), 13)
  })
})
