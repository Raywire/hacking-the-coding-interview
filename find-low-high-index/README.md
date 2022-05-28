## Solution
Linearly scanning the sorted array for low and high indices is highly inefficient since our array size can be in the millions. Instead, we will use a slightly modified binary search to find the low and high indices of a given target.

We need to binary search twice: the first time to find the low index and a second time to find the high index.

### Low index
Let’s look at the algorithm for finding the low index:

At every step, consider the array between low and high indices and calculate the mid index.
If the element at the mid index is less than the target, the value of low becomes mid + 1 (to move towards the start of range). The value of high remains the same.
If the element at mid is greater or equal to the target, the value of high becomes mid - 1. The value of low remains the same.
When the value of low is greater than high, low would point to the first occurrence of the target.
If the element at low does not match the target, return -1. It means that the target doesn’t exist in the array.

### High index
Similarly, we can find the high index by slightly modifying the above algorithm:

If the value at the mid index is less than or equal to the target, the value of low becomes mid + 1.
If the value at mid is greater than the target, the value of high becomes mid - 1.
