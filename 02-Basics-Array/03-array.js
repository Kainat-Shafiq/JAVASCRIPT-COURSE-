
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