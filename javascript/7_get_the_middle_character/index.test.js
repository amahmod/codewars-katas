const { assert } = require('chai')
const getMiddle = require('.')

describe('GetMiddle', function () {
  it('Tests', function () {
    assert.strictEqual(getMiddle('test'), 'es')
    assert.strictEqual(getMiddle('testing'), 't')
    assert.strictEqual(getMiddle('middle'), 'dd')
    assert.strictEqual(getMiddle('A'), 'A')
  })
})
