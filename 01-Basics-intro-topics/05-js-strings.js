 //********   STRINGS  ***********/

let Pakistan = "Karachi"        //strings are immutable that can not be change
    Pakistan[0] = "C";          //output : Karachi 
    console.log(Pakistan);
   
let fruit = "Mango"
    fruit = "Orange"           //Here "mango" was not modified , a new string "orange " was created.
    console.log(fruit);
    

                    //******  String Concatenation  *********/
                   //combine or join pieces of text together. 
    //+ operator              
let firstName = "Kainat";
let lastName = "Shafiq";

let fullName1 = firstName + " " + lastName;    // ""=> use for space output: Kainat Shafiq
let fullName2 = firstName + lastName;          //                    output: KainatShafiq
console.log(fullName1);                   
console.log(fullName2);

let age2 = 22;
console.log("My age is " + age2);
   
  // += operator
let greeting = "Hello";
greeting += ", world!";
console.log(greeting);

 // concat()
let str1 = 'Hello';
let str2 = 'World';

let result = str1.concat(' ', str2); 
console.log(result);

//strings Object

const name = "kainat";
const repoCount = 2;
console.log(name + repoCount + " ");

const gameName = new String("granny-gr-gm");     // string object
console.log (gameName);
console.log(gameName[0]);     //[0] is not array its a key, 
 console.log(gameName.length);
 console.log(gameName.__proto__);   
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('y'));
 
//substring() method
const newString = gameName.substring(0 , 4)
console.log(newString);

//slice: ƒ slice() method
// Negative indexes:g r a n n y -5 -4 -3 -2 -1             
// slice(start , end) start → include hota hai end → include nahi hota
 anotherString = gameName.slice(-5 , 1)  
console.log(anotherString);    

//trim: ƒ trim()
// remove extra spaces
const newStringOne = "   Kainat "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace and includes
const url ="https://google.com/google%20com";
console.log(url.replace('%20' ,'--'));
console.log(url.includes('google'));

//convert string to array we use split method
console.log(gameName.split('-'));







