              //4-for...of loop     (arrays specifics loop)
            // Arrays ya iterable items ke liye use hota hai.
            //Har item ko ek ek karke print karegak
// for (variable of iterable) {
//     // code to be executed
// }
let myArray2 = ["apple", "banana", "cherry"];
for (let element of myArray2) {
    console.log(element);
}  
const grettings = "Hello";
for (let greet of grettings) {
    console.log(`each character of string is ${greet}`);
}


                        //Map (JavaScript)
                     // Map ek special type ka object hai jisme key-value pairs store hote hain.
                     // Matlab har item ke do parts hote hain:
                     // Key → unique identifier
                    // Value → actual data
    //syntax:  let myMap = new Map();
let myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("city", "New York");       
console.log(myMap);
console.log(myMap.get("name"));

     ///confusion

  for (const [key, value] of myMap) {   
     console.log(key, ':-', value);
}



const myObject = {
    game1: 'granny',
    game2: 'Spiderman'
}
//         for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } yahn error aayega kyunki object iterable nahi hota, isliye hume Object.entries() ka use karna padega


for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ':-', value);
}