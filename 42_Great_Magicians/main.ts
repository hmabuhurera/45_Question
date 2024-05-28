/*42_Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

function show_magicians(magicians:string[]){
    for (let magician of magicians){
        console.log(magician);
        
    }
}

function make_grate(magicians:string[]){
  return  magicians.map(print => `The Great Magicians ${print}`);
}

let magician_Name:string[]=["Harry Poter","Hamza","Mubahsir","Sabahat"];

let greatMagicion = make_grate(magician_Name)

show_magicians(greatMagicion)
//console.log(greatMagicion);
