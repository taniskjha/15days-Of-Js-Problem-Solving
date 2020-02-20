// Match the Last Item

// Create a function that takes an array of items and checks if the last item matches the rest of the array.

function matchLastItem(arr) {
    let lastitem = arr.pop(); // stored last item
    console.log(lastitem) 
    let count = [];
    for(let i =0; i< arr.length; i++) {
     count.push(arr[i])
    }  let newcount = count.reduce((a,b) => a+b);
      if (newcount == lastitem) {
          return true;
      } else {
          return false
      }
}

matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) 
// Output = true
// The last item is the rest joined.


// other solutions 

function matchLastItem(arr) {
    return arr.pop == arr.join('')
}

