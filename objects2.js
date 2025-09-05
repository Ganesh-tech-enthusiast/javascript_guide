//singleton and non-singleton objects
//singleton object 
let obj1 = new Object() 
obj1.name="ganesh"
obj1.age=20
obj1.caste="obc"

// console.log(`Name of student is ${obj1.name} , he is ${obj1.age} years old and he belong to caste ${obj1.caste}`);
// console.log(obj1); 


//non singleton object
let obj2 = {
    first:"ganesh",
    second:"mahesh",
    third:"vaibhav"
}
// console.log(obj2);

//we can combine two or more objects using assign method

let obj3 = Object.assign({},obj1,obj2); 
let obj4 = {obj1 , obj2} //this will store object inside object which not good
// console.log(obj4);

// console.log(obj3);

//the spread operator ... is used to separate all the elements of an array or object

//we can also merge two arrays using ... operator

let obj5 = {...obj1, ...obj2}; //this is best practice of coding js
console.log(obj5);

//we can get all teh keys or values separately using Object.keys and Object.values method

console.log(Object.keys(obj1));//returns all the keys of obj1 in array
console.log(Object.values(obj1)); //returns all the values of obj1 in array

