// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.







function greaterThanOne(frac) {
    const dec = eval(frac);

    if (dec > 1) {
        return true
    } else {
        return false;
    }

}


greaterThanOne("1/2")  // output - false
greaterThanOne("7/4")  // output - true