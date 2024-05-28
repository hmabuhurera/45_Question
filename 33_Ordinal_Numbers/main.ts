/*33_*/







let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let oneNumber of numbers){
    let ordinal:string;
    if(oneNumber ===1){
        ordinal = "st"
    }
    else if (oneNumber === 2){
        ordinal= "nd"
    }
    else if(oneNumber === 3){
        ordinal = "rd"
    }
    else{
        ordinal = "th"
    }
    console.log(`${oneNumber}${ordinal}`)
}

//     for(let oneNumber of numbers){
//         let ordinal:string;

//         if(oneNumber == 1){
//             //let ordinal
//             ordinal = "st";
//         }
//         else if(oneNumber ==2){
//             ordinal = "nd";
//         }
//         else if(oneNumber == 3){
//             ordinal = "rd";
//         }
//         else{
//             ordinal = "th";
//         }
//         console.log(`${numbers}${ordinal}`);
//    }
