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

module.exports = binarySearch;