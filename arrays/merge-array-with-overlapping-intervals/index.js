class Pair { 
  constructor(first, second) { 
    this.first = first; 
    this.second = second; 
  } 
}

let mergeIntervals = function(v) {
  // If the list is empty
  if (!v || v.length == 0) {
    return;
  }

  // sort the array in ascending order
  v.sort((a, b) => a.first - b.first)

  let result = [];

  // Adding pair in the result list 
  result.push(new Pair(v[0].first, v[0].second));

  for (let i = 0; i < v.length; i++) {
    // Getting the recent added pair in the result list
    let recentAddedPair = result[result.length - 1]
    
    // Getting and initializing input pair
    let currentStart = v[i].first;
    let currentEnd = v[i].second;
    
    // Getting and initializing recently added pair from result list
    let prevEnd = recentAddedPair.second;

    // Overlapping condition
    if (prevEnd >= currentStart) {
      recentAddedPair.second = Math.max(currentEnd, prevEnd);
    } 
    // No overlapping
    else {
      result.push(new Pair(currentStart, currentEnd));
    }
  }
  return result;
};

let mergeIntervals2 = function(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0])
  
  let res = [intervals[0]]
  
  for (let i = 1; i < intervals.length; i++) {
      let prevEnd = res[res.length - 1][1]
      let currStart = intervals[i][0]
      
      if (prevEnd >= currStart) {
          res[res.length - 1][1] = Math.max(intervals[i][1], prevEnd)
      } else {
          res.push(intervals[i])
      }
      
  }
  
  return res
};

module.exports = {
  mergeIntervals,
  mergeIntervals2,
  Pair
}