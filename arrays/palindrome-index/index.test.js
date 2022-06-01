const palindromeIndex = require(".");

test('checks if palindrome index works', () => {
  expect(palindromeIndex('ababab')).toEqual(0);
});

test('checks if palindrome index works', () => {
  expect(palindromeIndex('a')).toEqual(-1);
});

test('checks if palindrome index works', () => {
  expect(palindromeIndex('')).toEqual(-1);
});

test('checks if palindrome index works', () => {
  expect(palindromeIndex('acbdbba')).toEqual(-1);
});

test('checks if palindrome index works', () => {
  expect(palindromeIndex('aaab')).toEqual(3);
});

test('checks if palindrome index works', () => {
  expect(palindromeIndex('acbba')).toEqual(1);
});

test('checks if palindrome index works', () => {
  expect(palindromeIndex('racecara')).toEqual(7);
});