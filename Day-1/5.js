// Add up the Numbers from a Single Number

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// input = 4 , output = 1+2+3+4;

// step 1 - get all the numbers from a to 1 

function addUp(num) {
    var count = 0;
    for(var i = 0; i <= num; i++) {
       count += i;
    } return count   }

addUp(5)