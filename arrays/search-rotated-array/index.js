let binarySearchRotated = function(nums, target) {
  start = 0;
  end = nums.length - 1;

  if (start > end){
    return -1;
  }

  while (start <= end){
      
    // Finding the mid using floor division  
    mid = start + Math.floor((end - start) / 2);
    
    // Target value is present at the middle of the array
    if (nums[mid] == target){
      return mid;
    }
    
    // start to mid is sorted
    if (nums[start] <= nums[mid]){
      if(nums[start] <= target && target < nums[mid]){
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    // mid to end is sorted
    else{
      if(nums[mid] < target && target <= nums[end]){
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

let binarySearchRecursive = function(nums, start, end, target) {
  
  if (start > end) {
    return -1;
  }
  
  // Finding mid using floor division
  let mid = start + Math.floor((end - start) / 2);

  if (nums[mid] === target) {
    return mid;
  }
  
  // start to mid is sorted
  if (nums[start] <= nums[mid] && target <= nums[mid] && target >= nums[start]) {
    return binarySearchRecursive(nums, start, mid - 1, target);
  } 
  // mid to end is sorted
  else if (nums[mid] <= nums[end] && target >= nums[mid] && target <= nums[end]) {
    return binarySearchRecursive(nums, mid + 1, end, target);
  } 
  
  else if (nums[end] <= nums[mid]) {
    return binarySearchRecursive(nums, mid + 1, end, target);
  } 
  
  else if (nums[start] >= nums[mid]) {
    return binarySearchRecursive(nums, start, mid - 1, target);
  } 
  
  return -1;
};

let binarySearchRotatedRecursive = function(nums, target) {
  return binarySearchRecursive(nums, 0, nums.length - 1, target);
};

module.exports = {
  binarySearchRotated,
  binarySearchRotatedRecursive
}
