
                  //Immediately Invoked Function Expression(IIFE)
                  // Jo function foran he run ho jye wo IIFE hota hai
                  // Global scope k pollution/ variables se bachne ke liye use hota hai
(function user() {
    console.log("This is an IIFE!");
})();  // IIFE ko define karne ke baad () lagate hain taki wo turant run ho jaye

// IIFE with parameters             
(function(name) {
    console.log(`Hello, ${name}! This is an IIFE with parameters.`);
})("Kainat");  // IIFE ko define karne ke baad () lagate hain taki wo foran run ho jaye aur parameters pass karte hain   

//arrow function IIFE
(() => {
    console.log("This is an arrow function IIFE!");
})();

