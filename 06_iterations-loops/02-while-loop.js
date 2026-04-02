            //2. while loop
           // Jab tak condition true hai, tab tak code repeat karo.
           //Agar condition false hai, to loop ek bhi baar nahi chalega.
// while (condition) {
//     // code to be executed
// }
let students = 1;
while(students <= 10){
    console.log(`the students of class 9th are ${students}`);
    students= students + 1;   // students++  ya students += 1 bhi likh sakte hain
}

myArray = ["apple", "banana", "cherry"];
let index = 0;  
while (index < myArray.length) {
    console.log(`value of my array is ${myArray[index]}`);
    index++;
}