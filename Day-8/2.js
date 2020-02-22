// Count Instances of a Character in a String

// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.


function charCount(myChar, str) {
    return str.split('').map(e => {
        if (e == myChar) {
            return e
        }
    }).join('').length;
}

charCount("b", "big fat bubble")