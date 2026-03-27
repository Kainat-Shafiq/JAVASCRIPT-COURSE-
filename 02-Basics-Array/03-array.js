
// **************Array Destructuring*******************
//Normal way:
let arr = [10, 20, 30];
let a = arr[0];
let b = arr[1];
console.log(arr);


//Destructuring way:
let arr2 = [10, 20, 30];
let [d, e, f] = arr2;
console.log(arr2);

let colors = ["red", "green", "blue"];
let [primary, secondary, tertiary, quaternary = "yellow"] = colors;
console.log(quaternary);

let numbers = [1, 2, 3, 4, 5];
let [g, , h, ...rest] = numbers;
console.log(a, b, rest);

let str = "coding";
let reversed = str.split("").reverse().join("");
console.log(reversed);

let colors2 = ["red", "green", "blue", "yellow", "green"];
let index = colors2.indexOf("green", 2);
console.log(index);


/********  Add & Remove elements fromthe mid of an array *************/
                   //Splice & Removed//
let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let removed = fruits.splice(2, 2); // index 2 say 2 elements ko remove karna
console.log(fruits);  // ["apple", "banana", "kiwi"]
console.log(removed); // ["orange", "mango"]


let mycolors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "purple"); // index 1 say 0 elements remove karna or index 1 par "yellow", "purple" ko add karna
console.log(mycolorscolors); 

let mynumbers = [1, 2, 3, 4, 5];
numbers.splice(1, 2, 6, 7, 8);  // index 1 say 2 elements ko remove karna [1,4,5] rehgy phir index 2 par 6,7,8 ko add karna
console.log(mynumbers);