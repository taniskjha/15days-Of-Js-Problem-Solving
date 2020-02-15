// Filter out Strings from an Array

function filterArray(arr) {
    return arr.filter(element => typeof element == 'number')
}

filterArray([1,"20"])