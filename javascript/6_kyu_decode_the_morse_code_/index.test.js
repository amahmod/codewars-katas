const { assert } = require('chai')
const decodeMorse = require('.')

describe('Example from description', function () {
  test('should match morse code', () => {
    assert.strictEqual(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
    assert.strictEqual(decodeMorse('...---...'), 'SOS')
  })
})
