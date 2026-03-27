/******  Array   *********/
// array is a container to stored multiple values (in one place) eg:
let fruits = ["Apple" , "Mango" ,"Orange" ]
console.log(fruits);

 //remove value retured bhi karta hai eg"
let removed = fruits.pop();
console.log(removed);        // pop()= last item  delete + usko returned b kare (output:Orange)

console.log(fruits.length);   // to fined the length

//*******  Method:2 ********/
 let myfruits = new Array ("orange", "grapes","apple", "banana") //is mein humy [] iska use nhii krna prhta 
console.log(myfruits[2]);


/*******  Array Methods  *******/
//1- add value : push()  or unshift()
fruits.push("Grapes")    // add new value (end)
console.log(fruits);

fruits.unshift("Grapes")
console.log(fruits);

//2- removes value : pop() or shift()
fruits.pop();           // remove element 
console.log(fruits);    
 
fruits.shift();
console.log(fruits);

//3-Check Info : length
console.log(fruits.length);

//4- convert/Join : join() array ko string banata hai
let text = fruits.join(",")
console.log(text);

//5-Search : indexOf()
console.log(fruits.indexOf("Mango"));


//6-Loop / work on each value :forEach()
//forEach() array ke har element par ek ek karke kaam karta hai 
fruits.forEach(function(item){
    console.log(item);
})

//7-Create New array :map()
let number =[1,2,3,4];
let double = number.map(n=>n*2)
console.log(double);


//8- check : include()
console.log(fruits.includes("Mango"));
console.log(fruits.includes("grapess"));

//9- slice() / splice()
//slice(): copy nikalta hai
let fruitsList = ["Apple", "Mango", "Orange", "Banana"];
let result = fruitsList.slice(1, 3);
console.log(result);

//splice(): original chanmge karta hai
//splice(start, delete Count,newItem)
// start → kaha se shuru karna hai
// deleteCount → kitne items remove karne hain
// newItem → optional, new item add karna
let fruitsList2 = ["Apple", "Mango", "Orange"];
fruits.splice(1, 1);
console.log(fruitsList2);

