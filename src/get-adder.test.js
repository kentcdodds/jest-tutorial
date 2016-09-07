import getAdder from './get-adder'

test('returns a function that accepts a single thing to be added', () => {
  const add1 = getAdder(1)
  expect(add1(2)).toBe(3)
})
