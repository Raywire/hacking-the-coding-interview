const { sortColors } = require('./index')

test('checks if sort colors works', () => {
  expect(sortColors([2,0,2,1,1,0])).toEqual([0, 0, 1, 1, 2, 2]);
});

test('checks if sort colors works', () => {
  expect(sortColors([2,0,2,1,1,0,1,0,1,0,2])).toEqual([0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2]);
});
