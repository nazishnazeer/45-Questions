// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.


let transpotation:string[]=["Audi","Land Cruiser","Honda City","Corolla","Suzuki"];

// Method no 1 ( with template literal)

console.log(`I would like to own a ${transpotation[0]}`);
console.log(`I would like to own a ${transpotation[1]}`);
console.log(`I would like to own a ${transpotation[2]}`);
console.log(`I would like to own a ${transpotation[3]}`);
console.log(`I would like to own a ${transpotation[4]}`);


// Method no 2 ( with for loop)

for(let i=0; i<transpotation.length; i++){
    console.log(`I would like to own a ${transpotation[i]}`)
}

// Method no 3 ( with forEach method)

transpotation.forEach(vehical =>{
    console.log(`I would like to own a ${vehical}`)
})

// Method no 4 ( with for-of loop)

for (let vehical of transpotation){
    console.log(`I would like to own a ${vehical}`)
}