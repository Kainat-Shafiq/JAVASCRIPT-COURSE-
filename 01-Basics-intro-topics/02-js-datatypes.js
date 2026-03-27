"use strict"; // treat all JS code as a newer version

alert(3+3)     //we are using node js, not browser

console.log(3+3);
console.log("Kainat");

let name = "Kainat"    //string dataTpye
let age = 23           // number
let isLogIn = false 
let state;   

//** Premitive DataType**//
// 7 types
//number => 2 to power 53 range
//bigint very large numbers (12345678901234567890n)
//String => ""
//boolean => true/false
//null=> intentionally empty value
//undefined => varabile declare hai but value nhii de abhi 
//Symbol → unique identifier

//** Non-Premitive DataType**//
//object
//Object → {name: "Kainat", age: 20}
//Array → [1, 2, 3] (actually object hi hota hai)
//Function → JS me functions bhi objects hi hote hain
console.log(typeof"");   //output string
console.log(typeof null);  //output object
console.log(typeof undefined) ; //output undefined



// JS is statically typed or dynamically typed language?
    /*dynamically typed language***
Variable ki data type automatically change ho sakti hai
Programmer ko type likhne ki zarurat nahi hoti.*/


const value = 85
const groupValue = 90.5

const isLoggedIn = false    // type: boolean
const outsideTemp = null    //type: object
let userEmail;              //type: undefine

const id = Symbol('123')          // symbol means unique identifier 
const anotherId = Symbol('123')
console.log(typeof anotherId);

console.log(id === anotherId);      // false because yeh dono aik dusre say unique hein

 const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["maryam", "Eisha", "zabi"];  // array 
console.log(heros);


let myObj = {                                    //Object => name (key), kainat(value)
    name: "Kainat",
    age: 23,
}
console.log(myObj);

let Students={
    stuName:"Hamza" ,
    fatherName : "azmeer",
    stuID:6567
}
console.log(Students);

//Functions//
/*jab hum aik dafa function bana lyte hein toh ose apni mazii say call karwa sakty 
hein yahn need ho humy jese nechy */


const myFunction = function(){   //myFunction (varaible name) ,function()os variable mein hum function ko store karwa rahy hein

    console.log("Hello world");
}
myFunction();                //yahn hum function ko call kar rahe hain

const stuFunction =function (){
    stud1 = "sana";
    stud1Id = 87656;
}
stuFunction();
//or
function myStudents(){
    console.log("Hello Students");
}
myStudents();
console.log(typeof myStudents);  //type function .....or object function

//===    Memory  ===
/*Stack Memory
   Stack memory mein primitive data types store hote hein.
   Stack mein copy banti hai, original value change nahi hoti.
 Heap Memory
   Heap memory mein non-primitive (reference) types store hote hain
   Heap mein reference milta hai, copy nahi.*/
   
  let num1 = 33 ;
  let num2 = num1;
      num2 = 44;
      console.log(num1);   //33 original
      console.log(num2);   //44 copy

let obj1 = {
  name: "Kainat"
 };
let obj2 = obj1;
obj2.name = "Ali";
console.log(obj1.name); // Ali     
console.log(obj2.name); //Ali
      

