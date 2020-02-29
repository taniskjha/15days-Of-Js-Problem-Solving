// input - findUniq([ 1, 1, 1, 2, 1, 1 ])
// output - 2

function findUniq(arr) {
    // do magic
    let count = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i]) {
            console.log(arr[i])
        }
    }
}

findUniq([1, 1, 1, 2, 1, 1])