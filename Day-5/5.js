// Length of a Nested Array  (solved)

// Input - getLength([1, [2, 3, [4,5,6]]]) ➞ 
// output - 6

function getLength(arr) {
    return arr.flat(Infinity).length;
}
    
    getLength([1, [2, 3,[4,5,6]]])


// Concatenate Variable Number of Input Arrays

// Input - concat([1, 2, 3], [4, 5], [6, 7]) ➞ 
// Output - [1, 2, 3, 4, 5, 6, 7]


function concat(...args) {
	return args.flat(Infinity)
}
