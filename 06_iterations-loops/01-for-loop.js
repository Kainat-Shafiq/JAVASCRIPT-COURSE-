                           //aterations and loops
// Loops are used to repeat a block of code until a specified condition is met. They allow you to automate repetitive tasks and iterate over data structures like arrays and objects. 
// TYPES OF LOOPS       
// 1-for loop
// 2-while loop
// 3-do while loop
// 4-for...in loop
// 5-for...of loop  

                                  // 1-for loop
                        // jab humy pata ho kitni dafa code ko repaet karana hai.          
// for (initialization; condition; increment/decrement) {
//     // code to be executed
// }    
for (let a = 0; a <= 10 ; a++) {
    const element = a;
    if(element ==5){
        console.log("5 is the best number");
        break;
    }
    console.log(element);
}

 // outer and inner loop (nested loop)
    //Table of 1 to 10
for (let a = 1; a <=10 ; a++) {
     console.log(`Outer loop a: ${a}`);
     
    for (let b = 1; b <=10 ; b++) {
     //console.log(`Inner loop b: ${b} and inner loop a: ${a}`);
     console.log(a , "*" , b , "=" , a*b);
     

    }   
}


let myArray = ["apple", "banana", "cherry"];
console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}