"use strict";
/*41_Magicians: Make a array of magician’s names.
Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.*/
function show_magicians(magicians) {
    for (let _magician of magicians) {
        console.log(_magician);
        // {
        //   magicians.forEach(print => console.log(print));
    }
}
let magician_Name = ["Harry Potter", "Taha", "Sabahat", "Mubashir"];
show_magicians(magician_Name);
//console.log(result);
