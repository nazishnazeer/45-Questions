/* Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.”*/

// From exercise 4

let quote : string = "It gets healthy to loose weight not loose weight to get healthy."

let famous_person:string = "Dr. Eric Berg";

// Composing message in a variable name message

let message : string = (`${famous_person} once said, ${quote}`);

// Printing variable 'message'

console.log(message);