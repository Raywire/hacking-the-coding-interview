let sortColors = function (arr){
  
  // Start element of array
  let start = 0;
  // Current element of array
  let current = 0;
  // Last element of array 
  let end = arr.length - 1;
  
  let tmp;

  while(current <= end && start < end){
      if(arr[current] == 0){
        // Swap the elements at start and current indexes
        // Increment start and current indexes by one
        tmp = arr[start];
        arr[start++] = arr[current];
        arr[current++] = tmp;
      }
      else if (arr[current] == 2)  {
        // Swap the elements at end and current indexes
        // Decrement end index back by one
        tmp = arr[current];
        arr[current] = arr[end];
        arr[end--] = tmp;
      }
      else current++; // Simply increment the current index if it is pointing to 1
  }
  
  return arr
};

module.exports = {
  sortColors
}
