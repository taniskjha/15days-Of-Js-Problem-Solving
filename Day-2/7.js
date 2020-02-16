// Write a program that prints the numbers from 1 to 100 and for multiples of '3' print "Fizz" instead of
// the number and for the multiples of '5' print "Buzz".


function fizzBuzz(n) {
    for(var i = 0; i <= n; i++) {
        if(i % 3 == 0) {
            console.log(i + ' is Fizz')
        } else if(i % 5 ==0) {
            console.log(i + ' is Buzz')
        } else {
            console.log(i + ' is No fizz No Buzz')
        }
    }
}

