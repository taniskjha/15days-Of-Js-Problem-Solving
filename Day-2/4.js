// Write a program to subtract two integers without using Minus (-) operator


function without_minus(a,b) {
    return a + (~b) + 1;
}

without_minus(5,4)