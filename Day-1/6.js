// clearFog("sky") ➞ "It's a clear day!"

// clearFog("fogfogfffoooofftreesggfoogfog") ➞ "trees"

// split the string into arraay split('')
// return all the number not equal to 'f', 'o', 'g'
// else if no 'f' or 'o' or 'g' log its a clear day
// join the string with join('')

function clearFog(str) {
    return str.splt('').map(ele => 
        
        {if(ele !== 'f' && ele !== 'o' && ele !== 'g') {
        return ele
        } else {
            console.log("It's a clear day!")
        }
    }).join('')
}

clearFog("fogfogfffoooofftreesggfoogfog")
