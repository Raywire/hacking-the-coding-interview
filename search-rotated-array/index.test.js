const { binarySearchRotated, binarySearchRotatedRecursive } = require('./index')

test('checks if searching a rotated array works', () => {
  expect(binarySearchRotated([6, 7, 1, 2, 3, 4, 5], 3)).toEqual(4);
});

test('checks if searching a rotated array works', () => {
  expect(binarySearchRotated([6, 7, 1, 2, 3, 4, 5], 6)).toEqual(0);
});

test('checks if searching a rotated array works', () => {
  expect(binarySearchRotated([4, 5, 6, 1, 2, 3], 3)).toEqual(5);
});

test('checks if searching a rotated array works', () => {
  expect(binarySearchRotated([4, 5, 6, 1, 2, 3], 6)).toEqual(2);
});

test('checks if searching a rotated array works', () => {
  expect(binarySearchRotatedRecursive([6, 7, 1, 2, 3, 4, 5], 3)).toEqual(4);
});

test('checks if searching a rotated array works', () => {
  expect(binarySearchRotatedRecursive([6, 7, 1, 2, 3, 4, 5], 6)).toEqual(0);
});

test('checks if searching a rotated array works', () => {
  expect(binarySearchRotatedRecursive([4, 5, 6, 1, 2, 3], 3)).toEqual(5);
});

test('checks if searching a rotated array works', () => {
  expect(binarySearchRotatedRecursive([4, 5, 6, 1, 2, 3], 6)).toEqual(2);
});
