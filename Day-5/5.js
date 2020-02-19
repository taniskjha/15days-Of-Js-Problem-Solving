// Length of a Nested Array  (Not solved)

// Input - getLength([1, [2, 3, [4,5,6]]]) ➞ 
// output - 6

function getLength(arr) {
    return arr.flat(Infinity)
}
    
    getLength([1, [2, 3,[4,5,6]]])
