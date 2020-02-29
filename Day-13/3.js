//Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

function high(x) {
    return x.split(' , ').map(element => element.splice(0, ' '))
}


high('man i need a taxi up to ubud')
// output -  'taxi'