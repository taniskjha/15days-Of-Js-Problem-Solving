function uniqueArr(arr) {
    const count = [];
    for (let i = 0; i < arr.length; i++) {
        if (Math.sign(arr[i]) == 1 && arr[i] == arr[i + 1]) {
            count.push(arr[i])
        }
    } console.log(count)
}

// input
uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1])
// output - [1, 3]
