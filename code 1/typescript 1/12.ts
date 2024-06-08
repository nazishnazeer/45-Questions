// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Array from Q.no 11

let names:string[]=["Afsheen","Ayesha","Iffat","shamsa"];

let message2:string="Do you like to watch movie?";

 console.log(names[0] +" "+ message2);
 console.log(names[1] +" "+ message2);
 console.log(names[2] +" "+ message2);
 console.log(names[3] +" "+ message2);

 // With for Loop

 for( let i=0; i<names.length; i++ ){
     console.log(`${names[i]}, ${message2}`);
 }

 // With forEach Method

names.forEach(friends => {
    console.log(`${friends},${message2}`);
})

 // With for-of loop

for(let list of names){
    console.log(`${list}, ${message2}`);
}