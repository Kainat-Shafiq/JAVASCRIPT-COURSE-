//***  Dates ******/
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());   // 16/03/2026, 10:04:43 pm
console.log(myDate.toTimeString());
console.log(myDate.toDateString());    //Mon Mar 16 2026
console.log(typeof myDate);            //object

//method 1:
let myCreatedDate = new Date(2026, 2,16);
console.log(myCreatedDate.toLocaleDateString());   //16/03/2026
console.log(myCreatedDate.toLocaleTimeString());   //12:00:00 am
console.log(myCreatedDate.toDateString());        //Mon Mar 16 2026

 //method 2:
 let myNewCreatedDate = new Date(2026, 2,16);
 console.log(myNewCreatedDate.toLocaleString());  //16/03/2026, 12:00:00 am

 let otherCreatedDate = new Date(2026,0,16,5,3);
 console.log(otherCreatedDate.toLocaleString()); //16/01/2026, 5:03:00 am
 
//******  TimeStamp  ******* */
let myNewDate = new Date("03-24-2026")
console.log(myNewDate);

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myNewDate.getTime());
console.log(Date.now());



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());





