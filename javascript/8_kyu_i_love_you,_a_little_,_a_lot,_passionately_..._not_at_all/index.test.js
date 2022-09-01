const chai = require('chai')
const howMuchILoveYou = require('.')

const { assert } = chai
chai.config.truncateThreshold = 0

describe('howMuchILoveYou', function () {
  it('Basic tests', function () {
    assert.strictEqual(howMuchILoveYou(7), 'I love you')
    assert.strictEqual(howMuchILoveYou(3), 'a lot')
    assert.strictEqual(howMuchILoveYou(6), 'not at all')
  })
})
