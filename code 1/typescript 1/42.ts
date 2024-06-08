// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function show_magicians2(magicians:string[]){
    magicians.forEach(name => console.log(name));
}
// function to make magicians great through map that will modify array

function make_great(magicians:string[]){
    return magicians.map(name =>`The Great ${name}`);
}

// define an array containing magicians name

let magicians_name1 = ["Harry Poter", "Eric","Ben","Bob"];

// call make_great function to modify magicians names

let great_magicians=make_great(magicians_name1);
console.log(great_magicians);

// call show_magicians function that show modify list of magicians

show_magicians2(great_magicians);