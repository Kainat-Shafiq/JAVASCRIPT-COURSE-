//**********    Check If an Object Has a Property   *******
const person1 = {
  name: "Alice",
  age: 30
};

console.log(person1.hasOwnProperty("name")); // true
console.log(person1.hasOwnProperty("job")); // false

const person2 = {
  name: "Alice",
  age: 30
};
console.log("name" in person2);

//**  Accessing Properties from Nested Objects and Arrays in Objects
const person3 = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",     // object ke andar object
    phone: {                          
      home: "123-456-7890",         // object ke andar object ke andar property
      work: "098-765-4321"
    }
  }
};

console.log(person3.contact.phone.work);


//********   JSON = JavaScript Object Notation *************/     
const person4 = {
  "name": "Kainat",
  "age": 23,
  "isStudent": true,
  "hobbies": ["read Novels", "gaming"]
};
      //**********  Accessing Values ********/
      console.log(person.name);      // "Kainat"
console.log(person4.age);       // 23
console.log(person4.isStudent); // true
console.log(person4.hobbies);   // ["read Novels", "gaming"]
console.log(person4.hobbies[0]); // "read Novels"



// **********  JSON.parse() and JSON.stringify() Work ********/
     //JSON.parse() :JSON string ko JavaScript object mein convert karta hai.
const jsonString = '{"name": "Alice", "age": 30}';

// JSON string → JS object
const obj = JSON.parse(jsonString);

console.log(obj.name); // Alice
console.log(obj.age);  // 30


                 //JSON.stringify()
      //JSON.stringify():JavaScript object ko JSON string mein convert karta hai.
const person = { name: "Alice", age: 30 };

// JS object → JSON string
const jsonStr = JSON.stringify(person);

console.log(jsonStr); 
// '{"name":"Alice","age":30}'


//********Object Destructuring/ object de-structure ******
//Object destructuring ek shortcut hai JavaScript mein, jisse hum object ke properties ko directly variables mein extract kar sakte hain.
//Alag se variable banane ke liye baar-baar dot notation use karna nahi padta.
const person5 = {
  name: "Kainat",
  age: 23,
  city: "Karachi"
};

// Destructuring
const { name, age } = person5;  // kahn say value extract karni hai(person5 k object say)

console.log(name); // Kainat
console.log(age);  // 23