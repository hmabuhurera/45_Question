/*44_Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time.
*/

function sandwiche(...item:string[]){
    console.log(`\nMaking a Sandwhice with the following item\n`)
    for (let iitem of item){
        console.log(iitem)
    }
    console.log(`\nKnow Enjoy Sandwiche\n`)
}

sandwiche("Chicken","Cheese","Mayo","Egg");

sandwiche("Bread","Butter")

sandwiche("Chicken","Cheese","Mayo","Egg","Bread","Butter","Salad","Rita","Kabab")