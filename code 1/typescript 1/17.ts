// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

let guestArr2:string[]=["Maria","Sana","Alia","Huma","Ayesha","Bano"];  

console.log("Unfotunately, the new dinning table has not arrived yet so we can only invite two people for dinner.");


// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

while(guestArr2.length>2){
    let removedGuest=guestArr2.pop();
    console.log(`Sorry ${removedGuest}, You are not invited to the dinner.`)
}

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

guestArr2.forEach(guest => {
    console.log(`Dear ${guest}, You are still invited to dinner.`);
});

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

guestArr2.splice(0,guestArr2.length);
console.log(guestArr2);