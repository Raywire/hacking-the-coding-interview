let largestNumber = function(nums){
  // convert number to string
  const numsStr = nums.map(e => e.toString());
  
  // function for string comparision
  let compareStrings = (first, second) => `${second}${first}` - `${first}${second}`;
  
  // sorting array
  // Takes two strings and returns true or
  // false by comparing the integers formed by the 
  // concatenation of these strings, i.e., whether
  // they are greater or less than each other.
  let largest = numsStr.sort(compareStrings);
  
  // We are returning the concatenated string if the first character 
  // of our concatenated string is not zero which can be in case we
  // have these kinds of strings e.g., "00", "000". In these cases, we
  // return "0".
  if(largest[0] === '0') 
    return '0';
  else
    // final result after concatenating the sorted numbers
    return largest.join('');
};

module.exports = {
  largestNumber
}
