// here we will learn the variables in javascript
const studentID= 23;
let studentname = "Ganesh";
//let variable can be updated but cannot be redeclared 
var studentadd = "Kolhar bk";
//var variables is not preferred to use because it can be redeclared which is not good in modern js
//always use let instead of var 

//print
// studentID = 78; this is not allowed to constant variables
studentname = "Dipak"

//we can also print data in table format
console.table([studentID,studentname,studentadd])

//now we will learn variables scope 
// 1.global scope of variable : let a = 45 ; this will behave as global variable
// 2.block scope
{
    let num = 80;
    var num2 =89;
    console.log(num , num2); //it is valid
}
console.log(num,num2); //variables cannot be accessed outside the block

// 3.function scope :variables are accessible only inside the function scope
