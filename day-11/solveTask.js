// ## 1. What will be the output of the following code and why?
// ```js
// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }
// const counter = outer();
// counter(); // 1
// counter(); // 2
// ```

// ## 2. What will be the output and why?
// ```js
// function testClosure() {
//   let x = 10;
//   return function () {
//     return x * x;
//   };
// }
// console.log(testClosure()());  Immediately Invoked Returned Function
// ```

// ## 3. Create a button dynamically and attach a click event handler using a closure.
// The handler should count and log how many times the button was clicked.

// let count = 0;
// document.getElementById("btn").addEventListener("click", function () {
//   count++;
//   console.log(`btn click ${count} times`);
// });

// function createButtonWithCounter() {
//   let count = 0; // ده جزء من الـ closure

//   const btn = document.createElement("button");
//   btn.textContent = "Click me";

//   btn.addEventListener("click", function () {
//     count++;
//     console.log(`Button clicked ${count} times`);
//   });

//   document.body.appendChild(btn); // نضيف الزر للصفحة
// }

// createButtonWithCounter();

// ## 4. Write a function `createMultiplier(multiplier)` that returns another
//  function to multiply numbers.

// function createMultiplier(multiplier) {
//   return function (num) {
//     return num * multiplier;
//   };
// }

// console.log(createMultiplier(5)(2));

// ## 6. Write a function factory of counter to increment, decrement,
// and reset a counter.Use closure to refer the count value across the functuions.

// function counter(startValue) {
//   let count = startValue;

//   return {
//     incrementByOne: function () {
//       count++;
//       console.log(`incrementByOne: ${count}`);
//     },
//     increment: function (value) {
//       count += value;
//       console.log(`increment: ${count}`);
//     },
//     decrement: function () {
//       count--;
//       console.log(`decrement: ${count}`);
//     },
//     reset: function () {
//       count = 0;
//       console.log(`reset: ${count}`);
//     },
//     getCount: function () {
//       console.log(`the current value of count is ${count}`);
//     },
//   };
// }

// let factory = counter(0);
// factory.increment(10);
// factory.incrementByOne();
// factory.getCount();
// factory.decrement();
// factory.reset();
// factory.getCount();
