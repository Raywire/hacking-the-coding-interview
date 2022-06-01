let firstMissingPositive = function(nums) {
  let length = nums.length;

  // Return 1 if it is not present in the array
  let contains = 0;
  for (let i = 0; i < length; i++)
    if (nums[i] == 1) {
        contains++;
        break;
    }

  if (contains == 0)
      return 1;

  // Replacing negative numbers, zeros and elements
  // greater than the length of the array by 1.
  for (let i = 0; i < length; i++)
    if ((nums[i] <= 0) || (nums[i] > length))
        nums[i] = 1;

  // Use index as a hash key and number sign as a presence indicator.
  // For example, if nums[3] is negative that means that number `3`
  // is present in the array. 
  // If nums[4] is positive - number 4 is missing.
  for (let i = 0; i < length; i++) {
    let a = Math.abs(nums[i]);
    
    // When you meet number a in the array, change the sign of a-th element.
    // In order to avoid changing the sign of the element to positive on
    // encountering the duplicates we will take the absolute of the value.

    if (a == length)
        nums[0] = - Math.abs(nums[0]);
    else
        nums[a] = - Math.abs(nums[a]);
  }

  // Now the index of the first positive number 
  // is equal to first missing positive.
  for (let i = 1; i < length; i++) {
    if (nums[i] > 0)
        return i;
  }

  // If this value is positive, it means that 
  // length is missing from the array
  if (nums[0] > 0)
    return length;

  return length + 1;
}

module.exports = {
  firstMissingPositive
}
