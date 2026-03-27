// 2. Object constructor 
//1-const jsUser2 = new Object()    yeh aik singleton object hai
//2-const jsUser = {}              or yeh aik non-singleton object hai
let person2 = new Object();
person2.name = "Maryam";
person2.age = 23; 
person2.id = "051"
console.log(person2);
 
// object k ander or objects b create kar sakty hain
const regularUser ={
    email: "kainatshafiq1234@gmail.com",
    userfullname : {
        userfirstname: "Kainat",
        userlastname: "Shafiq"
    }
}
console.log(regularUser.userfullname);
console.log(regularUser);


const obj1 = { 1: "one" , 2: "two" , 3: "three" }
const obj2 = { 4: "one" , 5: "two" , 6: "three" }
const obj3 = Object.assign(obj1 , obj2)              // yeh dono objects ko merge kar dega
const obj4 = {...obj1 , ...obj2}                    // spread operator k through objects ko merge kar dega
console.log(obj3);                                  // same kaam ho raha 
console.log(obj4);                                  // dono mein same kaam ho raha

//array k ander objects b create kar sakty hain
const users =[                                        // array
    {
        id: 1,                                        // array ka object1
        email: "abc@ganil.com"
    },
    {
        id: 2,                                        // array ka object2
        email: "def@gmail.com"

    },
    {
        id: 3,                                      // array ka object3
        email: "hhh@gamil.com"
    }
]
users[1].email 
console.log(person2);

// Important methods for objects: 
  // is par loop b laga sakty hein hum 
console.log(Object.keys(person2));   // object k keys ko array ki form mein return karega
console.log(Object.values(person2));  // object k values ko array ki form mein return karega
console.log(Object.entries(person2));  // object k keys aur values dono ko array ki form mein return karega
 

