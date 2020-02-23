// Check String for Spaces


function hasSpaces(str) {
    return str.split('').some(e => {
        if (e == " ") {
            return true
        } else {
            return false
        }
    })
}

hasSpaces("Foo ")