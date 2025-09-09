/* Map is a set of key value pairs (similar to an object)
but unlike objects : --Map does not allows duplicate pairs 
                     --any type of key is allowed (objects, functions, primitive values)
                     --Keys are ordered (insertion order is preserved).
                     --Provides built-in methods for easy iteration.
*/
//creating maps syntax : Map([ [key,value], [key,value] , ... [key,value]);

let myMap = new Map([
["js" , "javascript"],
["js" , "javascript"], //map rejects duplicate elements with same key
[80 , "ganesh"],
[81 , "ganu"],
[8,67]
]);
// console.log(myMap); //Map(4) { 'js' => 'javascript', 80 => 'ganesh', 81 => 'ganu', 8 => 67 }

//using loop in map
for (const element of myMap) {
    console.log(element);
    //it will print all the pairs of map
}
for (let [key,value] of myMap) {
    console.log(key, "==>",value);
    
}
//methods of map
let map = new Map();

// set()
map.set("name", "Amit");
map.set("age", 21);
map.set("isStudent", true);

// get(key)
console.log(map.get("name"));  // Amit

// has(key)
console.log(map.has("age"));   // true

// delete(key)
map.delete("isStudent");

// size
console.log(map.size); // 2

// clear()
map.clear();
console.log(map.size); // 0

//map can contain keys of any type unlike objects that allows only strings and symbols as key

let key1 = "a string";
let key2 = { id: 1 };
let key3 = ()=> "ganesh";

let newmap = new Map();
newmap.set(key1, "Value for string key");
newmap.set(key2, "Value for object key");
newmap.set(key3, "Value for function key");

console.log(newmap.get(key1)); // Value for string key
console.log(newmap.get(key2)); // Value for object key
console.log(newmap.get(key3)); // Value for function key
console.log(newmap);

