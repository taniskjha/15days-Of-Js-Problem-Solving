// Write a program to Generate Even and Odd Number less than N and Generate ‘N’ Even and Odd

function even_odd_less_than_n(n) {
    for(var i =0; i <= n; i++) {
        if(i % 2 == 0) {
            console.log(i + 'is even')
        }  else {
            console.log(i + 'is odd')
        }
    }
}

even_odd_less_than_n(10)