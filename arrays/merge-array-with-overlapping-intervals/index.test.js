const { mergeIntervals, Pair } = require('./index')

test('checks if merging arrays with overlapping intervals works', () => {
  let v1 =  [new Pair(1, 5), new Pair(3, 7), new Pair(4, 6)];

  expect(mergeIntervals(v1)).toEqual([{ "first": 1, "second": 7 }]);
});

test('checks if merging arrays with overlapping intervals works', () => {
  let v1 =  [new Pair(1, 5), new Pair(4, 6), new Pair(6, 8), new Pair(11, 15)];

  expect(mergeIntervals(v1)).toEqual([{"first": 1, "second": 8}, {"first": 11, "second": 15}]);
});

test('checks if merging arrays with overlapping intervals works', () => {
  let v1 =  [new Pair(3, 7), new Pair(6, 8), new Pair(10, 12), new Pair(11, 15)];

  expect(mergeIntervals(v1)).toEqual([{"first": 3, "second": 8}, {"first": 10, "second": 15}]);
});

test('checks if merging arrays with overlapping intervals works', () => {
  let v1 =  [new Pair(1, 5)];

  expect(mergeIntervals(v1)).toEqual([{"first": 1, "second": 5}]);
});
