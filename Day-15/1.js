// Return the Sum of the Two Smallest Numbers
// failing few test cases

function sumTwoSmallestNums(arr) {
    const count = []; // empty array
    count.push(Math.min(...arr))
    const firstlowest = arr.indexOf(Math.min(...arr)); // min
    arr.splice(firstlowest, 1);
    const secondlowest = Math.min(...arr);
    count.push(secondlowest)
    return count.reduce((a, b) => a + b)
}

// Input

sumTwoSmallestNums([19, -5, 42, 2, 77])
// Output - 7