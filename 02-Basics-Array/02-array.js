
//Combine arrays:
const marvelHeros = ["thore" ," ironman" , "sspiderman"];
const dcHeros = ["superman", "flash" , " badman"];
marvelHeros.push(dcHeros);
console.log(marvelHeros);
console.log(marvelHeros[3]); // dc hero ko pora aik element consider kar raha ahi
console.log(marvelHeros[3][1]);



//***   next method concat() ***/
      //Combine (merge) arrays:
const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros);

//***spread operator (...)   *****/
const newHero = [...marvelHeros,...dcHeros]
console.log(newHero);
// Nested arrays ko single-level array mein convert karta hai
const anotherArray = [1, 2,  3, [4, 5, 6], 7, [6,7, [4, 5]]]
const real_anotherArray = anotherArray.flat(Infinity);
console.log(real_anotherArray);

console.log(Array.isArray("Kainat"));  // kya yeh array hai (false)
console.log(Array.from("Kainat"));    //  array mein convert kary ga

let arr = ["a", "b", "c", "d"];
let first = arr.shift();
let last = arr.pop();
console.log(first, last, arr);