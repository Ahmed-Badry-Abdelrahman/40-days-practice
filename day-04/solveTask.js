// ## 1. What will be the output of this code snippet and why?

// let day = "Monday";

// switch (day) {
//   case "monday":
//     console.log("It's the start of the week.");
//     break;
//   default:
//     console.log("It's a normal day.");
// }

// ## 2. Build an ATM Cash Withdrawal System
// Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.
// function atmCashWithdrawalSystem() {
//   let accountMoney = 5000;

//   return {
//     withdraw: function (amount) {
//       try {
//         if (typeof amount !== "number" || isNaN(amount) || amount < 0)
//           throw new Error("Invalid amount value");

//         if (accountMoney < amount)
//           throw new Error("You do not have enough money");

//         if (amount % 100 !== 0)
//           throw new Error("You can only withdraw multiples of 100");

//         accountMoney -= amount;

//         console.log(" Withdrawal successful");
//         console.log(
//           ` You have withdrawn ${amount}. Remaining balance: ${accountMoney}`
//         );
//       } catch (error) {
//         console.error(" Invalid amount:", error.message);
//       }
//     },
//   };
// }

// let withdrawFun = atmCashWithdrawalSystem();
// withdrawFun.withdraw(240); //  Not allowed (not multiple of 100)
// withdrawFun.withdraw(300); //  Allowed

// function calculator(num1, num2, operator) {
//   try {
//     console.log("you can do this operation => (+, -, /, %)");
//     let result;

//     if (
//       typeof num1 !== "number" ||
//       typeof num2 !== "number" ||
//       isNaN(num1) ||
//       isNaN(num2)
//     )
//       throw new Error("you input the invalid numbers ");

//     switch (operator) {
//       case "+":
//         result = num1 + num2;
//         break;
//       case "-":
//         result = num1 - num2;
//         break;
//       case "/":
//         if (num2 === 0) throw new Error("Error: can not divided by zero");
//         result = num1 / num2;
//         break;
//       case "%":
//         result = num1 % num2;
//         break;
//       default:
//         result = "invalid operator";
//     }

//     console.log(`the output is ${result}`);
//   } catch (error) {
//     console.error(
//       "there an error when we trying to do the mathematical operation ",
//       error.message
//     );
//   }
// }

// calculator(20, 10, "/");

// ## 4. Pay for your movie ticket
// Imagine, the INOX charges ticket prices based on age:
// - Children (<18 years): $3
// - Adults (18 - 60 years): $10
// - Seniors (60+ years): $8

// // Write a program that prints the ticket price based on the person’s age.
// function ticketPriceBasedOnAge(age) {
//   try {
//     if (typeof age !== "number" || isNaN(age) || age <= 0) {
//       throw new Error("Invalid age value entered");
//     }

//     if (age < 18) {
//       console.log(" Children Ticket: $3");
//     } else if (age < 60) {
//       console.log(" Adult Ticket: $10");
//     } else {
//       console.log(" Senior Ticket: $8");
//     }
//   } catch (error) {
//     console.error(
//       " An error occurred while calculating the ticket price:",
//       error.message
//     );
//   }
// }

// //  Test Cases
// ticketPriceBasedOnAge(10); // Children
// ticketPriceBasedOnAge(30); // Adult
// ticketPriceBasedOnAge(70); // Senior
// ticketPriceBasedOnAge(-5); // Invalid
// ticketPriceBasedOnAge("abc"); // Invalid

// ## 5. Horoscope Sign Checker
// Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.

// function horoscopeSignChecker(month) {
//   let zodiacSign;
//   try {
//     if (typeof month !== "string")
//       throw new Error("invalid input not a string");

//     switch (month.toLowerCase()) {
//       case "march":
//         zodiacSign = "Aries";
//         break;

//       case "april":
//         zodiacSign = "Taurus";
//         break;

//       case "may":
//         zodiacSign = "Gemini";
//         break;

//       case "june":
//         zodiacSign = "Cancer";
//         break;

//       case "july":
//         zodiacSign = "Leo";
//         break;

//       case "august":
//         zodiacSign = "Virgo";
//         break;

//       case "september":
//         zodiacSign = "Libra";
//         break;

//       case "october":
//         zodiacSign = "Scorpio";
//         break;

//       case "november":
//         zodiacSign = "Sagittarius";
//         break;

//       case "december":
//         zodiacSign = "Capricorn";
//         break;

//       case "january":
//         zodiacSign = "Aquarius";
//         break;

//       case "february":
//         zodiacSign = "Pisces";
//         break;

//       default:
//         zodiacSign = "Invalid month";
//     }

//     console.log(`Zodiac Sign for ${month}: ${zodiacSign}`);
//   } catch (error) {
//     console.log("error happen even we get the sign ", error.message);
//   }
// }

// horoscopeSignChecker("march");
// horoscopeSignChecker("december");
// horoscopeSignChecker(2345);
// horoscopeSignChecker("decemerber");

// ## 6. Which Triangle?
// A triangle has 3 sides. A Triangle type is determined by its sides:
// - All sides equal is called, `Equilateral Triangle`.
// - Two sides equal is called, `Isosceles Triangle`.
// - All sides different is called, `Scalene Triangle`.

// Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.
// function triangle(side1, side2, side3) {
//   let result;

//   try {
//     // Check if inputs are numbers
//     if (
//       typeof side1 !== "number" ||
//       typeof side2 !== "number" ||
//       typeof side3 !== "number"
//     ) {
//       throw new Error("Invalid input: All sides must be numbers.");
//     }

//     // Check for valid triangle inequality
//     if (
//       side1 + side2 <= side3 ||
//       side1 + side3 <= side2 ||
//       side2 + side3 <= side1
//     ) {
//       throw new Error(
//         "Invalid triangle: Sides do not satisfy triangle inequality."
//       );
//     }

//     // Determine the triangle type
//     if (side1 === side2 && side2 === side3) {
//       result = "Equilateral Triangle";
//     } else if (side1 === side2 || side1 === side3 || side2 === side3) {
//       result = "Isosceles Triangle";
//     } else {
//       result = "Scalene Triangle";
//     }

//     console.log(
//       `Triangle with sides (${side1}, ${side2}, ${side3}) is: ${result}`
//     );
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }
