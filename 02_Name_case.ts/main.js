"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//Person Name Change to toLowerCase.()
const nameLower = "HAFIZ MUHAMMAD TAHA";
console.log(nameLower.toLowerCase());
//Person Name Change to toUpperCase.()
const nameUper = "hafiz muhhad taha";
console.log(nameUper.toUpperCase());
//Method 01
//Person Name Change to TitleCase()
//function use
const nameTitle = "hafiz muhammad taha";
function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)w/g, function (match) {
        return match.toUpperCase();
    });
}
const titleCase = toTitleCase(nameTitle);
console.log(titleCase);
//Method 02
console.log(nameTitle.replace(/\b\w/g, (char) => char.toUpperCase()));