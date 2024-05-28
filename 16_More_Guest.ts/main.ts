/*16_More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/

//creating a guest list arry
let guestList = ["mubeen", "Taha", "Sabahat", "Mubashir","Hamza"];

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

let middelAdd:number =  Math.floor(guestList.length / 2);

//Adding a new guest value in medel index

guestList.splice(middelAdd, 0 , "Ghazi")


console.log(`Updated list of your Guest`);

guestList.forEach(print => console.log(`Salam ${print} you are invited Big Table Dinner`));
