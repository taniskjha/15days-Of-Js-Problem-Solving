// Write a program to find whether given number is an Armstrong number or not? **

// 153 = Math.pow(1,3) + Math.pow(5,3) + Math.pow(3,3)


function check_armstrong(num) {
    const num1 = num.toString().split('').map(e => 
        Math.pow(e,3)
    ).reduce((a,b) => a+b,0);

    if(num1 == num) {
        return 'im armstrong'
    } else {
        return 'im not armstrong'
    }
}
check_armstrong(370)