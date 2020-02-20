// Number to Reversed Array

// Create a function that takes a number and returns an array with the digits of the number in reverse order.

// reverseArr(1485979)

function reverseArr(num) {
	return num.toString().split('').reverse().map(e => Number(e))

}