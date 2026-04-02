                         
                           //3- do…while loop
                     // Code pehle execute hota hai, phir condition check hoti hai.
                     // Loop kam se kam 1 baar zaroor chalega, chahe condition false ho.
// do {
//     // code to be executed
// } while (condition); 
let count = 1;
do {
    console.log(`the count is ${count}`);
    count++;
} while (count<=5);  


// yeh condition false hai lakin aik bar loop chaly ga
let i = 5;
do {
    console.log("Hello");
    i++;
} while(i < 3);
// Output: Hello (1 time)
