
//this is the asynchronous code that performs wait for the next step until current step is done -- it is called as code blocking
console.log('Step 1');

function doSomething() {
  // Simulate heavy computation
  for (let i = 0; i < 1e9; i++) {}
  console.log('Step 2');
}

doSomething();
console.log('Step 3');
//here All happens one after the other, blocking the next step.