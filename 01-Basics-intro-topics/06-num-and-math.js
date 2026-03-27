// num
// 1-automatically detect karta hai string type ko
// 2-new object mein define karna (string type ko)
const score = 600;
console.log(score); // output 600

const balanceScore = new Number(300)
console.log(balanceScore);   // output [Number:300]

// Number ko String mein convert karna + lenght check karna
console.log(balanceScore.toString().length);
console.log(balanceScore.toFixed(2)); // decimal value ko fixed karna

const otherbalanceScore = 28.6579;                               // 128.6579
console.log(otherbalanceScore.toPrecision(3));  //ouyput : 28.7     129

const hundreds = 10000000;
console.log(hundreds.toLocaleString());



//***********  Maths  *************/
//Math is a built-in library in JavaScript that comes by default.

console.log(Math); // Math is an object that contains many properties and methods for performing mathematical operations.
console.log(Math.abs(-5)); //Absolute value" ignore Negative sign 
console.log(Math.round(4.6));
console.log(Math.ceil(4.8));
console.log(Math.floor(4.8));
console.log(Math.sqrt(4));
console.log(Math.pow(4,2));
console.log(Math.min(34.86979,43,90,29));
console.log(Math.max(34,86979,43,90,29));

console.log(Math.random()); //output: always between (0 - 1)
console.log(Math.random()*10);
console.log((Math.random()*10) + 1); // if output = 0 (isy avoid karny k liye +1 add kiya hai)
console.log(Math.floor(Math.random()*10) + 1);  

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min + 1)) + min);

