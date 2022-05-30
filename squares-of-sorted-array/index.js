let sortedSquares = function(nums){

  // find length of nums
  let n = nums.length;
  
  // declare an array to store result
  let result = [n];
  
  // declare two pointers
  let left = 0;
  let right = n - 1;
  
  let square = 0;
  let i = n - 1;
  
  while (i >= 0) {
    // comparing absolute values
    // 'square' stores the absolute non-decreasing number in order
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      square = nums[right];
      right -= 1;
    } else {
      square = nums[left]
      left += 1
    }
    // squaring the elements
    result[i] = square * square;
    i -= 1;
  }
  
  return result;
}

module.exports = {
  sortedSquares
}
