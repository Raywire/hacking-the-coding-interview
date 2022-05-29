const { findLeastCommonNumber } = require('./index')

test('checks if finding least common number works', () => {
  let v1 = [6, 7, 10, 25, 30, 63, 64];
  let v2 = [0, 4, 5, 6, 7, 8, 50];
  let v3 = [1, 6, 10, 14];
  expect(findLeastCommonNumber(v1, v2, v3)).toEqual(6);
});
