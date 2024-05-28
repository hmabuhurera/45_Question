/*45_Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. Print the Object that’s returned to 
make sure all the information was stored correctly.*/

function creat_car(manufacture:string,model:string, ...optional:any){
    let car = {
        manufacture:manufacture,
        model:model
    };
    optional.forEach(option => {
        let [key , value] = option.split(":");
         car[key.trim()] = value.trim()
    });

    return car;
}

let myCar = creat_car("Toyota","HOnda","color:Black","Sunroof:True","Year:2k24")

console.log(myCar);
