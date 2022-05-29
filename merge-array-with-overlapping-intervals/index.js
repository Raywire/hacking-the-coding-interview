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

module.exports = {
  mergeIntervals,
  Pair
}