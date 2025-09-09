//IIFE stands for Immediate invoked function expression
//here function is called immdieately after written at compile time
//Is defined And executed immediately (without being called later).
//example
function ganesh(){
    return "hello i am ganesh"
}
console.log(ganesh());
//above is regular funtion

//IIFE function is

(function ganesh(some){
    console.log("Hello i ama IIFE function" , some );
    
})("dsdte");

//why use IIFE
/* 1.to avoid polluting the global scope
   2.to create private variables (like encapsulation)
   3.to run function only once */

   //anonymous IIFE
(function() {
    console.log("Anonymous IIFE");
})();

//arrow IIFE
(() => {
    console.log("Arrow IIFE");
})();

//IIFE with private variables

let counter = (function (){
    let count = 2; //this is private variable
    return {
        increment: function(){
            count++;
            return count;
        },
        dercrement: function(){
            count--;
            return count;
        }
    };
})(); //now funtion is called and returns count 1 and count 0

console.log(counter.increment());//1
console.log(counter.increment());//2
console.log(counter.dercrement());//1
console.log(counter.dercrement());//0
console.log(counter.dercrement());//-1
console.log(counter.dercrement());//-2
console.log(counter.increment());//-1
console.log(counter.increment());//0
console.log(counter.increment());//1

