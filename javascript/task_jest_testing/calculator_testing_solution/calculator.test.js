const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 1000000;
    actual = sum(750000, 250000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -15;
    actual = sum(-10, -5);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 5;
    actual = sum(0, 5);
    expect(actual).toBe(expected);
  });

});



describe('subtract', () => {

  test('can subtract a small positive number', () => {
    expected = 5;
    actual = subtract(10, 5);
    expect(actual).toBe(expected);
  });

  test('argument order matters', () => {
    expected = -5;
    actual = subtract(5, 10);
    expect(actual).toBe(expected);
  });

  test('subtracting a negative equivalent to adding', () => {
    expected = 15;
    actual = subtract(10, -5);
    expect(actual).toBe(expected);
  });

  test('subtracting zero', () => {
    expected = 10;
    actual = subtract(10, 0);
    expect(actual).toBe(expected);
  });

});


describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 50;
    actual = multiply(10, 5);
    expect(actual).toBe(expected);
  });

  test('can multiply large numbers', () => {
    expected = 5000000;
    actual = multiply(1000, 5000);
    expect(actual).toBe(expected);
  });

  test('multiplying by zero gives zero', () => {
    expected = 0;
    actual = multiply(10, 0);
    expect(actual).toBe(expected);
  });

});



describe('divide', () => {

  test('can divide small numbers', () => {
    expected = 2;
    actual = divide(10, 5);
    expect(actual).toBe(expected);
  });

  test('argument ordering matters', () => {
    expected = 0.5;
    actual = divide(5, 10);
    expect(actual).toBe(expected);
  });

  test('dividing by decimal equivalent to multiplication', () => {
    expected = 20;
    actual = divide(10, 0.5);
    expect(actual).toBe(expected);
  });

});



describe('modulus', () => {

  test('modulus with no remainder returns 0', () => {
    expected = 0;
    actual = modulus(10, 5);
    expect(actual).toBe(expected);
  });

  test('modulus with remainder returns remainder', () => {
    expected = 4;
    actual = modulus(10, 6);
    expect(actual).toBe(expected);
  });

});



describe('even', () => {

  test('even number returns true', () => {
    actual = even(10);
    expect(actual).toBeTruthy();
  });

  test('odd number returns false', () => {
    actual = even(5);
    expect(actual).toBeFalsy();
  });

});



describe('odd', () => {

  test('odd number returns true', () => {
    actual = odd(5);
    expect(actual).toBeTruthy();
  });

  test('even number returns false', () => {
    actual = odd(10);
    expect(actual).toBeFalsy();
  });

});
