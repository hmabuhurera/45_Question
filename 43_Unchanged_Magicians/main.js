"use strict";
/*43_Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names
and one array with the Great added to each magician’s name.
*/
function show_Magicion(magicians_Name) {
    for (let magician of magicians_Name) {
        console.log(magician);
    }
}
//great function to creat marj a new sentence in other function message
function make_Great(magicians) {
    return magicians.map(print => `The great magicion ${print}`);
}
//Array Magician Name
let magician_name = ["Harry Potter", "Hamza", "Sabahat", "Mubashir"];
//Orginal function call 
show_Magicion(magician_name);
//copy array without ny changing in array
let copy_magician_name = magician_name.slice();
/*The function make_great add store variaable the resion of using return
*/
let copy_make_great = make_Great(copy_magician_name);
console.log(copy_make_great);
