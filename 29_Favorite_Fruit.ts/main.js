"use strict";
/*29_Favorite Fruit: Make a array of your favorite fruits,
and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!

*/
let favorite_fruits = ["Apple", "Mango", "Banana"];
if (favorite_fruits.includes("Apple")) {
    console.log(`I Like Apple`);
}
if (favorite_fruits.includes("Orange")) {
    console.log(`Oranger is a Winter Fruite`);
}
if (favorite_fruits.includes("Mango")) {
    console.log(`Mango is the King Of Fruit`);
}
if (favorite_fruits.includes("BlackBareey")) {
    console.log(`Blackbareey is so Testy!`);
}
if (favorite_fruits.includes("Banana")) {
    console.log(`Ever Gold Banana`);
}
