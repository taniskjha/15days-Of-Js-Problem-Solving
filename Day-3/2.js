// Write a program to find whether given number is an Armstrong number or not? **

153 = Math.pow(1,3) + Math.pow(5,3) + Math.pow(3,3)


function armstrong(n) {
    n.split('').forEach(e => 
        Math.pow(e,3) + Math.pow(e,3) + Math.pow(e,3)
    ).join('');
}

armstrong(153)
