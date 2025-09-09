/*********************************************
 📘 JavaScript Arrays
**********************************************/

/*-----------------------------------------------------
 ✅ 1. Creating Arrays
-----------------------------------------------------*/
let arr1 = [1, 2, 3, 4];               // literal
let arr2 = new Array(5);               // array with 5 empty slots
let arr3 = new Array(1, 2, 3);         // [1,2,3]
let arr4 = Array.of(10, 20, 30);       // [10,20,30]
let arr5 = Array.from("hello");        // ['h','e','l','l','o']

console.log(arr1, arr2, arr3, arr4, arr5);

/*-----------------------------------------------------
 ✅ 2. Array Properties
-----------------------------------------------------*/
console.log(arr1.length);  // 4 (number of elements)

/*-----------------------------------------------------
 ✅ 3. Accessing & Updating
-----------------------------------------------------*/
console.log(arr1[0]);      // 1 (first element)
arr1[1] = 20;              // update element
console.log(arr1);         // [1,20,3,4]

/*-----------------------------------------------------
 ✅ 4. Adding & Removing Elements
-----------------------------------------------------*/
let nums = [1, 2, 3];
nums.push(4);              // add at end
nums.pop();                // remove last
nums.unshift(0);           // add at start
nums.shift();              // remove first
console.log(nums);         // [1,2,3]

/*-----------------------------------------------------
 ✅ 5. Splicing & Slicing
-----------------------------------------------------*/
//slice
let fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits.slice(1, 3)); // ["banana","cherry"] (non-destructive)

//splice : change the original array (add,remove,replace)
//syntax :splice (startidx,delcount,new_element)
fruits.splice(2, 1, "mango");    // remove 1 at index 2, add "mango"
console.log(fruits);             // ["apple","banana","mango","date"]

/*-----------------------------------------------------
 ✅ 6. Searching
-----------------------------------------------------*/
let colors = ["red", "blue", "green", "blue"];
console.log(colors.indexOf("blue"));      // 1 (first index)
console.log(colors.lastIndexOf("blue"));  // 3 (last index)
console.log(colors.includes("green"));    // true
console.log(colors.find(c => c.length > 4)); // "green"
console.log(colors.findIndex(c => c === "blue")); // 1

/*-----------------------------------------------------
 ✅ 7. Iteration
-----------------------------------------------------*/
let numbers = [1, 2, 3, 4];

numbers.forEach(n => console.log(n * 2)); // 2,4,6,8
let doubled = numbers.map(n => n * 2);    // [2,4,6,8]
let evens = numbers.filter(n => n % 2 === 0); // [2,4]
let sum = numbers.reduce((acc, n) => acc + n, 0); // 10

console.log(doubled, evens, sum);

/*-----------------------------------------------------
 ✅ 8. Sorting & Reversing
-----------------------------------------------------*/
let nums2 = [4, 1, 10, 2];
console.log(nums2.sort());     // [1,10,2,4] (lexical sort!)
console.log(nums2.sort((a,b) => a-b)); // [1,2,4,10] (numeric sort)
console.log(nums2.reverse());  // [10,4,2,1]

/*-----------------------------------------------------
 ✅ 9. Combining Arrays
-----------------------------------------------------*/
let a = [1,2];
let b = [3,4];
console.log(a.concat(b));       // [1,2,3,4]
console.log([...a, ...b]);      // spread operator → [1,2,3,4]

/*-----------------------------------------------------
 ✅ 10. Flattening Arrays
-----------------------------------------------------*/
let nested = [1, [2, [3, [4]]]];
console.log(nested.flat());        // [1,2,[3,[4]]]
console.log(nested.flat(2));       // [1,2,3,[4]]
console.log(nested.flat(Infinity));// [1,2,3,4]

/*-----------------------------------------------------
 ✅ 11. Other Useful Methods
-----------------------------------------------------*/
let words = ["JS", "is", "fun"];
console.log(words.join(" "));     // "JS is fun"

console.log(Array.isArray(words)); // true
console.log(words.includes("is")); // true

//converting arrray to string 

let names = ["Ganesh","Mayur","Yogesh", "Pratik", "dipak","rohit"]
let stringnames = names.toString();
console.log(stringnames);
console.log(typeof stringnames); //string

//we can join two arrays using concat() method

let a1 = [1,2,3]
let a2 = [4,5,6] 
console.log(a1.concat(a2));


