//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let myFavFruit:string[]=["Apple","Banana","Mango"];

if(myFavFruit.includes("Apple")){
    console.log("I really like Apples");
}


if(myFavFruit.includes("Mango")){
    console.log("I really like Mango");
}


if(myFavFruit.includes("Grapes")){
    console.log("I really like Grapes");
}


if(myFavFruit.includes("Banana")){
    console.log("I really like Banana");
}


if(myFavFruit.includes("Orange")){
    console.log("I really like Orange");
}