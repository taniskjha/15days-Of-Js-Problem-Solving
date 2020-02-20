// Remove Duplicates from an Array

// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).


function removeDups(arr) {
    let count = [];
    for(let i =0; i < arr.length; i++) {
     if(arr[i] - arr[i + 1] !==0) {
     count += arr[i];
    }  
    } return count;
}

removeDups([1, 0, 1, 0]);

// Output ➞ [1, 0]
