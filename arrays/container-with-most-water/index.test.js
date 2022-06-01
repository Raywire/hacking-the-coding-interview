const { maxWaterAreaContainer } = require('./index')

test('checks if getting maximum area of container works', () => {
  expect(maxWaterAreaContainer([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
});

test('checks if getting maximum area of container works', () => {
  expect(maxWaterAreaContainer([20, 30, 9, 69])).toEqual(60);
});

test('checks if getting maximum area of container works', () => {
  expect(maxWaterAreaContainer([13, 18, 12, 8])).toEqual(24);
});

test('checks if getting maximum area of container works', () => {
  expect(maxWaterAreaContainer([45, 32, 56, 99])).toEqual(135);
});

test('checks if getting maximum area of container works', () => {
  expect(maxWaterAreaContainer([23, 20])).toEqual(20);
});
