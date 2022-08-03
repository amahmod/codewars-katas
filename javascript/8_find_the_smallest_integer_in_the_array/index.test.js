const chai = require('chai')

const { assert } = chai
const SmallestIntegerFinder = require('.')

chai.config.truncateThreshold = 0

describe('Smallest Integer Tests', () => {
  const sif = new SmallestIntegerFinder()
  it('Fixed Tests', () => {
    assert.strictEqual(sif.findSmallestInt([78, 56, 232, 12, 8]), 8, 'Should return the smallest int 8')
    assert.strictEqual(sif.findSmallestInt([78, 56, 232, 12, 18]), 12, 'Should return the smallest int 12')
    assert.strictEqual(sif.findSmallestInt([78, 56, 232, 412, 228]), 56, 'Should return the smallest int 56')
    assert.strictEqual(sif.findSmallestInt([78, 56, 232, 12, 0]), 0, 'Should return the smallest int 0')
    assert.strictEqual(sif.findSmallestInt([1, 56, 232, 12, 8]), 1, 'Should return the smallest int 1')
  })
})
