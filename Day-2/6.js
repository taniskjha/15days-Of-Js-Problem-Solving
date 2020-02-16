// Write a program to generate Prime Numbers less than N and Generate ‘N’ Prime Numbers/in given
// range.

function all_prime_less_than_n(n) {
    for(var i = 2; i < n; i++) {
      if(n % i) {
          return i + ' is not prime'
      }
    }    return i + ' is prime'
}

all_prime_less_than_n(10)