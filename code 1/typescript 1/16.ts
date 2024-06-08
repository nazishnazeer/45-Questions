// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

let guestArr1:string[]=["Sana","Huma","Ayesha"];  

console.log("Great News, I have found a bigger dinning table.");

// • Add one new guest to the beginning of your array.

guestArr1.unshift("Maria");
console.log(guestArr1);


// • Add one new guest to the middle of your array.

guestArr1.splice(Math.floor(guestArr1.length/2),0,"Alia");
console.log(guestArr1);

// • Use append() to add one new guest to the end of your list.
// I use push() instead of appand().

guestArr1.push("Bano");
console.log(guestArr1);

// • Print a new set of invitation messages, one for each person in your list.

guestArr1.forEach(guest =>{
    console.log(`Dear ${guest}, You are invited to the dinner.`)
});
