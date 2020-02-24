// Remove Every Vowel from a String


// Create a function that takes a string and returns a new string with all vowels removed.

function removeVowels(str) {
    const vowel = str.match(/[a-zA-z !aeiou]/gi)
    console.log(vowel)
    return str.split('').filter(e => {
        if (e == vowel) {
            console.log(e)
        }
    }).join('')
}


removeVowels("We're gonna build a wall!")