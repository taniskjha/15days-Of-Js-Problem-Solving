// Given a simple math expression as a string, neatly format it as an equation. (Not passing Some test Cases, please reiterate)


function formatMath(expr) {
    const addre = expr.match(/[+]/g)
    const subre = expr.match(/[-]/g);
    const multre = expr.match(/[*]/g);
    const divisre = expr.match(/[/]/g);
    if (addre) {
        const reversedex = expr.split('').reverse().join('')
        const firstnumex = parseInt(expr, 10)
        const secondnumex = parseInt(reversedex, 10)
        return expr + ' = ' + (firstnumex + secondnumex)
    } else if (subre) {
        const reversedex = expr.split('').reverse().join('')
        const firstnumex = parseInt(expr, 10)
        const secondnumex = parseInt(reversedex, 10)
        return expr + ' = ' + (firstnumex - secondnumex)
    } else if (multre) {
        const reversedex = expr.split('').reverse().join('')
        const firstnumex = parseInt(expr, 10)
        const secondnumex = parseInt(reversedex, 10)
        return expr + ' = ' + (firstnumex * secondnumex)
        console.log(firstnumex);
        console.log(secondnumex);
    } else if (divisre) {
        const reversedex = expr.split('').reverse().join('')
        const firstnumex = parseInt(expr, 10)
        const secondnumex = parseInt(reversedex, 10)
        return expr + ' = ' + (firstnumex / secondnumex)
    }

}

formatMath("3 + 4") //  output - "3 + 4 = 7"
formatMath("3 - 2") // output - "3 - 2 = 1"
formatMath("4 x 5") // output - "4 x 5 = 20"
formatMath("6 / 3") // output -  "6 / 3 = 2"


// second Solution using For loop

function formatMath(expr) {

    for (let i = 0; i < expr.length; i++) {
        if (expr[i] == '+') {
            const reversedex = expr.split('').reverse().join('')
            const firstnumex = parseInt(expr, 10)
            const secondnumex = parseInt(reversedex, 10)
            return expr + ' = ' + (firstnumex + secondnumex)
        } else if (expr[i] = '-') {
            const reversedex = expr.split('').reverse().join('')
            const firstnumex = parseInt(expr, 10)
            const secondnumex = parseInt(reversedex, 10)
            return expr + ' = ' + (firstnumex - secondnumex)
        } else if (expr[i] = '*') {
            const reversedex = expr.split('').reverse().join('')
            const firstnumex = parseInt(expr, 10)
            const secondnumex = parseInt(reversedex, 10)
            return expr + ' = ' + (firstnumex * secondnumex)
        } else if (expr[i] = '/') {
            const reversedex = expr.split('').reverse().join('')
            const firstnumex = parseInt(expr, 10)
            const secondnumex = parseInt(reversedex, 10)
            return expr + ' = ' + (firstnumex / secondnumex)
        }
    }

}


formatMath("3 + 4") //  output - "3 + 4 = 7"
formatMath("3 - 2") // output - "3 - 2 = 1"
formatMath("4 x 5") // output - "4 x 5 = 20"
formatMath("6 / 3") // output -  "6 / 3 = 2"


// Third Solution using eval method 


function formatMath(expr) {
    return expr + ' = ' + eval(expr);
}
formatMath("3 * 4")
