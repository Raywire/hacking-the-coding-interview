const { moveZerosToLeft } = require('./index')

test('checks if moving zeros to the left works', () => {
  expect(moveZerosToLeft([1, 10, 20, 0, 59, 63, 0, 88, 0])).toEqual([0, 0, 0, 1, 10, 20, 59, 63, 88]);
});

test('checks if moving zeros to the left works', () => {
  expect(moveZerosToLeft([1, 0, 2, 3, 0])).toEqual([0, 0, 1, 2, 3]);
});

test('checks if moving zeros to the left works', () => {
  expect(moveZerosToLeft([0])).toEqual([0]);
});

test('checks if moving zeros to the left works', () => {
  expect(moveZerosToLeft([-1, 0, 0, -2, 9])).toEqual([0, 0, -1, -2, 9]);
});

test('checks if moving zeros to the left works', () => {
  expect(moveZerosToLeft([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test('checks if moving zeros to the left works', () => {
  expect(moveZerosToLeft([2])).toEqual([2]);
});
