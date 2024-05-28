/*27_Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.

*/
//Satatmwnt 01
let alienColor = "Green";

if(alienColor=== "Orange"){
    console.log(`COngratulation YOu Earn 5 Point`);  
}
else if(alienColor==="Blue"){
    console.log(`Congratulation You Earn 10 Point`);

}
else if(alienColor==="Green"){
    console.log(`Congratulation You Earn 15 Point`);

}
else {
    console.log("Unknown Alien");
    
}

//Statment 02

let alienColor1 = "cyan";

if(alienColor1 === "Orange"){
    console.log(`COngratulation YOu Earn 5 Point`);  
}
else if(alienColor1 ==="Blue"){
    console.log(`Congratulation You Earn 10 Point`);

}
else if(alienColor1 ==="Green"){
    console.log(`Congratulation You Earn 15 Point`);

}
else if(alienColor1 === "cyan"){
    console.log(`Congratulation You Earn 20 Point`);
}
else {
    console.log("Unknown Alien");
    
}
