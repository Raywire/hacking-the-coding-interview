const { firstMissingPositive } = require('./index')

test('checks if finding first missing positive number works', () => {
  expect(firstMissingPositive([5, 8, 2, 7, 1, 6, 3])).toEqual(4);
});

test('checks if finding first missing positive number works', () => {
  expect(firstMissingPositive([0, 5, 1, 3, 2, 4])).toEqual(6);
});

test('checks if finding first missing positive number works', () => {
  expect(firstMissingPositive([1, 2, 0])).toEqual(3);
});
