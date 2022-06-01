const { minSubArrayLen } = require('./index')

test('checks if minimum size subarray sum works', () => {
  expect(minSubArrayLen(7, [2,3,1,2,4,3])).toEqual(2);
});

test('checks if minimum size subarray sum works', () => {
  expect(minSubArrayLen(4, [1,4,4])).toEqual(1);
});

test('checks if minimum size subarray sum works', () => {
  expect(minSubArrayLen(11, [1,1,1,1,1,1,1,1])).toEqual(0);
});
