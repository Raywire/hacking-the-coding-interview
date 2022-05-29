const { findBuySellStockPrices } = require('./index')

test('checks if finding stock buy sell points works', () => {
  expect(findBuySellStockPrices([1, 2, 3, 4, 3, 2, 1, 2, 5])).toEqual([1, 5]);
});

test('checks if finding stock buy sell points works', () => {
  expect(findBuySellStockPrices([8, 6, 5, 4, 3, 2, 1])).toEqual([6, 5]);
});

test('checks if finding stock buy sell points works', () => {
  expect(findBuySellStockPrices([12, 30, 40, 90, 110])).toEqual([12, 110]);
});

test('checks if finding stock buy sell points works', () => {
  expect(findBuySellStockPrices([2])).toEqual();
});
