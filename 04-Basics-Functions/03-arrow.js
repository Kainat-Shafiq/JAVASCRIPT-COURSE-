
             // **********   This and arrow functions     ********//

                    //this. current object ko refer karta hai
const user = {
  name: "Kainat",
  greet: function() {
    console.log(`${this.name}, welcome to JavaScript!`);
  }
};
//console.log(this.name);   undefined aay ga object ke bahar this use karne se undefined aay ga

user.greet();     
 user.name = "Kainat Shafiq";      //yahn many name change kar diya hai
 user.greet();


                    // arrow function Arrow .....
                    // function JavaScript mein function likhne ka short (modern) tareeqa hai
                    //Isme function keyword ki jagah => use hota hai
// normal function
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));  // Output: 8

// arrow function
const addArrow = (a , b)=> a + b;
console.log(addArrow(5, 3));  // Output: 8

// arrow function with single parameter
const square = x => x * x;
console.log(square(4));  // Output: 16


 let x = 10;

function printX() {
    let x = 20;
    console.log(x);
}

printX();

console.log(x);


const exampleFunction = (param1, param2) => param1 + param2;  //(explicit return)
console.log(exampleFunction(3, "Something"));

const sum = (num1, num2) => num1 + num2
console.log(sum(0, 0) + 10);