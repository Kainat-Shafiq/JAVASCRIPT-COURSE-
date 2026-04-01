                        //Control flow in JavaScript
// Control flow refers to the order in which individual statements, instructions, or function calls are executed or evaluated in a programming language. It determines how the program's execution proceeds based on conditions, loops, and function calls. 
// TYPES OF CONTROL FLOW
// 1-Sequential execution
// 2-Conditional statements
// 3-Loops
// 4-Control statements (break, continue)
// 5-Function calls
// 6-Error handling (try/catch)
// 7-Asynchronous flow (callbacks, promises, async/await)
// 8-Call stack & execution context
// 9-Logical operators & ternary

// 1-Sequential execution
     //(JS ka code by default line by line chalta hai)
console.log("This is the first line.");
console.log("This is the second line.");
console.log("This is the third line."); 

// 2-Conditional statements(decision making)
   //(jab condition ki base par decision lyna ho toh)
   // 1- if/else   2-else if   3-switch
               //Comparison operators:
               // == (equal)
               // === (strict equal)
               // != (not equal)
               // !== (strict not equal)
               // > < >= <=

// if/else statement

const temperature = 25;
if (temperature > 30) {
    console.log("temperature is less than 30");
   } else {
    console.log("temperature is greater than 30");
   }

if (temperature === 30) {
    console.log("temperature is exactly 30");
} else{
    console.log("temperature is not exactly 30");
}

const score = 200;
if(score > 100){
    const power = "fly"                     // jab mein yahn const hata kar var ka use karun gi tab yeh bhair b run hoga is liye var ka use nhii krty
    console.log(`user power: ${power}`);  
}
//console.log(`user power: ${power}`);   ab yeh yahn sun nhii hoga kun k yeh block scope k bhair hai


// nested if statement
const age = 25;
if (age >= 18) {
    console.log("You are an adult.");       
} else if (age >= 13) {
    console.log("You are a teenager.");
} else {
    console.log("You are a child.");
}


// multiple conditions 
const userLoggedIn = true;
const debitCard = true;
const creditCard = false;
if(userLoggedIn && debitCard && !creditCard){      
    console.log("You can make a purchase.");
}

const loggedInWithGoogle = false;
const loggedInWithFacebook = true;
if(loggedInWithGoogle || loggedInWithFacebook){
    console.log("User is logged in.");
}
