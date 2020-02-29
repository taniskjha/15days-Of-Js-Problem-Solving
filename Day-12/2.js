// Hitting the Jackpot

// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements. 

// (not passing some test cases please reiterate in morning with fresh mind)

function testJackpot(result) {

    return result.map(e => {
        if (e == 'string' && e == e.toUpperCase && e !== e.toLowerCase()) {
            return true;
        } 
        else {
            return false;
        }

    })

}

testJackpot(["@", "@", "@", "@"])
testJackpot(['SS', 'SS', 'SS', 'Ss'])