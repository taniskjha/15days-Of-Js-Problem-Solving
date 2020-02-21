// Sum of Cubes
// Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(nums) {
    return nums.map(e => Math.pow(e, 3)).reduce((a, c) => a + c, 0);
}

// Sort Numbers in Ascending Order

// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

function sortNumsAscending(arr) {
    if (!arr) {
        return [];
    } else {
        return arr.sort((a, c) => a - c)
    }
}

// Sort an Array by String Length


function sortByLength(arr) {
    return arr.sort((a, c) => a.length - c.length)
}