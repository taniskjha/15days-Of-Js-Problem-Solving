function isSpecialArray(arr) {

    return arr.every((e, i, arr) => {
        if (i % 2 == 0) {
            return arr[i] % 2 === 0
        } else if (i % 2 !== 0) {
            return arr[i] % 2 !== 0
        }
    })
}
// Input - 
isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) // Output - true
// Input - 
isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) // Output - false

"use strict"

function isSpecialArray(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            return arr[i] % 2 === 0 ? true : false
        }
        // else if (i % 2 !== 0) {
        //     console.log(arr[i] % 2 !== 0)
        // }
    }

}

isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])



[2, 7, 9, 1, 6, 1, 6, 3]