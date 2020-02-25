// Reverse Words Starting With a Particular Letter


// Write a function that reverses all the words in a sentence that start with a particular letter. (Not passing some test case please reiterate)



function specialReverse(s, c) {
    const index = s.indexOf(c)
    const revarr = s.slice(index, s.length).split(' ');
    console.log(revarr);
    const fi = revarr.slice(0, 1).reverse();
    console.log(fi.split('').reverse())
    const unrevarr = s.split(',').slice(0, index)
    const conc = [...unrevarr, ...revarr];
    // console.log(conc.join(''))
    // return conc.toString();	
}

// Input - 
specialReverse("first man to walk on the moon", "m")
// Output - 

"first nam to walk on the noom"