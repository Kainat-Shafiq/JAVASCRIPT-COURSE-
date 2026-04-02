            // 6-foreach loop (arrays specific loop)
                     // Arrays ya iterable items ke liye use hota hai.
                     // Har item ko ek ek karke print karega.   
// array.forEach(function(currentValue, index, array) {
//     // code to be executed
// });
let myArray = ["apple", "banana", "cherry"];

myArray.forEach(function (element) {
    console.log(`the element is ${element} `);
    //console.log(element);
    
});

// arrow function
myArray.forEach((element) => {
    console.log(`the element is ${element} `);  
    //console.log(element);
});

myArray.forEach((element, index,arr) => {
    console.log(`the element is ${element} and the index is ${index} and the array is ${arr}`);  
    //console.log(element);
});