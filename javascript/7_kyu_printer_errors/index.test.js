const { assert } = require('chai')
const printerError = require('.')

describe('printerError', function () {
  it('Basic tests', function () {
    const s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'
    assert.equal(printerError(s), '3/56')
    assert.equal(printerError('aaabbbbhaijjjm'), '0/14')
  })
})
