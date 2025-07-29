// for (let i = 1; i <= 5; i++) {
//   console.log("*".repeat(i));
// }

// *
// * *
// * * *
// * * * *
// * * * * *

// for (let i = 1; i <= 5; i++) {
//   let pattern = "";
//   for (let j = 1; j <= i; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

// let row = 5;
// for (let i = 1; i <= row; i++) {
//   let pattern = "";

//   for (let spas = 1; spas <= row - i; spas++) {
//     pattern += " ";
//   }

//   for (let j = 1; j <= i; j++) {
//     pattern += "* ";
//   }
//   console.log(pattern);
// }

// * * * * *
// * * * *
// * * *
// * *
// *

// let row = 5;
// for (let i = 0; i < row; i++) {
//   let pattern = " ";
//   for (let j = 1; j <= row - i; j++) {
//     pattern += "* ";
//   }
//   console.log(pattern);
// }

// * * * * *
//  * * * *
//   * * *
//    * *
//     *

// let row = 5;
// for (let i = 0; i <= row; i++) {
//   let pattern = "";

//   for (let spas = 1; spas <= i; spas++) {
//     pattern += " ";
//   }

//   for (let j = 1; j <= row - i; j++) {
//     pattern += "* ";
//   }

//   console.log(pattern);
// }

// * * * * *    *
//  * * * *    * *
//   * * *    * * *
//    * *    * * * *
//     *    * * * * *

// let row = 5;

// for (let i = 1; i <= row; i++) {
//   let pattern1 = "";
//   let pattern2 = "";

//   for (let spas = 1; spas <= i; spas++) {
//     pattern1 += " ";
//   }

//   for (let star = 0; star <= row - i; star++) {
//     pattern1 += "* ";
//   }

//   //   for (let star = 0; star <= row - 1; star++) {
//   //     pattern2 += " ";
//   //   }

//   pattern2 += "    ";

//   for (let spas = 1; spas <= i; spas++) {
//     pattern2 += "* ";
//   }

//   //   console.log(pattern1);
//   console.log(pattern1 + pattern2);
// }

// ## 2. Craete Multiplication Table (Using for loop)

// Write a program to print the multiplication table of a given number up to 10.
// For Example: If N = 3, output should be:

// ```bash
// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 10 = 30
// ```

// function multiplicationTable(number) {
//   try {
//     if (typeof number !== "number" || isNaN(number))
//       throw new Error("invalid input");

//     for (let i = 1; i <= 10; i++) {
//       console.log(`${number} x ${i} = ${number * i}`);
//     }
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//   }
// }

// multiplicationTable(3);

// ## 3. Find the summation of all odd numbers between 1 to 500 and print them on teh console log.

// function summationOddNumbers(number) {
//   let result = 0;

//   try {
//     if (typeof number !== "number" || isNaN(number))
//       throw new Error("invalid input");

//     for (let i = 1; i <= number; i++) {
//       if (i % 2 !== 0) {
//         result += i;
//       }
//     }
//   } catch (error) {
//     console.error(error.message);
//   }

//   console.log(result);
// }

// summationOddNumbers(500);

// ## 4. Skipping Multiples of 3
// Write a program to print numbers from 1 to 20, but skip multiples of 3.

// function skippingMultiplesOf3() {
//   try {
//     for (let i = 1; i <= 20; i++) {
//       if (i % 3 !== 0) console.log(i);
//     }
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// skippingMultiplesOf3();

// ## 5. Reverse Digits of a Number (Using while loop)

// Write a program to reverse the digits of a given number using a while loop.

// Example:

// ```bash
// Input: 6789
// Output: 9876
// ```

// function reverseNumber(number) {
//   try {
//     if (typeof number !== "number" || isNaN(number))
//       throw new Error("invalid input you should enter a number");
//     let reversed = 0;

//     while (number > 0) {
//       let digit = number % 10;
//       console.log(`get the last number :: ${digit}`); // احصل على آخر رقم
//       reversed = reversed * 10 + digit; // أضفه إلى الرقم المقلوب
//       console.log(`add this to the reveres :: ${reversed}`);
//       number = Math.floor(number / 10); // احذف آخر رقم من الرقم الأصلي
//       console.log(
//         `delete the last number from the original number :: ${number}`
//       );
//     }
//     console.log(reversed);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// reverseNumber(6789);
