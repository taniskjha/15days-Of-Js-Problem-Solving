// 20) Write a program to find the largest number among three numbers

function largest(n) {
    return Math.max(...n);
}

// Write a program to Check Whether the given year is a leap year or not

function leap(y) {
    if(y % 4 == 0) {
        return 'leap year'
    } else {
        return 'no leap year'
    }
}