// Spaces Between Each Character


// Create a function that takes a string and returns a string with spaces in between all of the characters.

function spaceMeOut(str) {
    return str.split('').join().replace(/[,]/g, ' ')
}

//input
spaceMeOut("space")
//output - "s p a c e"