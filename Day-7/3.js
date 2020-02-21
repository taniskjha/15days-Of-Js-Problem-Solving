// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed. (Not solved Please reiterate in morning)

function spelling(str) {
    const countarr = str.split('')
    console.log(countarr)

    for (let i = 0; i < countarr.length; i++) {
        var ar = countarr[i].slice(i, i + 1)
        console.log(ar)
    }
}

spelling("bee");


// output = ["b", "be", "bee"]
