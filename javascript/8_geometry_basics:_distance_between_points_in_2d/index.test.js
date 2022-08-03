const distanceBetweenPoints = require('.')

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

describe('Solution', () => {
  it('should pass these sample tests', () => {
    expect(distanceBetweenPoints(new Point(3, 3), new Point(3, 3))).toBe(0)
    expect(distanceBetweenPoints(new Point(1, 6), new Point(4, 2))).toBe(5)
    expect(+distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7)).toFixed(6)).toBe(10.728001)
  })
})
