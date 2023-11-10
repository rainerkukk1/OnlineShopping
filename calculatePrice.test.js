const calculatePrice = require('./calculatePrice');

describe('Test age restriction', () => { 
  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(20, 'A', false, false)).toBe("Customer does not meet the purchase requirements.");
  });


  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(21, 'A', false, false)).toBe(20);
  });

  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(21, 'B', false, false)).toBe(20);
  });

  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(21, 'C', false, false)).toBe("Customer does not meet the purchase requirements.");
  });

  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(25, 'C', false, false)).toBe("Customer does not meet the purchase requirements.");
  });

  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(25, 'D', false, false)).toBe("Customer does not meet the purchase requirements.");
  });

  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(26, 'C', false, false)).toBe(20);
  });

  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(26, 'D', false, false)).toBe(24);
  });
});

describe('Test user is a member', () => {
  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(26, 'D', false, true)).toBe(21);
  });

  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(26, 'D', false, false)).toBe(24);
  });

  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(26, 'D', true, false)).toBe(174);
  });

  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(26, 'D', true, true)).toBe(158);
  });

  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(26, 'B', true, true)).toBe(154);
  });

  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(26, 'B', true, false)).toBe(170);
  });

});
