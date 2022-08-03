const bmi = require('.')

describe('Tests', () => {
  it('test', () => {
    expect(bmi(80, 1.8)).toBe('Normal')
  })
})
