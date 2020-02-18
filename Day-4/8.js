// Write a program to remove duplicate element in an array

function remove_duplicate(arr) {
    const sortedArr = arr.sort((a,b) => a-b);
     count = [];
    for(let i = 0; i<= arr.length; i++) {
        if(arr[i] - arr[i+1] !== 0) {
          count.push(arr[i])
        }
    } var newcount = count.pop()
      console.log(count)
}
remove_duplicate([1, 1, 2, 4, 4, 5, 6, 7, 7])