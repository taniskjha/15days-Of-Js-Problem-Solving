// Index Multiplier

// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

function indexMultiplier(arr) {
    let count = 0;
	for(let i = 0; i < arr.length; i++) {
       count += i * arr[i]
    } return count
}

indexMultiplier([1, 2, 3, 4, 5]);

