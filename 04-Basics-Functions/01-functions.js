
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

            // rest parameters in js
function calculateCartPrice(item1){
      return item1;
}
console.log(calculateCartPrice(100));  // 100 aghr mein yahn 2 ya 3 arguments pass karti hun tab b mere pass output 100 he aye ga

 //here we use (...) rest  operator to handle multiple arguments in a function

function calculateCartPrice2(...item1){  // ab yahn maany rest parameter use kiya hai 
return item1;
}
console.log(calculateCartPrice2(100, 200, 300));   //ab mere pass yahn array mein output aay ga [100, 200, 300]  rest parameter se hum multiple arguments ko array mein store kar sakte hain
 
//Or
function calculateCartPrice3(val1,val2,...items){   //ab yahn mere pass output mein val1 or val2 print nhii hogi 
    return items;
}
console.log(calculateCartPrice3(10,20,100,200,300));  //ab mere pass yahn array mein output aay ga [100, 200, 300]  rest parameter se hum multiple arguments ko array mein store kar sakte hain

  //yahn hum object ko funcction k ander pass karwayen gy
  const user = {
    username: "kainat",
    password: 19945
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and password is ${anyobject.password}`);
}
handleObject(user);



// ab hum Array ko function k ander pass karwayen gy
const numbers = [1, 2, 3, 4, 5];
function sumArray(getArray){
    return getArray[1]
}
console.log(sumArray(numbers)); 

 