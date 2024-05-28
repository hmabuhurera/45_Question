//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

const friendList:string[] = ["Taha", "Sabahat","Sadiq","Ahsan","Mubashir"];

console.log(friendList[0]);
console.log(friendList[1]);
console.log(friendList[2]);
console.log(friendList[3]);
console.log(friendList[4]);

//Second method


friendList.forEach(print => console.log(print));


