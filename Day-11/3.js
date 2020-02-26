// Get Students with Names and Top Notes


// Create a function that takes an array of objects like { name: 'John', notes: [3, 5, 4]} and returns an array of objects like { name: "John", topNote: 5 }. [not solved reitrate]

function getStudentsWithNamesAndTopNotes(students) {
    var arr = students[0].notes;
    var harr = Math.max(...arr);
    console.log(students[0].notes)
    console.log(students[0].notes.pop())
}


getStudentsWithNamesAndTopNotes([{ name: "John", notes: [3, 5, 4] }])

[{ name: "John", topNote: 5 }]

