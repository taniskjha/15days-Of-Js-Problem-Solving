// Is the Last Character an N?

function isLastCharacterN(word) {
    const lastword = word.split('').pop();
    return lastword.split('').some(e => {
        if (e == 'n') {
            return true
        } else {
            return false
        }
    })

}

isLastCharacterN('not')