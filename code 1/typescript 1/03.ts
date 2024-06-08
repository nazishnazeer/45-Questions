// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// creating a variable

let personName : string = "Nazish";

// In Upper Case

console.log("UpperCase :", personName.toUpperCase());

// In Lower Case

console.log("LowerCase:", personName.toLowerCase());

// In Title Case

console.log("TitleCase:", personName.replace(/\b\w/g, c=> c.toUpperCase()));

