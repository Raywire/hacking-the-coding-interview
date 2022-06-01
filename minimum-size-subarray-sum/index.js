let minSubArrayLen = function(target, nums) {

  //  Initializing result to a max number
  let result = Number.MAX_VALUE;
  
  //  Initialize left pointer to 0 and sum to 0
  let left = 0;
  let sum = 0;
  
  //  Iterate over the nums array
  for(let i=0;i < nums.length; i++){
    sum += nums[i];
    //  check if we can remove elements from the left side 
    // of the sub-array while still satisfying the target condition
    while (sum >= target){
      let currSubArrSize = (i + 1) - left;
      result = Math.min(result, currSubArrSize);
      sum -= nums[left];
      left += 1;
    }
  }
    
  if (result != Number.MAX_VALUE){
    return result;
  }
  else {
    return 0;
  }
};

module.exports = {
  minSubArrayLen
}
