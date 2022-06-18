class Solution {
  constructor(nums) {
      this.original = nums;
      this.n = nums.length;
  }
  reset() {
      return this.original;
  }
  shuffle() {
      let shuffled = [];
      // make a copy of the original
      this.original.forEach((v, index) => shuffled[index] = v);  
      
      // initialize unshuffled left part size
      let leftSize = this.n;

      for (let i = 0; i < shuffled.length; i++) {
          // draw from the bag at random
          let j = Math.floor(Math.random() * leftSize) + i;
          
          // put this element at current position
          // and put the original element in the bag
          let tmp = shuffled[i];
          shuffled[i] = shuffled[j];
          shuffled[j] = tmp;
          
          // reduce the size of the un-shuffled part of the array
          leftSize--;
      }
      return shuffled;
  }
}

/**
 * @param {number[]} nums
 */
var Solution2 = function(nums) {
  this.original = nums;
  this.n = nums.length;
};

/**
* @return {number[]}
*/
Solution.prototype.reset = function() {
  return this.original;
};

/**
* @return {number[]}
*/
Solution.prototype.shuffle = function() {
    let shuffled = [];
    // make a copy of the original
    this.original.forEach((v, index) => shuffled[index] = v);  
    
    // initialize unshuffled left part size
    let leftSize = this.n;

    for (let i = 0; i < shuffled.length; i++) {
        // draw from the bag at random
        let j = Math.floor(Math.random() * leftSize) + i;
        
        // put this element at current position
        // and put the original element in the bag
        let tmp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = tmp;
        
        // reduce the size of the un-shuffled part of the array
        leftSize--;
    }
    return shuffled;
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/

module.exports = {
  Solution
}
