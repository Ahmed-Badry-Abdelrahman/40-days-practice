// // ## 1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

// {
//   // code     // start of the TDZ for num1
//   // code
//   //
//   console.log(num1); // reference error
//   //
//   // code
//   // code
//   // code
//   //
//   // can not use the num1 before the initialization
//   let num1 = 1; // end of the TDZ for the num1
//   //
//   // code
//   // code
//   //
//   console.log(num1); // you can use num1 without any error
// }

// // ## 2. Explain Variable and Function Hoisting with Example. Post the code as your answer.

// test(); // executed without error cose GEC

// console.log(age); // undefined
// console.log(name); // reference error can not access the name before initialization TDZ
// var age = 24;       // in CP in GEC it will initialized by undefined cose we use var
// let name = "Ahmed"; // in CP in GEC it will by empty until EP cose we use the let

// function test() {
//   console.log("test");
// }
