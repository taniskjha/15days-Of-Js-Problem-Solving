// Number to Reversed Array

function reverseArr(num) {
	return num.toString().split('').reverse().map(e => Number(e))
}

reverseArr(1485979)

