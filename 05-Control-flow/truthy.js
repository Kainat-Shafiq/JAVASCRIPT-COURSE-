const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

                                  // falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

                                  //truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
// const emptyObj2 = {}

// if (emptyObj2.length === 0) {       // yeh error dega kun k object k pass length nhii hoti hai
//     console.log("Object is empty");
// }
//Nullish Coalescing Operator (??)  // yeh operator null aur undefined ko check karta hai aur agar value null ya undefined hoti hai toh uski jagah dusri value return karta hai
let val1;
val1 = 5 ?? 10;  // yeh 5 return karega kun k val1 ki value null ya undefined nhii hai
val2 = null ?? 10; // yeh 10 return karega kun k val2 ki value null hai
val3 = undefined ?? 10; // yeh 10 return karega kun k val3 ki value undefined hai
console.log(val1);
console.log(val2);
console.log(val3);

//Ternary Operator (condition ? exprIfTrue : exprIfFalse)  // yeh operator condition ko check karta hai aur agar condition true hoti hai toh exprIfTrue return karta hai aur agar condition false hoti hai toh exprIfFalse return karta hai
// condition ? true : false
const age = 20;     
const isAdult = age >= 18 ? "You are an adult." : "You are not an adult.";
console.log(isAdult);


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")