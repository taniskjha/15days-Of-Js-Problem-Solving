// Array of Multiples

// create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

// Input - arrayOfMultiples(12, 10)
// Output - [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]


// Take multiples of 12 till n 
// Put conditional to check if it is divisible. 
// keep pushing multiples inside count untill it gets divisible by 120


function arrayOfMultiples (num, length) {
    const count = [];
    for(let i =1; i <= length; i++ ) {
        count.push(i * num)
    } return count;
}

arrayOfMultiples(7, 5)