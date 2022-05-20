const { binarySearch, binarySearchRecursive }= require('./index')

test('checks binary search works', () => {
  expect(binarySearch([], 12)).toBe(-1);
});

test('checks binary search works', () => {
  expect(binarySearch([0, 1], 1)).toBe(1);
});

test('checks binary search works', () => {
  expect(binarySearch([1, 2, 3], 3)).toBe(2);
});

test('checks binary search works', () => {
  expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
});

test('checks binary search works', () => {
  expect(binarySearch([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
});

test('checks recursive binary search works', () => {
  expect(binarySearchRecursive([], 12)).toBe(-1);
});

test('checks recursive binary search works', () => {
  expect(binarySearchRecursive([0, 1], 1)).toBe(1);
});

test('checks recursive binary search works', () => {
  expect(binarySearchRecursive([1, 2, 3], 3)).toBe(2);
});

test('checks recursive binary search works', () => {
  expect(binarySearchRecursive([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
});

test('checks recursive binary search works', () => {
  expect(binarySearchRecursive([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
});