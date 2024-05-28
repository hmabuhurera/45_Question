"use strict";
/*31_No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
// No Users: Use of if and if-else statements and For of loop with Array
//user array condtion cheak
let userName = ["Amir", "Usman", "Admin", "Afaq", "Huzaifa"];
//empty array
userName = [];
if (userName.length === 0) {
    console.log(`We need to find some users!`);
}
else {
    userName.forEach(userName => {
        if (userName === "Admin") {
            console.log(` Hello admin, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${userName}, thank you for logging in again.`);
        }
    });
}
/*// Empty array use case
const emptyUserName:string[] =[];

// Non empty array use case
let nonEmptyUserName:string[] =[" sabahat","Arbish","FatimaZehra","Faheem"];

// Function use case
function greetUsers(userName:string[]):void
{
    if (userName.length === 0) {
        console.log(` we need to find some users`);
        return;
    }
}
for ( const userName of emptyUserName){
if(
    userName.toLowerCase() === 'sabahat'
){
    console.log(`Hello Sabaahat would you like to  see a status report`);
}

else{
    console.log(`hello ${userName}, Thank you! for logging in`);
    
}
}
console.log(`For non Empty user name: \n`);
greetUsers(emptyUserName);
export{}*/ 
