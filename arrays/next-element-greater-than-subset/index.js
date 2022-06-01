function nextGreaterElement(nums1, nums2) {
  var stack = [];
  var map = new Map();

  for (let i = 0; i < nums2.length; i++) {
    // if the stack is not empty and the new element is greater than stack's top element, then add this to hashMap 
    while (stack.length != 0 && nums2[i] > stack[stack.length-1]){
      map.set(stack.pop(), nums2[i]);  
    }
    stack.push(nums2[i]);
  }

  // if there are elements in the stack for which we didn't find a greater number, map them to -1
  while (stack.length != 0){
    map.set(stack.pop(), -1);
  }

  var res = Array(nums1.length);
  // copy next greater elements to the output array
  // based on the requirement in nums1
  for (let i = 0; i < nums1.length; i++) {
    res[i] = map.get(nums1[i]);  
  }
  return res;
}

module. exports = {
  nextGreaterElement
}
