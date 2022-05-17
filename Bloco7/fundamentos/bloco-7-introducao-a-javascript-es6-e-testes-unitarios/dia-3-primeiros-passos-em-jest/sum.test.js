const sum = require('./sum');
const sum9 = require('./sum');
const sum0 = require('./sum');
const sumStringError = require('./sum');

it ("sums two values", () => {
    expect(sum(2, 3)).toEqual(5);
  });

it ('sums two values nine', () => {
    expect(sum9(4, 5)).toEqual(9);
})

it ('sum two values zero', () => {
    expect(sum0(0, 0)).toEqual(0);
})

it ('Error String', () => {
    expect(() => sumStringError(Number, Number)).toThrow();
})