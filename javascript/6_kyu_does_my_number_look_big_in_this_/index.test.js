const { assert } = require('chai')
const narcissistic = require('.')

describe('Narcissistic Function', function () {
  it('should find small numbers are all narcissistic', function () {
    assert.strictEqual(narcissistic(7), true, '7 is narcissistic')
  })

  it('should find these numbers are narcissistic', function () {
    assert.strictEqual(narcissistic(371), true, '371 is narcissistic')
  })
})
