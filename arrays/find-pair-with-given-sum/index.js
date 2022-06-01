let findSumOfTwo = function(nums, val) {

  // Initializing a hash set
  let foundValues = new Set();

  // Traversing the nums list for each element
  for (let element in nums) {

    // If (val - ele) is present in the hash set, there is 
    // at least one value among those already traversed that, 
    // added to ele, equals the target value
    if (foundValues.has(val - nums[element])) {
      return true;
    }

    // In case the current element does not pair up with one of those 
    // already scanned, we add it to the hash set
    foundValues.add(nums[element]);
  }
  // Return False if no sum is found
  return false;
};

let findSumOfTwoForSortedArray = function(nums, val) {

  // Sort the array
  nums = nums.sort();
  
  // Initializing markers i and j
  let i = 0;
  let j = nums.length - 1;
  
  while (i < j) {
    // Adding two marker's elements
    let numsSum = nums[i] + nums[j];

    // Return True if nums_sum is equal to the val
    if (numsSum === val) {
      return true;
    }

    // Updating low-end marker 'i' if numsSum is less than the target value
    if (numsSum < val) {
      i++;
    } 
    // Updating high-end marker 'j' if numsSum is greater than the target value
    else {
      j--;
    }
  }
  // Return False if no sum is found
  return false;
};

module.exports = {
  findSumOfTwo,
  findSumOfTwoForSortedArray
}