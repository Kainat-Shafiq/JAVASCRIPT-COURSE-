
//1-what are js varialbes
  // In JavaScript Variables are containers that store data values. example,
let userName = "Kainat"
let age = 23;
console.log( userName , age );


// 2-how we can declare variables in js
   //Variables are declared using 3 keywords: let ,const ,var
   //Example:
const userId = 144553                //fixed (value cannot change)
let   userEmail = "shafiqkainat8@gmail.com"
var   accountPassward = "12345"
console.table([userName, userId,userEmail,age,accountPassward]);


// 3-how we can assign values to variables in js
  // assign value means that putting value or data inside the variables
  //Example:
let city;
 city = "Karachi"
 console.log(city);
   
 
// 4-what are the rules for naming variables in js
   // RULE 01:Name must start with a letter, _ , or $
let name;
let _age;
let $score;
   // RULE 02:Cannot start with a number
//let 1name;   ERROR
   // RULE 03:Cannot use JavaScript keywords
//let var = 23;  ERROR
   // RULE 04:Variable names are case-sensitive  
let country = "Pakistan";
let Country = "switzerland";  
console.log(country , Country);


// 5-what are the different types of variables in js
   // let ,const ,var
let score = 10;
score = 20;        //Value can change
console.log(score);

const myPassward = "abcd"    // value can not change
//myPassward = "efgh"        ERROR
console.log(myPassward);


// 6-how to use variables in js
let myname = "Kainat";
let myage = 23;
let myId = 4528;
let myEmail = "shafiqkainat8@gmial.com"
console.table([myname ,myage ,myId, myEmail]) 
