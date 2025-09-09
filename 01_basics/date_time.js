// Dates

let myDate = new Date()
// console.log(myDate); //2025-09-04T18:01:22.393Z
// console.log(myDate.toString()); //Thu Sep 04 2025 23:31:22 GMT+0530 (India Standard Time)
// console.log(myDate.toTimeString()); //23:31:22 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Thu Sep 04 2025
// console.log(myDate.toLocaleString()); //9/4/2025, 11:31:22 PM
// console.log(myDate.toLocaleTimeString()); //11:31:22 PM
// console.log(typeof myDate); //object : date is a object

let myCreatedDate1 = new Date(2023, 0, 23)
let myCreatedDate2= new Date(2023, 0, 23, 5, 3)
let myCreatedDate3 = new Date("2023-01-14")
let myCreatedDate4 = new Date("01-14-2023")
// console.log(myCreatedDate1.toLocaleString()); //--> 1/23/2023, 12:00:00 AM
// console.log(myCreatedDate2.toLocaleString()); //--> 1/23/2023, 5:03:00 AM
// console.log(myCreatedDate3.toLocaleString()); //--> 1/14/2023, 5:30:00 AM
// console.log(myCreatedDate4.toLocaleString()); //--> 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()

console.log(myTimeStamp);
// console.log(myTimeStamp.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })
