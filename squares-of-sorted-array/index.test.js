const { sortedSquares } = require('./index')

test('checks if squares of sorted array works', () => {
  expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
});

test('checks if squares of sorted array works', () => {
  expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
});

test('checks if squares of sorted array works', () => {
  expect(sortedSquares([-100, 100])).toEqual([10000, 10000]);
});

test('checks if squares of sorted array works', () => {
  expect(sortedSquares([-5])).toEqual([25]);
});

test('checks if squares of sorted array works', () => {
  expect(sortedSquares([5])).toEqual([25]);
});
