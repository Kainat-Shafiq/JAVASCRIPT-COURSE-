               // 5- for…in loop
                     // Object ke properties ko loop karne ke liye use hota hai.
                     // Har property ko ek ek karke print karega.
// for (variable in object) {
//     // code to be executed
// }    
let myObject2 = {
    name: "Kainat",
    age: 23,
    city: "Karachii"
};  
for (let key in myObject2) {
    //console.log(myObject2[key]);
    console.log(`${key}: ${myObject2[key]}`);
}

let myArray2 = ["apple", "banana", "cherry"];
  for (const key in myArray2) {
    console.log(key);
    
    
  }