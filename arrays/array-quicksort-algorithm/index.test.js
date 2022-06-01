const { quickSort } = require('./index')

test('checks if quick sort for an array works', () => {
  expect(quickSort([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 8]);
});

test('checks if quick sort for an array works', () => {
  expect(quickSort([55, 23, 26, 2, 18, 78, 23, 8, 2, 3])).toEqual([2, 2, 3, 8, 18, 23, 23, 26, 55, 78]);
});

test('checks if quick sort for an array works', () => {
  expect(quickSort([1])).toEqual([1]);
});

test('checks if quick sort for an array works', () => {
  expect(quickSort([9, 8, 7, 2, 3, 1])).toEqual([1, 2, 3, 7, 8, 9]);
});

test('checks if quick sort for an array works', () => {
  expect(quickSort([10, 20, 30, -1, -2])).toEqual([-2, -1, 10, 20, 30]);
});
