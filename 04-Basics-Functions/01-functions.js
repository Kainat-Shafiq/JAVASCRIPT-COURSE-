
function MyName(){
    console.log("K");
    console.log("A");
    console.log("I");
    console.log("N");
    console.log("A");   
    console.log("T");
}
MyName()

function addTwoNumbers(num1, num2) {  // num1 and num2 are parameters
    result = num1 + num2;
    console.log(result); 
    return result;
}
let answer = addTwoNumbers(10,15);    // 10 and 15 are arguments
console.log(answer);

function userLogin(username, password) {
    if (username === "kainat" && password === "password123") {
        return "Login successful!";
    } 
    return `${username} just logged in with password: ${password}`;
}

let login =  userLogin("kainat", "password123")   //isko varable mein store is liye kiya hai taake usko print kar sakein
console.log(login);
//console.log(userLogin());  // undefined just logged in with password: undefined 

             
              // *********           function Scope in JS        *******//
            //   scope means k koi variable kahn tk access ho sakta hai  javascript mein
            //    *********           Types Scope in JS        *******
            //     we have four types of scope in jn js
            //     1-Global     2- function     3- Block     4-local
// 1-Global (sab jagha access ho sakta hai)
let stuName = "Asad";
let age = 17;
let subject = "Maths";
function student(){                //is mein hum parameters use nhii krty hain kyunki hum global variable use kr rhy hain
    // console.log(stuName);
    //   stuName = "Asad";
    //   age = 17;
    //   subject = "Maths";
 return`my student name ${stuName}, his age is ${age},and subject ${subject}`

}
console.log(student());


//2- function scope (sirf function k ander he use hota hai)
function test(){
    return a = 10;
    console.log(a);  
}
test();
 //console.log(a);  // a is not defined   

//3- Block scope (sirf block k ander use hota hai)
if(true){
    let block = "I am block scope";
    console.log(block);
}
// console.log(block);  // block is not defined

//4- local scope = function + Block  (jo b limited ho ander he access ho sakta hai)   
function demo(){
    let x = 5;
    if(true){
        let y = 10;
        console.log(x);
        console.log(y);
    }       
    console.log(x);
    // console.log(y);  // y is not defined  
}
demo();