"use strict";
/*32_Checking Usernames: Do the following to create a program that
simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users.
Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used.
If it has, print a message that the person will need to enter a new username.
If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
let current_users = ["Taha", "Sabahat", "huraira", "Mubashir", "Hussain"];
let new_users = ["Ayesha", "Huraira", "Sabahat", "Saba", "Aliyan"];
new_users.forEach(new_users_cheack => {
    let ourCondition = current_users.some(User_Cheack => User_Cheack.toLocaleLowerCase() === new_users_cheack.toLocaleLowerCase());
    if (ourCondition) {
        console.log(`Sorry ${new_users_cheack} Is ALrady Receved`);
    }
    else {
        console.log(`This UserName ${new_users_cheack} is availabe`);
    }
});
