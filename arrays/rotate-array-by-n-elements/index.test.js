const { rotateArray } = require('./index')

test('checks reversing array by n elements works', () => {
  expect(rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], 2)).toStrictEqual([9, 40,  1, 10, 20, 0, 59, 86, 32, 11]);
});