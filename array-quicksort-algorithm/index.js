// Using Hoare's partitioning scheme
let partition = function(nums, low, high) {
  // Initializing pivot's index to low
  let pivotValue = nums[low];
  let i = low;
  let j = high;

  // Loop till i pointer crosses j pointer
  while (i < j) {
    // Increment the 'i' pointer till it finds an element greater than pivot
    while (i <= high && nums[i] <= pivotValue) {
      i++;
    }
    // Decrement the 'j' pointer till it finds an element less than pivot
    while (nums[j] > pivotValue) {
      j--;
    }
    // Swap the numbers on 'i' and 'j'
    if (i < j) {
      // Swap pivot element with element on 'j' pointer.
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    } 
  }

  nums[low] = nums[j];
  nums[j] = pivotValue;

  // return the pivot index
  return j;
};

// Recursive function implementing QuickSort
let quickSortRec = function(nums, low, high) {
  if (high > low) {
    let pivotIndex = partition(nums, low, high);
    // Sort elements before partition 
    quickSortRec(nums, low, pivotIndex - 1);
    // Sort elements after partition
    quickSortRec(nums, pivotIndex + 1, high);
  }
  return nums
};

let quickSort = function(nums) {
  return quickSortRec(nums, 0, nums.length - 1);
};

module.exports = {
  quickSort
}
