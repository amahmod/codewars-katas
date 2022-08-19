const { assert } = require('chai')
const incrementString = require('.')

describe('Tests', () => {
  it('test', () => {
    assert.equal(incrementString('foobar000'), 'foobar001')
    assert.equal(incrementString('foo'), 'foo1')
    assert.equal(incrementString('foobar001'), 'foobar002')
    assert.equal(incrementString('foobar99'), 'foobar100')
    assert.equal(incrementString('foobar099'), 'foobar100')
    assert.equal(incrementString(''), '1')
  })
})
