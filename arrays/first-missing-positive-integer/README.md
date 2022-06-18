## Algorithm

Now everything is ready to write down the algorithm.

*  Check if 1 is present in the array. If not, you're done and 1 is the answer.
* Replace negative numbers, zeros, and numbers larger than n by 1s.
* Walk along the array. Change the sign of a-th element if you meet number a. Be careful with duplicates : do sign change only once. Use index 0 to save an information about presence of number n since index n is not available.
* Walk again along the array. Return the index of the first positive element.
* If nums[0] > 0 return n.
* If on the previous step you didn't find the positive element in nums, that means that the answer is n + 1.

## Complexity Analysis

+ Time complexity : O(N) since all we do here is four walks along the array of length N.
+ Space complexity : O(1) since this is a constant space solution.