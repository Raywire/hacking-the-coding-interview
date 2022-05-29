const { findSumOfTwo, findSumOfTwoForSortedArray } = require('./index')

test('checks if finding pair with given sum works', () => {
  expect(findSumOfTwo([5, 7, 1, 2, 8, 4, 3], 3)).toEqual(true);
});

test('checks if finding pair with given sum works', () => {
  expect(findSumOfTwo([5, 7, 1, 2, 8, 4, 3], 20)).toEqual(false);
});

test('checks if finding pair with given sum works', () => {
  expect(findSumOfTwo([5, 7, 1, 2, 8, 4, 3], 1)).toEqual(false);
});

test('checks if finding pair with given sum works', () => {
  expect(findSumOfTwo([5, 7, 1, 2, 8, 4, 3], 2)).toEqual(false);
});

test('checks if finding pair with given sum works', () => {
  expect(findSumOfTwo([5, 7, 1, 2, 8, 4, 3], 7)).toEqual(true);
});

test('checks if finding pair with given sum works', () => {
  expect(findSumOfTwoForSortedArray([5, 7, 1, 2, 8, 4, 3], 3)).toEqual(true);
});

test('checks if finding pair with given sum works', () => {
  expect(findSumOfTwoForSortedArray([5, 7, 1, 2, 8, 4, 3], 20)).toEqual(false);
});

test('checks if finding pair with given sum works', () => {
  expect(findSumOfTwoForSortedArray([5, 7, 1, 2, 8, 4, 3], 1)).toEqual(false);
});

test('checks if finding pair with given sum works', () => {
  expect(findSumOfTwoForSortedArray([5, 7, 1, 2, 8, 4, 3], 2)).toEqual(false);
});

test('checks if finding pair with given sum works', () => {
  expect(findSumOfTwoForSortedArray([5, 7, 1, 2, 8, 4, 3], 7)).toEqual(true);
});
