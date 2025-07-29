// ## 1. Write a Function to Convert Celsius to Fahrenheit
// Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit.
// Formula: (Celsius * 9/5) + 32 = Fahrenheit

// function celsiusToFahrenheit(celsius) {
//   try {
//     if (typeof celsius !== "number" || isNaN(celsius))
//       throw new Error("invalid value");

//     let Fahrenheit = celsius * (9 / 5) + 32;
//     console.log(`${celsius} °C = ${Fahrenheit.toFixed(2)} °F `);
//   } catch (error) {
//     console.log(`Error: ${error.message}`);
//   }
// }

// celsiusToFahrenheit(40);

// ## 2. Create a Function to Find the Maximum of Two Numbers
// Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.

// function findMax(num1, num2) {
//   try {
//     if (
//       typeof num1 !== "number" ||
//       typeof num2 !== "number" ||
//       isNaN(num1) ||
//       isNaN(num2)
//     ) {
//       throw new Error("Invalid input. You must enter two numbers.");
//     }

//     const maxNumber = num1 > num2 ? num1 : num2;
//     console.log(`The max number is: ${maxNumber}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//   }
// }

// findMax(-2, -4); // The max number is: -2

// ## 3. Function to Check if a String is a Palindrome
// Create a function isPalindrome(str) that checks if a given string is a
// palindrome (reads the same forward and backward). You can not use any string
// function that we have not learned in the series so far.

// function isPalindrome(str) {
//   try {
//     if (typeof str !== "string")
//       throw new Error("invalid input we need a string");
//     str = str.toLowerCase();
//     let newStr = "";

//     for (let i = 0; i < str.length; i++) {
//       str[i] >= "a" && str[i] <= "z" ? (newStr += str[i]) : null;
//     }

//     let result = true;
//     let start = 0;
//     let end = newStr.length - 1;

//     while (start < end) {
//       console.log(`${newStr[start]}  ??  ${newStr[end]}`);
//       if (newStr[start] !== newStr[end]) {
//         result = false;
//         break;
//       }
//       console.log(result);

//       start++;
//       end--;
//     }

//     let theStringIs = result ? "is Palindrome" : "is not Palindrome";
//     console.log(theStringIs);
//   } catch (error) {
//     console.error("Error: ", error.message);
//   }
// }

// isPalindrome("Was it a car or a! cat I saw");

// ## 4. Write a Function to Find Factorial of a Number
// Create a function factorial(n) that returns the factorial of n.
// Example 5! = 5 * 4 * 3 * 2 * 1
// function factorial(n) {
//   try {
//     if (typeof n !== "number" || isNaN(n)) throw new Error("invalid input ");
//     if (!Number.isInteger(n))
//       throw new Error("factorial is only defined for integers");
//     if (n < 0) throw new Error("factorial is not defined for negative numbers");

//     let factorial = 1;
//     for (let i = n; i > 0; i--) {
//       factorial *= i;
//     }

//     console.log(`${n}! = ${factorial}`);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// factorial(5); // 5! = 120
// factorial(-3); // Error: factorial is not defined for negative numbers
// factorial(3.5); // Error: factorial is only defined for integers
// factorial("hello"); // Error: invalid input, must be a number

// ## 5. Write a function to Count Vowels in a String
// Write a function countVowels(str) that counts the number of vowels
// (a, e, i, o, u) in a given string.

// function countVowels(str) {
//   try {
//     if (typeof str !== "string") throw new Error("invalid input");

//     str = str.toLowerCase();
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       switch (str[i]) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//           count++;
//           break;
//       }
//     }

//     console.log(`the number of vowels in this string is = ${count}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// countVowels("Was it a car or a cat I saw?"); // 10

// ## 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
// Write a function capitalizeWords(sentence) that takes a sentence and
// capitalizes the first letter of each word. You can use the toUpperCase()
// method of string to convert the lowercase to uppercase.

// function capitalizeWords(sentence) {
//   try {
//     if (typeof sentence !== "string") throw new Error("invalid input");

//     let newStr = "";

//     for (let i = 0; i < sentence.length; i++) {
//       if (i === 0) {
//         // أول حرف
//         newStr += sentence[i].toUpperCase();
//       } else if (sentence[i - 1] === " ") {
//         // أول حرف بعد كل فراغ
//         newStr += sentence[i].toUpperCase();
//       } else {
//         // باقي الحروف
//         newStr += sentence[i];
//       }
//     }

//     console.log(newStr);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// capitalizeWords("write a function"); // Output: "Write A Function"

// ## 7. Use an IIFE to Print “Hello, JavaScript!”
// Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word
// must be supplied using paramneter and argument.

// (function iifePrint(str) {
//   console.log("Hello", str);
// })("Javascript!");

// ## 8. Create a Simple Callback Function
// Write a function greet(name, callback),
// where callback prints a message using the name parameter.

// function greet(name, func) {
//   func(name);
// }

// greet("Ahmed", function (name) {
//   console.log("hello", name);
// });

// ## 10. Create Call Stack Execution Diagram for this flow

// ```js
// function f1() {}
// function f2() {}
// function f3() {
//     f1();
// }
// f2();
// f3();
// f1();
// ``````
// solve

// f2() first one in stack executed and remove from stack
// f3() next in the stack executed we go to f1() first executed and remove it frm stack then
// back to continue the f3() then remove it from stack
// f1() next in the stack executed and remove from stack
// ```;
