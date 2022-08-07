const { assert } = require('chai')
const formatDuration = require('.')

describe('Tests', () => {
  it('test', () => {
    assert.deepEqual(formatDuration(1), '1 second')
    assert.deepEqual(formatDuration(62), '1 minute and 2 seconds')
    assert.deepEqual(formatDuration(120), '2 minutes')
    assert.deepEqual(formatDuration(3600), '1 hour')
    assert.deepEqual(formatDuration(3662), '1 hour, 1 minute and 2 seconds')
  })
})
