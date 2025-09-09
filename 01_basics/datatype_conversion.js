/*Here we will learn datatypes conversion operations in js
firstly lets learn datatypes in js
JavaScript Data Types

JavaScript has two main categories:

✅ Primitive Types (basic building blocks)

Number → integers, floats

String → text

Boolean → true / false

Undefined → variable declared but no value assigned

Null → intentional empty value

Symbol → unique identifiers

BigInt → very large numbers

✅ Non-Primitive (Reference) Types

Object (arrays, functions, dates, etc.) */

//conversion from number to string

let num=56
let nameof = String(num)
console.log(nameof) //it outputs 56 as a string
console.log(typeof nameof) //string
console.log(typeof num) //Number

//conversion from string to number
let text = "33"
let num2 = Number(text)
console.log(typeof text , typeof num2) //string number
console.log(num2) //-->33
let text2 = "55abc"
let num3 = Number (text2)
console.log(typeof text2)
console.log(num3) //Nan ==> Not a number 

//conversion from boolean to number or string and vice versa

console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean("Hello"));  // true
console.log(Boolean(123));      // true