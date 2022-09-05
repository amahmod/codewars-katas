const { assert } = require('chai')
const tops = require('.')

describe('Tests', () => {
  it('test', () => {
    assert.equal(tops(''), '')
    assert.equal(tops('12'), 2)
    assert.equal(tops('abcdefghijklmnopqrstuvwxyz12345'), '3pgb')
    assert.equal(tops('abcdefghijklmnopqrstuvwxyz1236789ABCDEFGHIJKLMN'), 'M3pgb')
  })
})
