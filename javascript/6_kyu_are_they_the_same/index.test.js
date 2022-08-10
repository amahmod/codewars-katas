const { assert } = require('chai')
const comp = require('.')

describe('Tests', () => {
  it('test', () => {
    const a1 = [121, 144, 19, 161, 19, 144, 19, 11]
    const a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]
    assert.equal(comp(a1, a2), true)
    assert.equal(
      comp(
        [2, 7, 4, 7, 3, 10, 5, 1, 8, 4, 7, 2, 0, 10, 5, 7, 7, 2, 0],
        [64, 0, 49, 0, 9, 25, 49, 49, 49, 16, 4, 4, 100, 100, 1, 25, 16, 50, 4]
      ),
      false
    )
    assert.equal(comp([], []), true)
  })
})
