// Convert Key, Values in an Object to Array

 /* input - objectToArray({
    D: 1,
    B: 2,
    C: 3  }) 
  
*/
  
  // output - [["D", 1], ["B", 2], ["C", 3]]

  function objectToArray(obj) {
    const newobj = Object.entries(obj).map(e => e)
    console.log(newobj)
 }
 
 objectToArray({
    D: 1,
    B: 2,
    C: 3  });

  objectToArray({
    likes: 2, 
    dislikes: 3, 
    followers: 10});