// Write a program to find remainder of two numbers without using modulus (%) operator

// with modulus 
function remainder_with_mod(a,b) {
    return a % b
}
remainder_with_mod(25,4)

// without modulus

function remainder_withot_mod(a,b) {
    return a - Math.floor(a / b) * b
}
remainder_withot_mod(50,4)
