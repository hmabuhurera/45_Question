/*Cities: Write a function called describe_city() that accepts the name of a city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan.
Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the default country.*/

//Make function

function describe_city(city:string,country:string = "Pakistan"){
    console.log(`${city} is in ${country}.`)
}

//function call
describe_city
//function city change
describe_city("Karachi");
describe_city("Islamabad")
describe_city("Kashmir")
//Function city and country both change
describe_city("Tokyo","Japan")
describe_city("Makkah","Saudia")
describe_city("israil","Phalistine")