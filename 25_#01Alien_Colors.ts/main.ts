/*Alien Colors #1: Imagine an alien was just shot down in a game.
 Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. 
If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails.
 (The version that fails will have no output.)

*/

let alien_color:string = "Green";

if(alien_color === "Green") {
    console.log(`Congratulation Your Earn 5 Point`);   
}
else{
   console.log(`You Lost better luck next time`);   
}

if(alien_color === "Red") {
    console.log(`Congratulation Your Earn 5 Point`);  
};