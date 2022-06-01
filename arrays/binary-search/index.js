let binarySearch = function(nums, target) {
  let lowIndex = 0;
  let highIndex = nums.length - 1;

  while(lowIndex <= highIndex) {
    let midIndex = lowIndex + Math.floor((highIndex - lowIndex) / 2)

    if (nums[midIndex] === target) {
      return midIndex;
    }

    if (target < nums[midIndex]) {
      highIndex = midIndex - 1;
    } else {
      lowIndex = midIndex + 1;
    }
  }
  return -1;
};

let binarySearchRecursive = function(nums, target, low = 0, high = (nums.length - 1)) {
  if (low > high) {
    return -1;
  }
  
  // Finding the mid using floor division
  let mid = low + Math.floor((high - low) / 2);
  
  // Target value is present at the middle of the array
  if (nums[mid] === target) {
    return mid;
  } 

  // Target value is present in the low subarray
  else if (target < nums[mid]) {
    return binarySearchRecursive(nums, target, low, (mid - 1));
  } 
  
  // Target value is present in the high subarray
  else {
    return binarySearchRecursive(nums, target, (mid + 1), high);
  }
};

module.exports = {
  binarySearch,
  binarySearchRecursive
}