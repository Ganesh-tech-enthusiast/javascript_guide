//In this tutoriral we are going to learn objects in depth
//object is nothing but the set of key value pairs eclosed in curly braces

//following is the non singleton object
let sym = Symbol(34)
let object1 = {
    name:"ganesh",
    age: 20,
    [sym]: "this is another symbol",
    height: "167cm",
    salary: "20lpa",
    "full name":"Ganesh Sonyabapu Wakchaure"
}
//thus we have created an object named object1
//we can access object data as follows
console.log(object1.name);//ganesh
console.log(object1.age);//20
console.log(object1.height) ; //167cm
console.log(`salary of ${object1.name} is ${object1.salary}`);

//we can specify string as a key in an object which is only accessible with sqauare notation

console.log(object1["full name"]);//we cannot accces it with dot operator

//symbol also works differntly with objects

console.log(object1[sym]);

//also we can freeze  an object so that its values cannot be modified

Object.freeze(object1);//now object1 is constatn and its values such as age cannot be modified

object1.age = 21 //cannot modify , age still remains 20

console.log(`modified age is : ${object1.age}`);

/*********************************************
 📘 JavaScript Objects (In Depth)
**********************************************/

/*-----------------------------------------------------
 ✅ 1. Creating Objects
-----------------------------------------------------*/

// Object literal
let person = {
  name: "Ganesh",
  age: 20,
  isStudent: true
};

// Using new Object()
let car = new Object();
car.brand = "Tesla";
car.model = "Model S";

// Using constructor function
function Animal(type, name) {
  this.type = type;
  this.name = name;
}
let dog = new Animal("Dog", "Bruno");

// Using class
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
}
let u1 = new User("ganesh", "test@mail.com");

// Using Object.create (prototype-based)
let proto = { greet() { console.log("Hello"); } };
let obj = Object.create(proto);
obj.greet();

console.log(person, car, dog, u1, obj);

/*-----------------------------------------------------
 ✅ 2. Accessing Properties
-----------------------------------------------------*/
console.log(person.name);       // Dot notation
console.log(person["age"]);     // Bracket notation (for dynamic keys)

let key = "isStudent";
console.log(person[key]);       // dynamic access

/*-----------------------------------------------------
 ✅ 3. Adding, Updating & Deleting Properties
-----------------------------------------------------*/
person.city = "Pune";          // add new property
person.age = 21;               // update
delete person.isStudent;       // delete property
console.log(person);

/*-----------------------------------------------------
 ✅ 4. Nested Objects
-----------------------------------------------------*/
let student = {
  name: "Rahul",
  marks: {
    math: 90,
    science: 85
  }
};
console.log(student.marks.math);  // 90

/*-----------------------------------------------------
 ✅ 5. Checking Properties
-----------------------------------------------------*/
console.log("name" in student);        // true
console.log(student.hasOwnProperty("marks")); // true
console.log(student.city ?? "Not Found");     // nullish coalescing

/*-----------------------------------------------------
 ✅ 6. Iterating Over Objects
-----------------------------------------------------*/
let book = { title: "JS Guide", pages: 300 };

// for...in (keys)
for (let key in book) {
  console.log(key, book[key]);
}

// Object.keys() → array of keys
console.log(Object.keys(book));

// Object.values() → array of values
console.log(Object.values(book));

// Object.entries() → array of [key,value]
console.log(Object.entries(book));

/*-----------------------------------------------------
 ✅ 7. Methods in Objects
-----------------------------------------------------*/
let calculator = {
  a: 10,
  b: 5,
  add() { return this.a + this.b; },  // method shorthand
  multiply: function() { return this.a * this.b; }
};
console.log(calculator.add(), calculator.multiply());

/*-----------------------------------------------------
 ✅ 8. Copying & Merging Objects
-----------------------------------------------------*/
let obj1 = { x: 1, y: 2 };
let obj2 = { y: 3, z: 4 };

// Shallow copy
let copy1 = Object.assign({}, obj1);
let copy2 = { ...obj1 };

// Merge
let merged = { ...obj1, ...obj2 }; // {x:1,y:3,z:4}

console.log(copy1, copy2, merged);

/*-----------------------------------------------------
 ✅ 9. Object Freezing & Sealing
-----------------------------------------------------*/
let config = { version: 1 };
Object.freeze(config);
config.version = 2; // ignored
console.log(config);

let settings = { theme: "dark" };
Object.seal(settings);
settings.theme = "light"; // allowed
delete settings.theme;    // not allowed
console.log(settings);

/*-----------------------------------------------------
 ✅ 10. Advanced: Destructuring
-----------------------------------------------------*/
let profile = { name: "Amit", age: 25, country: "India" };
let { name, age } = profile;  // destructure
console.log(name, age);

// Default values
let { country = "Unknown", city = "Mumbai" } = profile;
console.log(country, city);

/*-----------------------------------------------------
 ✅ 11. JSON (JavaScript Object Notation)
-----------------------------------------------------*/
let user = { id: 1, username: "test" };
let jsonString = JSON.stringify(user);  // object → JSON string
console.log(jsonString);

let parsedObj = JSON.parse(jsonString); // JSON string → object
console.log(parsedObj);

/*-----------------------------------------------------
 🔹 QUICK REVISION NOTES
-----------------------------------------------------*/
/*
CREATING OBJECTS:
- {} literal, new Object(), constructor function, class, Object.create()

ACCESS:
- obj.key, obj["key"], dynamic keys with variables

MODIFY:
- obj.newProp = value, obj.key = newValue, delete obj.key

NESTED:
- obj.innerObj.key

CHECK:
- "key" in obj, obj.hasOwnProperty(key), obj.key ?? default

ITERATION:
- for...in, Object.keys(), Object.values(), Object.entries()

METHODS:
- add methods inside objects → obj.method = function() {}

COPY & MERGE:
- Object.assign({}, obj), { ...obj }, { ...obj1, ...obj2 }

IMMUTABILITY:
- Object.freeze() (no change allowed)
- Object.seal() (modify allowed, no add/delete)

DESTRUCTURING:
- let {a,b} = obj
- default values possible

JSON:
- JSON.stringify(obj) → string
- JSON.parse(string) → object
*/



