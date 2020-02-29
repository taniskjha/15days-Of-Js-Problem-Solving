//  Input - sortArray([5, 3, 2, 8, 1, 4]) 
// Output - [1, 3, 2, 8, 5, 4]


// step 1 - 

function sortArray(array) {
    return array.sort((a, b) => {
        if (a % 2 !== 0) {
            return a - b;
        }
    })
}

sortArray([5, 3, 2, 8, 1, 4]) 