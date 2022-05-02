const findAllPalindromeSubstrings = require('./index')

test('checks if find all palindrome works', () => {
  expect(findAllPalindromeSubstrings('aabbbaa')).toStrictEqual([ 'aa', 'aabbbaa', 'abbba', 'bb', 'bbb', 'bb', 'aa' ]);
});

test('checks if find all palindrome works', () => {
  expect(findAllPalindromeSubstrings('xxyyxxy')).toStrictEqual([ 'xx', 'xxyyxx', 'xyyx', 'yy', 'yxxy', 'xx' ]);
});

test('checks if find all palindrome works', () => {
  expect(findAllPalindromeSubstrings('321230990')).toStrictEqual([ '32123', '212', '0990', '99' ]);
});

test('checks if find all palindrome works', () => {
  expect(findAllPalindromeSubstrings('educative')).toStrictEqual([]);
});

test('checks if find all palindrome works', () => {
  expect(findAllPalindromeSubstrings('edueu')).toStrictEqual(['ueu']);
});