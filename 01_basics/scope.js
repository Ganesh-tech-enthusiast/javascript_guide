/*********************************************
 📘 JavaScript Variable Scope
**********************************************/

/*-----------------------------------------------------
 ✅ 1. Global Scope
-----------------------------------------------------*/
// A variable declared outside any function or block is GLOBAL
// → accessible everywhere

let globalVar = "I am Global";

function showGlobal() {
  console.log(globalVar); // accessible here
}
showGlobal();
console.log(globalVar);    // also accessible here

/*-----------------------------------------------------
 ✅ 2. Local Scope (Function Scope)
-----------------------------------------------------*/
// Variables declared inside a function → LOCAL to that function

function localExample() {
  let localVar = "I am Local";
  console.log(localVar);  // accessible inside function
}
// console.log(localVar);  ❌ ERROR (not accessible outside)

/*-----------------------------------------------------
 ✅ 3. Block Scope (with let & const)
-----------------------------------------------------*/
// Variables declared with let/const inside { } → block scoped

{
  let blockVar = "Inside Block";
  const blockConst = 123;
  console.log(blockVar, blockConst); // accessible inside
}
// console.log(blockVar);   ❌ ERROR
// console.log(blockConst); ❌ ERROR

/*-----------------------------------------------------
 ✅ 4. var vs let/const
-----------------------------------------------------*/
// "var" ignores block scope → function-scoped
// "let" and "const" are block-scoped

if (true) {
  var x = 10;   // function/global scoped
  let y = 20;   // block scoped
  const z = 30; // block scoped
}
console.log(x); // ✅ 10
// console.log(y); ❌ ERROR
// console.log(z); ❌ ERROR

/*-----------------------------------------------------
 ✅ 5. Scope Chain (Nested Scopes)
-----------------------------------------------------*/
let outer = "Outer";

function outerFunc() {
  let inner = "Inner";

  function innerFunc() {
    console.log(outer); // found in parent scope
    console.log(inner); // found in immediate scope
  }
  innerFunc();
}
outerFunc();
//+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_
//nested scope
function addition(){
   let  n1 = 10
   let  n2 = 20
   function subtraction(){
    let n3 = 30
    let n4 = 40
    console.log(n1-n2); //child scope can access variables of parent scope
    
   }
   console.log(`addition is ${n4 - n3}`); //error , parent scope cannot accees variables of child scope
   
}
//same prototype is applicable to nested if-else statements

/*-----------------------------------------------------
 🔹 QUICK REVISION NOTES
-----------------------------------------------------*/
/*
GLOBAL SCOPE:
- Declared outside any function/block
- Accessible anywhere
- In browsers, var global vars attach to "window"

LOCAL (FUNCTION) SCOPE:
- Declared inside a function
- Accessible only inside that function

BLOCK SCOPE:
- Declared with let/const inside {}
- Accessible only inside that block

var vs let/const:
- var → function-scoped, can be re-declared
- let/const → block-scoped, safer

SCOPE CHAIN:
- JS checks variable inside function → parent function → global
- If not found anywhere → ReferenceError
*/
