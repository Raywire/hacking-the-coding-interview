const { findLowIndex, findHighIndex } = require('./index')

let nums = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6];
const target = 5;

test('checks if finding low index works', () => {
  expect(findLowIndex(nums, target)).toEqual(15);
});

test('checks if finding high index works', () => {
  expect(findHighIndex(nums, target)).toEqual(17);
});
