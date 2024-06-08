// Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.

//  Method No 1:

let friendName:string[]=["Afsheen","Ayesha", "Iffat","Shamsa"];
console.log(friendName[0]);
console.log(friendName[1]);
console.log(friendName[2]);
console.log(friendName[3]);

// Method No 2 (by using for loop):

for(let i=0; i<friendName.length; i++){
   console.log(friendName[i]);
}

// Method No 3 (for each method)

friendName.forEach(friend => {
   console.log(friend);
})

// // Method No 4 (for of loop)

for (const friend of friendName){
   console.log(friend);
}


