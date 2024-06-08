/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.*/

let guestArray : string[] = ["Sana","Nida","Huma"];

let cantMake:string=guestArray.splice(1,1)[0];

console.log(`${cantMake} can not attend the dinner.`)

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

guestArray.push("Ayesha");
console.log(guestArray);

// • Print a second set of invitation messages, one for each person who is still in your list.

guestArray.forEach(guest =>{
    console.log(`Dear ${guest}, You are invited to the dinner.`);
});



