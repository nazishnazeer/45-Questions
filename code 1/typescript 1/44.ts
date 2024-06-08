// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// define a function with a rest parameterthat accept items argument representing our sandwich

function makeSandwitch(...items:string[]){
   
    console.log("Making a sandwich wth the following items: \n");
   
    items.forEach(singleItem => console.log(singleItem));
   
    console.log("Now Enjoy sandwich");
}

// call the function 3 times with 3 different number of arguments

makeSandwitch("Chicken","Cheese","Mayo","Egg");

makeSandwitch("Bread","Butter");

makeSandwitch("Bread","Butter","Mayo","Egg","Cheese","Lettuce","Tomato");