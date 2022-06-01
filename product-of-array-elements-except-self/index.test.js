const { productExceptSelf } = require('./index')

test('checks if product of array elements except left works', () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

test('checks if product of array elements except left works', () => {
  expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([-0, 0, 9, -0, 0]);
});

test('checks if product of array elements except left works', () => {
  expect(productExceptSelf([2, 1])).toEqual([1, 2]);
});
