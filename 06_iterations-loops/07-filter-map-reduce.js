     
//      //Array Methods: filter, map, and reduce
//      // Phir under-heading ya points mein tum har ek ka short explanation de sakti ho:
//      // 1-filter() → Array ke elements ko condition ke basis pe filter karta hai.
//      // 2-map() → Array ke elements ko modify karke naya array banata hai.
//      // 3-reduce() → Array ke elements ko combine karke ek single value banata hai.

//                                       // 1-filter() method
//   // filter() method ek naya array return karta hai jisme wo elements hote hain jo specified condition ko satisfy karte hain.
//   // syntax: array.filter(function(element, index, array) { /* condition */ });    

//   const numbers = [1, 2, 3, 4, 5, 6,7,8,9,10];
//   numbers.filter(function(num) {
//       return num % 2 === 0; // condition: even numbers
      
//   });
   
//     // arrow function
//   const evenNumbers = numbers.filter((num) => num % 2 === 0);    
//   console.log(evenNumbers);
//   //or aghr hum {} matlb scope ka use karen gy toh return ko lazmii use krna hoga
//   const myNumbers = numbers.filter((num) => { return num > 5 });
//   console.log(myNumbers);



//   const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];
  
//   const userBooks = books.filter((bk)=> bk.genre === 'Fiction' );
//   const userBooks2 = books.filter((bk)=> bk.publish >= 2000 && bk.genre === 'Science' );
//   console.log(userBooks);
//   console.log(userBooks2);
     

//                                        //2-map() method
//      // Array ke har element par koi operation perform karna aur naya array banana
//     // syntax: array.map(function(element, index, array) { /* operation */ });
   const num = [1, 2, 3, 4, 5, 6,7,8,9,10]; 
// const newNum =num.map((no) =>  no * 2 );
//   console.log(newNum);
// const newNum2 =num.map((no) =>  no + 10 );
//     console.log(newNum2);


    //.map .map .filter
const newNum3 = num
                .map((no) => no * 2)         //2,4,6,8,10,12,14,16,18,20
                .map((no) => no + 10)         //12,14,16,18,20,22,24,26,28,30
                .filter((no) => no > 20);     //22,24,26,28,30
console.log(newNum3);



                       // 3-reduce() method
          // Array ke elements ko combine karke ek single value banata hai.
// syntax: array.reduce(function(accumulator, currentValue, index, array) { /* operation */ }, initialValue);
const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce(function (acc,currvalue){
    console.log(`Accumulator: ${acc} and Current Value: ${currvalue}`);

    return acc + currvalue;
}, 0)
console.log(sum); // Output: 15

// arrow function
const sum2 = numbers2.reduce((acc, currvalue) => acc + currvalue, 0);
console.log(sum2); // Output: 15


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);