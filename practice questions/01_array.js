//let learn splice operation

let arr = [1,2,3,4,5,6,7,8,9,90]
arr.splice(3,3,10,10) //array modified
//starting index is 3 from 3rd index 3 elements are deleted replace with 10
console.log(arr); //[1, 2, 3, 10, 10, 10, 7, 8,  9, 90]
//if i passed only one replacing element then only one element is replace with three deleted elements
