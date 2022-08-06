const { assert } = require('chai')
const solution = require('.')

function test(n, expected) {
  const actual = solution(n)
  it(`Expected ${expected}, got ${actual}`, () => {
    assert.strictEqual(actual, expected)
  })
}

describe('basic tests', function () {
  test(10, 23)
})
