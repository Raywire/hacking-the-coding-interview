// This function finds if the substring from index [start to last] is palindrome or not
let isPalindrome = function(input, start, last) {
  while (last > start) {
    if (input[start] != input[last]) {
      return false;
    }
    start++;
    last--;
  }
  return true;
};
  
// This function receives input string and returns palindromes in result 
// and count of palindromes
let findAllPalindromeSubstrings = function(input) {
  let palindrome = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = (i + 1); j < input.length; j++) {
      if (isPalindrome(input, i, j)) {
        // storing the palindromes in result
        palindrome.push(input.substring(i, j + 1));
      }
    }
  }
  return palindrome;
};

module.exports = findAllPalindromeSubstrings
