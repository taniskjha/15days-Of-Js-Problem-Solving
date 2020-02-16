// Write a program to find Mean of given Array Elements?

function mean(arr) {
    let sum = arr.reduce((a,b) => a+b,0);

    let mean = sum / arr.length;

    console.log(mean)
} 

mean([1,2,3,4,5]);

// Write a program to find Median of the given Array?

// if array.length is odd than median should be at position  (array.length + 1 ) / 2 

// if array.length is even than median should be at postion array.length / 2


function median(arr) {
   
    if (arr.length % 2 == 0) {
        let position = (arr.length / 2) - 1;

        console.log(arr[position])
    }  else {
        let position;
    }

}

 median([1,3,3,6,7,8])