// Write a function that takes an array of 10 integers (between 0 and 9) and returns a string in form of a phone number

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"


function createPhoneNumber(numbers) {
    const num_1 = numbers.slice(0,3).toString().replace(/,/g,"");
    const num_2 = numbers.slice(3,6).toString().replace(/,/g,"");
    const num_3 = numbers.slice(6,10).toString().replace(/,/g,"");
 
    const phone_num = '(' + num_1 + ') ' + num_2 + '-' + num_3
    console.log(phone_num);
    
 }
 
 createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])