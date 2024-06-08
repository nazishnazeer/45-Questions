// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest:string[]=["Sana","Nida","Huma"];

// Method No 1 (with for loop)

for(let i=0; i<guest.length; i++){
    console.log(`Dear ${guest[i]}, You are invited to the dinner`);
}

// Method No 2 (with forEach method)

guest.forEach(friend => {
    console.log(`Dear ${friend}, You are invited to the dinner.`);
});

// // Method No 3 (with for-of loop)

for(let friend of guest){
    console.log(`Dear ${friend}, You are invited to the dinner.`)
}