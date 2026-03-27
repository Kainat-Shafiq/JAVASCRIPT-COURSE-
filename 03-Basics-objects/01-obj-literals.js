// Decleared objects in 2 methods 
   // 1. Object literal 2. Object constructor 

// 1. Object literal syntax
   //*simple our comman mathod hai object bananay ka
   //*Direct {} ka use kar k object create karty hein
const mySym = Symbol("key1");
let person = {
    name: "Kainat",
    "full name" : "Kainat Shafiq"  , //ab isko .  say access nhii kar sakty
    age: 23,    
    city: "Karachi",
    lastLoginDays: ["Saturday" , "Sunday"],
    email: "shafiqkainat123@gmail.com",
    [mySym] : "myValue"   // symbol ko as a key use karna
    
}
console.log(person);
console.log(person.city);
console.log(person["email"]);
//console.log(person.full name ); error
console.log(person["full name"]);
console.log(person[mySym]);
console.log(person.city = "Islamabad"); // yahn par city change hogi
  
//Object.freeze(person)
console.log(person.city = "Lahore"); // freeze karne k bad city change nhii hogi
console.log(person.city);
 person.greeting = function() {
    console.log("Hello, I am " + this.name);
}
person.greeting(); // method ko call karna  


person.greeting2 = function() {    
    console.log(`Hello I am ,${this.name} and I am ${this.age} years old `);
  
}
person.greeting2();

                         // *Symbol* //
 //symbol aik unique premitive value hai or har symbol unique hota hai chahy discriptionn same ho
const mySym1 = Symbol("key1");
const user = {
    userName: "Sana",
    userAge:  23 ,
    [mySym1]: "secret key" ,
}