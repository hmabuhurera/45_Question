"use strict";
/*36_T-Shirt: Write a function called make_shirt() that accepts a size and
the text of a message that should be printed on the shirt.
 The function should print a sentence summarizing the size of the shirt and the message printed on it.
Call the function*/
Object.defineProperty(exports, "__esModule", { value: true });
function T_Shirt(size, message) {
    console.log(`Meaking a ${size}  of T-Shirt with the message ${message} Printed on it.`);
    //return;
}
T_Shirt("medium Size", "I love code");
T_Shirt("Large Size", "Learn Typcsript");
T_Shirt("Small Size", " I want to learnDSA ");
// function make_Shirt  ( size: string, message: string )  {
//     console.log(`Creating a ${size} shirt with the message: ${message}`);
//     return
//      `size: ${size}, message: '${message}'`;
// }
// make_Shirt('Small',' I love typescript')
// make_Shirt('Medium',' hello world')
// make_Shirt('Large',' I love typescript')
