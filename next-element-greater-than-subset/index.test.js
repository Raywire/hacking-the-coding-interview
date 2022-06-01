const { nextGreaterElement } = require('./index')

test('checks if shuffling an array works', () => {
  expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2, 5])).toEqual([5, 3, 5]);
});

test('checks if shuffling an array works', () => {
  expect(nextGreaterElement([4, 1, 2, 3], [1, 3, 4, 2, 5])).toEqual([5, 3, 5, 4]);
});

test('checks if shuffling an array works', () => {
  expect(nextGreaterElement([3, 4, 5], [5, 4, 3, 2, 1])).toEqual([-1, -1, -1]);
});

