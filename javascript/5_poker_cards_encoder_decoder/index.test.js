const { assert } = require('chai')

const { encode, decode } = require('.')

describe('sample tests', function () {
  it('should work for decoding', function () {
    assert.deepEqual(decode([7, 22, 51]), ['8c', 'Td', 'Ks'])
    assert.deepEqual(decode([13, 30, 37]), ['Ad', '5h', 'Qh'])
    assert.deepEqual(decode([7, 51, 22]), ['8c', 'Td', 'Ks'])
    assert.deepEqual(decode([13, 37, 30]), ['Ad', '5h', 'Qh'])
    assert.deepEqual(decode([50, 6, 13, 30, 37]), ['7c', 'Ad', '5h', 'Qh', 'Qs'])
  })

  it('should work for encoding', function () {
    assert.deepEqual(encode(['5h', '7c', 'Qh', 'Qs', 'Ad']), [6, 13, 30, 37, 50])
    assert.deepEqual(encode(['Td', '8c', 'Ks']), [7, 22, 51])
    assert.deepEqual(encode(['Qh', '5h', 'Ad']), [13, 30, 37])
    assert.deepEqual(encode(['8c', 'Ks', 'Td']), [7, 22, 51])
    assert.deepEqual(encode(['Qh', 'Ad', '5h']), [13, 30, 37])
  })
})
