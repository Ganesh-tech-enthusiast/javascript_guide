/*********************************************
 📘 JavaScript Control Flow (Conditionals & Loops)
**********************************************/

/*-----------------------------------------------------
 ✅ 1. Conditionals
-----------------------------------------------------*/

// if statement
let age = 18;
if (age >= 18) {
  console.log("You are an adult");
}

// if...else
if (age < 18) {
  console.log("Minor");
} else {
  console.log("Adult");
}

// if...else if...else
let marks = 75;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

// switch-case
let day = 3;
switch(day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Other day");
}

// Ternary operator (short-hand for if...else)
let result = (marks >= 50) ? "Pass" : "Fail";
console.log(result);

/*-----------------------------------------------------
 ✅ 2. Loops
-----------------------------------------------------*/

// for loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop count:", i);
}

// while loop
let count = 1;
while (count <= 3) {
  console.log("While count:", count);
  count++;
}

// do...while loop
let num = 1;
do {
  console.log("Do while:", num);
  num++;
} while (num <= 3);

/*-----------------------------------------------------
 ✅ 3. Loop Control Keywords
-----------------------------------------------------*/

// break → exits loop immediately
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log("Break Example:", i);  // stops at 2
}

// continue → skips current iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log("Continue Example:", i);  // skips 3
}

/*-----------------------------------------------------
 ✅ 4. Iterating Objects/Arrays
-----------------------------------------------------*/
let fruits = ["apple", "banana", "cherry"];

// for...of → values (best for arrays, strings, etc.)
for (let fruit of fruits) {
  console.log("for...of:", fruit);
}

// for...in → keys/indexes (best for objects)
let student = { name: "Amit", age: 20 };
for (let key in student) {
  console.log("for...in:", key, "=", student[key]);
}

/*-----------------------------------------------------
 🔹 QUICK REVISION NOTES
-----------------------------------------------------*/
/*
CONDITIONALS:
- if, if...else, if...else if...else
- switch-case (good for multiple options)
- ternary (cond ? true : false)

LOOPS:
- for (init; condition; increment)
- while (condition) { ... }
- do { ... } while (condition)

CONTROL:
- break → exits loop
- continue → skips iteration

ITERATION:
- for...of → values (arrays, strings)
- for...in → keys (objects, arrays - but use carefully)
*/
