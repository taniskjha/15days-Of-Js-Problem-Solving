// Sum of Cubes

// Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(nums) {
    if (nums.length == 0) { // checking if an array is empty
        return 0
    }
	return nums.map(e => e ** 3).reduce((a,b) => a +b);
}
