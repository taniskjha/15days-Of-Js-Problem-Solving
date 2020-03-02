// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// input - findUniq([ 1, 1, 1, 2, 1, 1 ])
// output - 2

function findUniq(arr) {
    // do magic
    let count = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            count.push(arr[i])
        }
    } return Number(count.splice(1, 1))
}

findUniq([1, 1, 1, 2, 1, 1])