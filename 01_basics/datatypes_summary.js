/************************************
 📘 JavaScript Data Types & Conversions
************************************/

/* 
 JavaScript has 2 types of data:
 1. Primitive Types
 2. Non-Primitive (Reference) Types
*/

/*-----------------------------------------------------
 ✅ 1. Primitive Data Types
-----------------------------------------------------*/

// Number → integers, floats
let num1 = 42;
let num2 = 3.14;
console.log(typeof num1, num1); // number 42
console.log(typeof num2, num2); // number 3.14

// String → sequence of characters
let str1 = "Hello";
let str2 = 'World';
let str3 = `Template Literal ${str1}`;
console.log(typeof str1, str1); // string Hello
console.log(str3);              // Template Literal Hello

// Boolean → true / false
let isOn = true;
let isOff = false;
console.log(typeof isOn, isOn); // boolean true

// Undefined → declared but not assigned
let x;
console.log(typeof x, x); // undefined undefined

// Null → intentional empty value
let y = null;
console.log(typeof y, y); // object null (bug in JS, but accepted)

// Symbol → unique identifier
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false (always unique)

// BigInt → very large integers
let bigNum = 1234567890123456789012345678901234567890n;
console.log(typeof bigNum); // bigint

/*-----------------------------------------------------
 ✅ 2. Non-Primitive (Reference) Data Types
-----------------------------------------------------*/

// Object → collection of key-value pairs
let person = {
  name: "Ganesh",
  age: 21,
};
console.log(typeof person, person); // object {name: "Ganesh", age: 21}

// Array → ordered collection
let arr = [1, 2, 3, 4];
console.log(typeof arr, arr); // object [1,2,3,4]

// Function → callable object
function greet() {
  return "Hello from function!";
}
console.log(typeof greet, greet()); // function Hello from function!

/*-----------------------------------------------------
 ✅ Type Conversions (Explicit & Implicit)
-----------------------------------------------------*/

// --------- String Conversion ---------
let num = 123;
console.log(String(num));   // "123"
console.log(num.toString()); // "123"

// Implicit conversion
console.log("Age: " + 25); // "Age: 25"

// --------- Number Conversion ---------
let str = "123";
console.log(Number(str));      // 123
console.log(parseInt("45.67"));  // 45
console.log(parseFloat("45.67")); // 45.67

// Implicit conversion
console.log("5" * "2"); // 10
console.log("5" - 2);   // 3
console.log("5" + 2);   // "52" (string concatenation)

// --------- Boolean Conversion ---------
// Falsy values → 0, "", null, undefined, NaN, false
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean("Hello"));  // true
console.log(Boolean(123));      // true

// --------- Automatic (Type Coercion) ---------
console.log(5 + "10");   // "510" (number → string)
console.log("10" - 5);   // 5 (string → number)
console.log("10" * "2"); // 20
console.log(true + 1);   // 2  (true → 1)
console.log(false + 1);  // 1  (false → 0)

/*-----------------------------------------------------
 ✅ Special Cases
-----------------------------------------------------*/
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"
console.log(Number("abc"));     // NaN

/************************************
 🔹 QUICK REVISION NOTES
************************************
- Number → integers, floats
- String → text (use " ", ' ', or ` ` for template literals)
- Boolean → true / false
- Undefined → declared but no value
- Null → intentional "no value"
- Symbol → unique identifiers
- BigInt → for very large integers
- Object → key-value pairs (arrays, functions also objects)

Conversions:
- String() → convert to string
- Number(), parseInt(), parseFloat() → convert to number
- Boolean() → convert to true/false
- Type coercion → JS auto converts (e.g., "5" * 2 → 10)
- Falsy values → 0, "", null, undefined, NaN, false
************************************/
