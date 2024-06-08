/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

// First Version

let alianColor1:string="Green";

if(alianColor1 == "Green"){
    console.log("The palyer earned 5 points");
}
else if(alianColor1 == "Yellow"){
    console.log("The palyer earned 10 points");
}
else if(alianColor1 == "Red"){
    console.log("The palyer earned 15 points");
}
else{
    console.log("The player earned nothing");
}

// Second Version

let alianColor2:string="Yellow";

if(alianColor2 == "Green"){
    console.log("The palyer earned 5 points");
}
else if(alianColor2 == "Yellow"){
    console.log("The palyer earned 10 points");
}
else if(alianColor2 == "Red"){
    console.log("The palyer earned 15 points");
}
else{
    console.log("The player earned nothing");
}

// Third Version

let alianColor3:string="Red";

if(alianColor3 == "Green"){
    console.log("The palyer earned 5 points");
}
else if(alianColor3 == "Yellow"){
    console.log("The palyer earned 10 points");
}
else if(alianColor3 == "Red"){
    console.log("The palyer earned 15 points");
}
else{
    console.log("The player earned nothing");
}