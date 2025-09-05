/*********************************************
 📘 JavaScript Memory Allocation: Stack vs Heap
**********************************************/

/*-----------------------------------------------------
 ✅ 1. Stack Memory
-----------------------------------------------------*/
/*
- Stores PRIMITIVE data types directly:
  (Number, String, Boolean, Null, Undefined, Symbol, BigInt)
- Also stores references (addresses) of objects that live in heap.
- Fast, small, uses LIFO (Last In First Out).
*/

// Example (Primitive in Stack)
let a = 10;
let b = a;   // copy value
b = 20;

console.log(a); // 10 (unchanged)
console.log(b); // 20 (independent copy)

/*-----------------------------------------------------
 ✅ 2. Heap Memory
-----------------------------------------------------*/
/*
- Stores NON-PRIMITIVE data types:
  (Objects, Arrays, Functions)
- Variables in stack hold a REFERENCE (pointer) to heap memory.
- Slower but flexible (dynamic memory).
*/

// Example (Object in Heap)
let obj1 = { name: "Ganesh" };
let obj2 = obj1; // copy reference, not the actual object

obj2.name = "Ravi"; 

console.log(obj1.name); // Ravi (changed!)
console.log(obj2.name); // Ravi

/*-----------------------------------------------------
 ✅ 3. Visual Representation
-----------------------------------------------------*/
/*
Stack:
---------
a → 10
b → 20
obj1 → ref#101
obj2 → ref#101

Heap:
---------
ref#101 → { name: "Ravi" }
*/

/*-----------------------------------------------------
 ✅ 4. Primitive vs Reference Example
-----------------------------------------------------*/

// Primitive → copied by VALUE (independent)
let x = "Hello";
let y = x;
y = "World";
console.log(x); // Hello
console.log(y); // World

// Reference → copied by REFERENCE (linked)
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);

console.log(arr1); // [1, 2, 3, 4] (changed!)
console.log(arr2); // [1, 2, 3, 4]

/*-----------------------------------------------------
 ✅ 5. Garbage Collection
-----------------------------------------------------*/
/*
- JS uses automatic Garbage Collection.
- When no variable points to an object, memory is freed.
*/

let user = { name: "Ram" };
user = null; // old object becomes unreachable → removed by GC

/*-----------------------------------------------------
 🔹 QUICK REVISION NOTES
-----------------------------------------------------*/
/*
STACK:
- Stores primitives + references to objects.
- Fast, fixed size, LIFO order.
- Copying primitive = new independent value.

HEAP:
- Stores objects, arrays, functions.
- Dynamic size, slower access.
- Copying object = reference (both vars point to same data).

GARBAGE COLLECTION:
- Frees memory when no variable references an object.
*/
