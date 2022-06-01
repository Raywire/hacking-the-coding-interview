const { reverseSentence } = require('./index')

test('checks reverse sentence works', () => {
  expect(reverseSentence('We love Javascript')).toBe('Javascript love We');
});

test('checks reverse sentence works', () => {
  expect(reverseSentence('World Hello')).toBe('Hello World');
});

test('checks reverse sentence works', () => {
  expect(reverseSentence('To be or not to be')).toBe('be to not or be To');
});

test('checks reverse sentence works', () => {
  expect(reverseSentence('You are amazing')).toBe('amazing are You');
});

test('checks reverse sentence works', () => {
  expect(reverseSentence('Hey')).toBe('Hey');
});
