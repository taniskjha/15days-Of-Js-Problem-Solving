// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand. (Not solved)


function transformUpvotes(str) {
    const arr = str.split('');
    const count = [];
    return arr.map(e => {
        if (e !== 'k') {
            count.push(e)
        }
    })
    console.log(count)
}


// Input
transformUpvotes("6.8k 13.5k 9200")
// output - [6800, 13500, 9200]