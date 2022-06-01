let reverseArray = function(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};

let rotateArray = function(nums, n) {
  let len = nums.length;

  // Normalizing the 'n' rotations
  n = n % len;
  if (n < 0) {
    // calculate the positive rotations needed.
    n = n + len;
  }
  // Let's partition the array based on rotations 'n'.
  reverseArray(nums, 0, len - 1);
  reverseArray(nums, 0, n - 1);
  reverseArray(nums, n, len - 1);

  return nums
};

module.exports = {
  rotateArray
};