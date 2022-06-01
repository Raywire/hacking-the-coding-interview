const { Solution } = require('./index')

test('checks if shuffling an array works', () => {
  let numsToShuffle = [1, 2, 3];
  let solution = new Solution(numsToShuffle);
  expect(solution.shuffle()).toEqual(expect.arrayContaining(numsToShuffle));
});
