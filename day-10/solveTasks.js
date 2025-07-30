// ## 1. What will be the output of the following code and why?

// let user = "Alice";

// function outer() {
//   function inner() {
//     console.log(user);
//   }
//   let user = "Bob";
//   inner();
// }

// outer();

// ```
// GEC
//     CP
//         user:
//         outer()
//     EP
//         user: 'Alice'
//         outer(): Executed
//     FEC
//         CP
//             user:
//             inner()
//         EP
//             user: 'Bob'
//             inner():Executed
//         FCP
//             CP
//             EP
//                 print => Bob
// ```

// let total = 0; // Global, bad practice

// function add(num) {
//   total += num;
// }

// add(5);
// add(10);
// console.log(total);

// console.log(a);
// let a = 10;

// ## 7. Where is the `age` variable accessible? only inside the showAge()
// ```js
// function showAge() {
//     let age = 25;
//     console.log(age);
// }

// console.log(age);
// ```

// function showAge() {
//   let age = 25;
//   console.log(age);
// }

// console.log(age);

// Options:  [C and B]
// - A: In Global
// - B: Only inside showAge
// - C: It will cause an error
// - D: None of the above

// ## 10. What will be the output and why?

// function counter() {
//   let count = 0;
//   return function () {
//     count--;
//     console.log(count);
//   };
// }

// const reduce = counter();
// reduce(); // -1
// reduce(); // -2

// ```
// GEC
//     CP
//         counter()
//         reduce:
//     Ep
//         reducer: counter() Executed
//     FEC
//         CP
//             count:
//         EP
//             count: 0
//         FEC
//             CP
//             EP
//                 count: count -1
//                 print: count
//     FEC
//         CP
//         EP
//             count: count -1
//             print: count
//     FEC
//         CP
//         EP
//             count: count -1
//             print: count

// ```;

// ## 5. Write a function that tries to access a variable declared inside
// // another function.
// function fun1() {
//   let a = 1;
//   const b = 2;
//   var c = 3;

//   return {
//     a,
//     b,
//     c,
//   };
// }

// function fun2() {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// let { a, b, c } = fun1();
// fun2();
