const { assert } = require('chai')

const findMissingLetter = require('.')

describe('KataTests', function () {
  it('exampleTests', function () {
    assert.strictEqual(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e')
    assert.strictEqual(findMissingLetter(['O', 'Q', 'R', 'S']), 'P')
  })
})
