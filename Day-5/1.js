// Check if One Array can be Nested in Another
// arr1's min is greater than arr2's min. arr1's max is less than arr2's max.

// Input - canNest([1, 2, 3, 4], [0, 6])
// output -  true

function canNest(arr1, arr2) {
    
    const arr1_min = Math.min(...arr1);
    const arr2_min = Math.min(...arr2);
    const arr1_max = Math.max(...arr1);
    const arr2_max = Math.max(...arr2);

    if(arr1_min > arr2_min && arr1_max < arr2_max) {
        return true;
    } else {
        return false
    }
}