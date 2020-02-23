// The Study of Wumbology
//Create a function that flips M's to W's (all uppercase).

// input - wumbo("I LOVE MAKING CHALLENGES")
// output - "I LOVE WAKING CHALLENGES"

function wumbo(words) {
    const wordm = /[M]/g
    const replaces = words.replace(wordm, 'W');
    return replaces;
}

wumbo("I LOVE MAKING CHALLENGES")