const { assert } = require('chai')
const capitalize = require('.')

describe('Basic tests', () => {
  test('should work', () => {
    assert.deepEqual(capitalize('abcdef'), ['AbCdEf', 'aBcDeF'])
    assert.deepEqual(capitalize('codewars'), ['CoDeWaRs', 'cOdEwArS'])
    assert.deepEqual(capitalize('abracadabra'), ['AbRaCaDaBrA', 'aBrAcAdAbRa'])
    assert.deepEqual(capitalize('codewarriors'), ['CoDeWaRrIoRs', 'cOdEwArRiOrS'])
  })
})
