let score_1 = 53                // score=> Variable hai isko 53 value assign ki hai.
 console.log(typeof(score_1)); // dono tarha likh sakty hein
 console.log(typeof score_1);  // data type number hai
 console.log(score_1);        // yahn number output par aye ga
 console.log("score_1");      // yahn string mein score likha hua aye ga
 
 //OR
let score_2 = "53"
console.log(typeof(score_2));         // dono tarha likh sakty hein
 console.log(typeof score_2);         //in dono mein string dataTyoe hai
 console.log(score_2);                // yahn number output par aye ga
 console.log("score_2");              // yahn string mein score likha hua aye ga


 let score_3 ="33ab"                      // string data type
 let valueInNumber = Number(score_3)  //let=> variable declare karne ka keyword hai.
                                      //valueInNumber => variable ka naam hai
  console.log(valueInNumber);         // number dataType
  console.log(typeof(valueInNumber)); // type number
  console.log(score_3);
  console.log(typeof score_3);
  console.log(valueInNumber);          // NaN =>not a number
  

  let score_4 =null
  console.log(score_4);
  console.log(typeof score_4);
  let valueInNumber2 = Number(score_4)
  console.log(valueInNumber2);
  

  let score_5 = undefined
  //console.log(score_5);
  console.log(typeof score_5);
  let valueInNumber3 = Number(score_5)
  console.log(valueInNumber3);
  
  let score_6 = true
  //console.log(score_6);
  console.log(typeof score_6);
  let valueInNumber4 = Number(score_6)
  console.log(valueInNumber4);
         
        //Conversions
        //"33"=>33  convert string to number 
        //"33abc"=> NaN   type number he hai             
        // true => 1; false => 0 

        let isLoggedIn = 1
        let booleanIsLoggedIn = Boolean(isLoggedIn)
        console.log(booleanIsLoggedIn);
        console.log(typeof isLoggedIn);
        console.log(typeof booleanIsLoggedIn);
    
        //1=> true; 0=> false;
        //""=> false 
        //"kainat" => true

        //CONVERT INRO STRING
let someNumber = 27;
let stringNumber = String (someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
  

//***************  Operations  *****************//


let value = 5;
let nevValue = -value;
console.log(value);
console.log(nevValue);
console.log(typeof nevValue);
console.table([value,nevValue])

console.log(2+2);     // addition        4
console.log(2-2);     // subtraction     0
console.log(2*2);     // multiplication  4
console.log(2**2);    //power 2^2        4 
console.log(2**3);    //2^3              8
console.log(2/3);    //division          0.66666
console.log(2%3);    // remainder        2

let str1 = "Hello";
let str2 = " Kainat"
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2 );           //12
console.log(2 + "1");           //21
console.log(1 + "2");           //12
console.log("1" + 2 + 2);       //122
console.log(1 + 2 + "1");       //31

/*JavaScript Operator Precedence (simple order)

1️⃣ () Parentheses
2️⃣ * / % Multiplication, Division, Modulus
3️⃣ + - Addition, Subtraction
4️⃣ > < >= <= Comparison
5️⃣ == === != !== Equality check
6️⃣ && Logical AND
7️⃣ || Logical OR
8️⃣ = Assignment */

console.log(3 + 4 * 5 % 3 );    //5
console.log( (3 + 4) * 5 % 3 ); //2
console.log(+true);
console.log(+ false);
console.log(- false);
console.log(+ "");              //0


let num1, num2, num3
num1 = num2 = num3 = 2 + 2;
console.log(num1);
   
//Increment (++)
//Prefix Operator & Postfix Operator
 let a = 3;
const b = ++a;
console.log([a,b]);

 //OR

 let c = 3;
const d = c++;
console.log([c,d]);

let gameCounter = 200;
    ++gameCounter;
 console.log(gameCounter);
    
