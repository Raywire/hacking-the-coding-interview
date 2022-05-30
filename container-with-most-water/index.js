let maxWaterAreaContainer = function(height) {
	// Initialize maxArea as zero and the left and right markers to the two ends
	// of an array
	let maxArea = 0, left = 0, right = height.length - 1;
	
	while (left < right) {
		// Calculating the max area using the shortest height and the
		// length of x-axis between the two heights
		maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left));
		
		// Move the left bar if it has the shorter height
		if (height[left] < height[right])
			left++;
		// Otherwise move the right bar
		else
			right--;
	}

	// Return the maximum area container
	return maxArea;
};

module.exports = {
  maxWaterAreaContainer
}
