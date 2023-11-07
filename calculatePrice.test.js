const calculatePrice = require('./calculatePrice');

test('Test user buying A product', () => {
  expect(calculatePrice.calculateProductPrice(55, 'A', false, false)).toBe(70);
});