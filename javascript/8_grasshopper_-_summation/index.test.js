const summation = require('.')

describe('summation', () => {
  it('should return the correct total', () => {
    expect(summation(1)).toBe(1)
    expect(summation(8)).toBe(36)
  })
})
