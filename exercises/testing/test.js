// write some tests
const { fixId } = require('./users')
describe('users', () => {
  test('fixId returns id as Int', () => {
    expect(fixId('200')).toBe(200)
  })
})
