const { assert } = require('chai')
const isAnagram = require('.')

describe('Tests', () => {
  it('test', () => {
    assert.equal(isAnagram('foefet', 'toffee'), true, 'The word foefet is an anagram of toffee')
    assert.equal(isAnagram('Buckethead', 'DeathCubeK'), true, 'The word Buckethead is an anagram of DeathCubeK')
    assert.equal(isAnagram('Twoo', 'WooT'), true, 'The word Twoo is an anagram of WooT')
    assert.equal(isAnagram('dumble', 'bumble'), false, 'Characters do not match for test case dumble, bumble')
    assert.equal(isAnagram('ound', 'round'), false, 'Missing characters for test case ound, round')
    assert.equal(isAnagram('apple', 'pale'), false, 'Same letters, but different count')
  })
})
