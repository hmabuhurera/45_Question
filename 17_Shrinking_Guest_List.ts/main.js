"use strict";
/*17_Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
• Start with your program from Exercise 16.
 Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list,
print a message to that person letting them know you’re sorry you can’t invite them to dinner.

 Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list.
 Print your list to make sure you actually have an empty list at the end of your program.



*/
//Q # 16 getting help this question
//creating a guest list arry
let guestList = ["mubeen", "Taha", "Sabahat", "Mubashir", "Hamza"];
//Make a variable how cant come
let dontCome = guestList[0];
//print mesaage hoe cant come
console.log(dontCome, "Nahe a Sakta");
//removing and adding anew person
guestList.splice(0, 1, "Huzaifa");
//Dinner Message
console.log("Your are Invited A Bigger Table Dinner.");
//add a person value in sarting index
guestList.unshift("Linkedin");
//add a peorson value in Last index
guestList.push("usman");
//Add a new guest value in medel index
let middelAdd = Math.floor(guestList.length / 2);
//Adding a new guest value in medel index
guestList.splice(middelAdd, 0, "Ghazi");
console.log(`Updated list of your Guest`);
guestList.forEach(print => console.log(`Salam ${print} you are invited Big Table Dinner`));
//Q# 17 start there
//Conform that only two guest invited fir diner
console.log(`unfortunatly, THe new dinner table won't arived on time, so I can invite only two guest to dinner with me`);
//Using While Loop To Delet a array vlaue
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry!! ${removeGuest} I can't invite you  to dinner`);
}
//Invitation last two guest and Print
console.log(`Invitation two person in a Dinner`);
guestList.forEach(print => console.log(`lucky ${print} YOur are Stilll Invited`));
//last two people remove and print
console.log(`Removing last two invited people`);
guestList.pop();
guestList.pop();
console.log(`Empty Array`);
console.log(guestList);
