const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(10)); //prints with 10 decimal zeros

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(40));//prints number with 40 precision digits  it adds required digits randomly

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//it is used to print number as a amount value 

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));//converts negative numbers to positive only
console.log(Math.round(4.6)); //rounds the figure
console.log(Math.ceil(4.2)); //rounds the figure to maximum if precions comes greateer than 0
console.log(Math.floor(4.9)); //print  the number before point
console.log(Math.min(4, 3, 6, 8)); //prints minimum number
console.log(Math.max(4, 3, 6, 8)); //prints maximum number

console.log(Math.random()); //gives any random number between 0 to 1 
console.log((Math.random()*10) + 1); //gives any random number between 1 to 9
console.log(Math.floor(Math.random()*10) + 1); //gives any floor value between 1 to 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //gives any random value between 10 to 20

console.log(Math.floor((Math.random() * 10)+1) + min + min ); //gives any random number between 20 and 30
