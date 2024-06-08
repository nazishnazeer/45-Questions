// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// Creating a variable 

let nameWithWhiteSpace : string = "\n\tMohammad Ali Jinnah\t\n";

console.log(nameWithWhiteSpace);

// To stripping the white space we use trim()

console.log(nameWithWhiteSpace.trim());