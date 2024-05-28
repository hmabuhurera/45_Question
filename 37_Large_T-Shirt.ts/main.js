"use strict";
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a
message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message,
and a shirt of any size with a different message.*/
//Meaking a  Function with parameter define with variable message
function largeShirt(size = "Large", message = "I Love TypeScript") {
    console.log(`Meaking a ${size}  of T-Shirt with the message ${message} Printed on it.`);
}
//function call
largeShirt();
//fuction call and just size change
largeShirt("Medium");
//fuction call  size change and message
largeShirt("Medium", "I Love JavaScript");
//fuction call  size change and message
largeShirt("Small", "Be Positive");
