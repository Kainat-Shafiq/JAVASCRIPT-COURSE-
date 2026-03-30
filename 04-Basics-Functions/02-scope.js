 
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


// ++++++++++++++++++ Nested Scope ++++++++++++++++++
function one(){
    const username2 = "kainat";

    function two(){
        const password2 = "password123";
        console.log(username2);  //kainat
    }
    //console.log(password2);
    two();
}
one();

if (true) {
    const username = "Kainat";
    if (username === "Kainat") {
        const website = " youtube"
         console.log(username + website);  //
    }
    // console.log(website); // error block scope k ander hi access ho sakta hai
}




// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}


// addTwo(5)                             yahn error aye ga kunkay hum phely call  karwa rahy hein
// const addTwo = function(num){
//     return num + 2
// }
