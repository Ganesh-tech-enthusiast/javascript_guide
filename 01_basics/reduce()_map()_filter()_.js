// .reduce() method in JavaScript is a powerful array method used to reduce an array to a single value by applying a function to each element in the array, in sequence, while maintaining an "accumulator."

//syntax : array.reduce(function(callback, initialValue) return operation);
//example

let arr = [1,2,3,4,5]
//lets calculate sum of all elements of arr using reduce() method

let sum = arr.reduce(function(accumulator, currentvalue){
    return accumulator + currentvalue
},0);

console.log("result of sum",sum); //15 is returned as sum

//example2 : flatening an array of arrays
const arrays = [[1, 2], [3, 4], [5, 6]];
let flattenedarray = arrays.reduce((acc, currelemnt) =>
                                acc.concat(currelemnt) , []

)

console.log("result of flattening array",flattenedarray); //[ 1, 2, 3, 4, 5, 6 ]
 
//example4 : multiply all numbers of array and return final result
let newarr = [6,3,45,23,7,8,9,6,4,3,3,55,90]
let resultOfMultiplication = newarr.reduce((acc, element)=>
                            { return acc*element 

                            },1

);
console.log("result of multiplication",resultOfMultiplication); //10039274784000

//example4 : find maximum from array

let anotherarray = [1,2,3,4,5,67,23,12,76,98,224,0,6,43,12] //224 is max
let maximum = anotherarray.reduce(function(acc,element){
     return element >= acc ? element:acc
},anotherarray[0]);

console.log("result of maximum number",maximum);//224

//example5 : interesing production level example calculate price of cart

let yourCart = [
    {
        item: "facewash",
        price: 299
    },
    {
        item: "T-shirt",
        price: 399
    },
    {
        item: "Cargo-pant",
        price: 503
    },
    {
        item: "Deodorant spray",
        price: 222
    },
    {
        item: "Smartwatch",
        price: 11235
    }
]
//find total price of cart
let totalPrice = yourCart.reduce(function(acc,object){
return acc + object.price 
},0) //accumulator should be zero to calculate sum of price

console.log("Total amount to pay:",totalPrice);
//----------------------------------------------------------------------------
//filter method 
//The .filter() method is used to create a new array containing only the elements that pass a certain condition (i.e., elements that return true in the callback function).

let evenNumbers = anotherarray.filter((element)=> element % 2 == 0 )
console.log("All the even numbers are ",evenNumbers);

console.log(evenNumbers[0]);

//----------------------------------------------------------------------------
//map method
//The .map() method is used to perform specific operation on each element of the array and return a new array of the same length with the transformed values.

//lets double all the values of anoteherArray using map 
let doubledValues = anotherarray.map((element) => element*2)

console.log("result of doubling values",doubledValues);
