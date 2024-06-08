// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}
// function to make magicians great through map that will modify array

function makeGreat(magicians:string[]){
    return magicians.map(name =>`The Great ${name}`);
}

// define an array containing magicians name

let magiciansName = ["Harry Poter", "Eric","Ben","Bob"];

// making a copy of original array through .slice() function

let copy_magicianName = magiciansName.slice();


// modify the copied array to include "The Great" with their names

let copy_great_magicians = makeGreat(copy_magicianName);

// show both arrays original and copied

show_magicians(magiciansName);

// copied

show_magicians(copy_great_magicians);