const { largestNumber } = require('./index')

test('checks if arrange largest number works', () => {
  expect(largestNumber([21, 35, 20])).toEqual('352120');
});

test('checks if arrange largest number works', () => {
  expect(largestNumber([0, 5, 1, 3, 2, 4])).toEqual('543210');
});

test('checks if arrange largest number works', () => {
  expect(largestNumber([71, 5, 21, 52])).toEqual('7155221');
});

test('checks if arrange largest number works', () => {
  expect(largestNumber([0, 0, 0])).toEqual('0');
});

test('checks if arrange largest number works', () => {
  expect(largestNumber([1])).toEqual('1');
});
