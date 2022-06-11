class Solution {
  constructor(nums) {
      this.original = nums;
      this.n = nums.length;
  }
  reset() {
      return this.nums;
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

module.exports = {
  Solution
}
