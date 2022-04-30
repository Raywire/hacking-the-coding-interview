## Statement
We are given an array of integers, nums, sorted in ascending order, and an integer value, target. If the target exists in the array, return its index. If the target does not exist, then return -1.

The binary search divides the input array by half at every step. After every step, either we find the index we are looking for, or we discard half of the array.

## Solution 1: Iterative
In the iterative approach, here is how the algorithm works:

At each step, consider the array between low and high indices.
Calculate the mid index.
If the element at the mid index is equal to the target value, we return mid.
If the element at mid is greater than the target:
Change the index high to mid - 1.
The value of low remains the same.
If the element at mid is less than the target:
Change low to mid + 1.
The value of high remains the same.
When the value of low is greater than the value of high, this indicates that the target doesn’t exist. Hence, -1 is returned.

## Time complexity
The time complexity of this solution is logarithmic, O(log n)

## Space complexity
The space complexity of this solution is constant, O(1)

## Solution 2: Recursive
In this solution, we will implement the binary search algorithm recursively. At each step, the search function calls itself using either the right half or the left half of the sorted array.
```js
let binarySearchRec = function(nums, target, low, high) {
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
    return binarySearchRec(nums, target, low, (mid - 1));
  } 
  
  // Target value is present in the high subarray
  else {
    return binarySearchRec(nums, target, (mid + 1), high);
  }
};

let binarySearch = function(nums, target) {
  return binarySearchRec(nums, target, 0, (nums.length - 1));
};
```

## Time complexity
The time complexity of this solution is logarithmic, O(log n)

## Space complexity
The space complexity of this solution is logarithmic, O(log n)
because the recursive approach consumes memory on the stack.
