const chai = require('chai')
const revrot = require('.')

const { assert } = chai

function testing(actual, expected) {
  assert.strictEqual(actual, expected)
}

describe('revrot', function () {
  it('Basic tests', function () {
    testing(revrot('1234', 0), '')
    testing(revrot('', 0), '')
    testing(revrot('1234', 5), '')
    const s = '733049910872815764'
    testing(revrot(s, 5), '330479108928157')
  })
})
