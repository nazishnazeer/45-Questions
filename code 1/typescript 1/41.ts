// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function showMagicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}

// define an array containing magicians name

let magicians_name=["Harry Poter", "Eric","Ben","Bob"];

// calling the function to print each magician name

showMagicians(magicians_name);