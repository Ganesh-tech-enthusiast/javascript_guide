/*********************************************
 📘 JavaScript `this` and Arrow Functions
**********************************************/

/*-----------------------------------------------------
 ✅ 1. What is `this`?
-----------------------------------------------------*/
// `this` refers to the object that is executing the function.
// Its value depends on HOW the function is called.

/*-----------------------------------------------------
 ✅ 2. Global Context
-----------------------------------------------------*/
console.log(this); 
// In browser → `window`
// In Node.js → `{}` (empty object)

/*-----------------------------------------------------
 ✅ 3. Inside an Object Method
-----------------------------------------------------*/
let person = {
  name: "Ganesh",
  greet: function() {
    console.log("Hello, I am " + this.name);
  }
};
person.greet(); // "Hello, I am Ganesh"

/*-----------------------------------------------------
 ✅ 4. `this` in a Regular Function
-----------------------------------------------------*/
function showThis() {
  console.log(this);
}
showThis(); 
// In browser → window
// In strict mode → undefined

/*-----------------------------------------------------
 ✅ 5. `this` in an Event Listener
-----------------------------------------------------*/
// (Browser Example)
document.body.onclick = function() {
  console.log(this); // the element that received event (body)
};

/*-----------------------------------------------------
 ✅ 6. Problem with `this` in Nested Functions
-----------------------------------------------------*/
let user = {
  username: "Rahul",
  showName: function() {
    function inner() {
      console.log(this.username); // ❌ undefined (not pointing to user)
    }
    inner();
  }
};
user.showName();

/*-----------------------------------------------------
 ✅ 7. Solution: Arrow Functions (No Own `this`)
-----------------------------------------------------*/
let user2 = {
  username: "Rahul",
  showName: function() {
    let inner = () => {
      console.log(this.username); // ✅ "Rahul"
    };
    inner();
  }
};
user2.showName();

/*-----------------------------------------------------
 ✅ 8. Arrow Function Basics
-----------------------------------------------------*/

// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(2,3), addArrow(2,3)); // 5,5

/*-----------------------------------------------------
 ✅ 9. Arrow Functions Variations
-----------------------------------------------------*/

// 1. One parameter (no need for parentheses)
const square = x => x * x;

// 2. No parameters
const greet = () => "Hello!";

// 3. Multi-line (use curly braces + return)
const multiply = (a, b) => {
  let result = a * b;
  return result;
};

console.log(square(4), greet(), multiply(3,4));

/*-----------------------------------------------------
 ✅ 10. Arrow Functions and `this`
-----------------------------------------------------*/
let team = {
  title: "Developers",
  members: ["Amit","Sita"],
  
  showMembers: function() {
    this.members.forEach(member => {
      console.log(member + " is in " + this.title);
    });
  }
};
team.showMembers();
/* 
"Amit is in Developers"
"Sita is in Developers"
*/

/*-----------------------------------------------------
 🔹 QUICK REVISION NOTES
-----------------------------------------------------*/
/*
`this` keyword:
- Refers to object that called the function
- Global → window (browser)
- Method → object itself
- Event → element receiving event
- Regular function inside another → loses context (undefined)

Arrow Functions:
- Shorter syntax: (params) => expression
- No own `this`, inherits from parent scope
- Cannot be used as constructors (no `new`)
- Useful for callbacks (map, filter, forEach, etc.)

WHEN TO USE:
- Use normal function when you need dynamic `this`
- Use arrow function for short callbacks or when you want to keep `this` from outer scope
*/
