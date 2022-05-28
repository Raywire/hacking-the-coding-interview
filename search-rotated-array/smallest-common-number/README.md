## Solution
- The arrays are sorted in ascending order. We will use three iterators simultaneously to traverse each of the arrays. We can start traversing each array from the 
0th index, which always has the smallest value.
- If the values pointed to by the three iterators are equal, that is the solution. Since the arrays are sorted in ascending order, that value must be the smallest value present in all of the arrays.
- Otherwise, we see which of the three iterators points to the smallest value and increment that iterator so that it points to the next index.
- If any of the three iterators reaches the end of the array before we find the common number, we return -1.