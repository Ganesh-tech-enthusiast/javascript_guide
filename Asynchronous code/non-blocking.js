//this is teh Asynchronous (Non-blocking): It allows to perform long running operations in the background and show their results once they are done, without blocking execution of rest code 

console.log('Step 1');
//perform complex operation
setTimeout(function doSomething() {
  // Simulate heavy computation
  for (let i = 0; i < 1e9; i++) {}
  console.log('Step 2 : executed in background'); 
}); 

console.log('Step 3');
