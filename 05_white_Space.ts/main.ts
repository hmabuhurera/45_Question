//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let whitSpace:string = "\t\t\n\n              HAFZ MUHAMMAD TAHA            \t\t\n\n";

console.log(`simple console : ${whitSpace}`);

console.log(`White Space length count : ${whitSpace.length}`);

console.log(`White space remove : ${whitSpace.trim()}`);
