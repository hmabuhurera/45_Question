/*24_More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests.
Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than,
greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
//Test 01
//01_Tests for equality and inequality with strings

let car = "bugatie"

console.log(`car === "bugatie"? I Predicat True`);
console.log(car === "bugatie");

console.log(`car !== "bugatie"? I Predicat False`);
console.log(car !== "bugatie");
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
//Test 02
//Tests using the lower case function

let lowerCase:string = "hello";

console.log(`lowercase === "hello"? i predicat true`)
console.log(lowerCase.toLowerCase() === "hello");

console.log(`lowercase !== "hello"? i predicat false`)
console.log(lowerCase.toLowerCase() !== "hello");
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
//Test 03
//Numerical tests involving equality and inequality, greater than and less than,
//greater than or equal to, and less than or equal to

let num = 10;
let sum = 20;
//>
console.log(`num > sum? I Predicat False`);
console.log(num > sum);// false
//<
console.log(`num < sum? I Predicat True`);
console.log(num < sum);// false
//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""'''"
//04 Test
// Numerical tests involving equality and inequality, greater than and less than,
//greater than or equal to, and less than or equal to
//let num1 = 30;
//let sum1 = 40;
//=<
console.log(`40 >= 30? I Predicat True`);
console.log(40 >= 30);
//>=
console.log(`100 <= 40? I Predicat False`);
console.log(100 <= 40);
//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//05 Test
//Tests using "and" and "or" operators

let Name = true;
let password = true;
//&&
console.log(`Name && Password ? I Predict True`);
console.log(Name && password);
//!
console.log(`Name ! Password ? I Predict True`);
console.log !(Name , password);
//||
console.log(`Name || Password ? I Predict Trur`);
console.log(Name || password);
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""''
//06 TEst
//• Test whether an item is in a array
let fruit:string[] = ["Apple","Mango","Banana","Orange"];

console.log(`Check item how is an array`);
console.log(fruit.includes("Apple"));
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
//07 Test
//Test whether an item is not in a array


console.log(`Check item how is not in array`);
console.log(fruit.includes("Grapes"));
