## Solution
We’ll solve this problem using a stack and a hashmap (map). The hashmap is used to store the result for every number in nums2. Let’s walk through the solution step-by-step:

* First, we iterate over the nums2 array from the left.
* If an element in nums2 is less than the previous element, we push an element on the top of the stack.
* If we find an element in nums2 greater than the top of the stack, we keep popping the element from the stack until we find an element on the top of the stack greater than the nums2 element.
* We put the popped element into the hashmap with its next greater number.
* When we find an element in nums2 greater than all stack elements, we put this element as the next greater element for each stack element(s) in the map.
* Eventually, when there is no next greater element, we reach the end of the nums2 array. We pop the remaining elements from the stack and put their entries in a hashmap with a -1.
* In the end, we iterate over the nums1 array to find the corresponding results from the hashmap.

## Time complexity
The time complexity of this solution is 
O(n) because we traverse the nums2 array only once.

## Space complexity
The hashmap stores the 
n key-pairs while the stack also contains n elements. So, the space complexity of this solution is O(n).