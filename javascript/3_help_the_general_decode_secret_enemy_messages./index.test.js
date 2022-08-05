const device = require('.')

describe('Tests', () => {
  it('test', () => {
    expect(device.decode('yFNYhdmEdViBbxc40,ROYNxwfwvjg5CHUYUhiIkp2CMIvZ.1qPz')).toBe(
      'The quick brown fox jumped over the lazy developer.'
    )
  })
})
