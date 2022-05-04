let palindromeIndex = (s) => {
  // check if word is palindrome
  const isPalindrome = (word) => word === word.split('').reverse().join('')
  if (isPalindrome(s)) return -1

  const sArray = s.split('')
  const sLength = s.length

  for(let i = 0; i < sLength; i++) {
    const newS = s.substring(0, i) + s.substring(i + 1)

    if (isPalindrome(newS)) {
      return i
    }
  }
  return -1
}

module.exports = palindromeIndex
