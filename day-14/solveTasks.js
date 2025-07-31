// ## 1. What will be the output of the following code?

// ```js
// try {
//     let r = p + 50;
//     console.log(r);
// } catch (error) {
//     console.log("An error occurred:", error.name);
// }
// ```

// ## 2. Write a function processPayment(amount) that checks if
// the amount is positive and not exceeding balance. If any condition fails,
//  throw appropriate errors

// function processPayment(amount) {
//   try {
//     let balance = 100;
//     if (typeof amount !== "number" || isNaN(amount))
//       throw new Error("invalid input typ");
//     if (amount < 0) throw new Error("the amount is negative value");
//     if (amount > balance)
//       throw new Error("the amount the biggest than your balance");
//     console.log("all right");
//   } catch (error) {
//     console.error("Error: ", error.message);
//   }
// }

// processPayment(-20);

// ## 3. Implement a custom error handling system for an e-commerce website that
//  categorizes errors as

// - UserError
// - PaymentError
// - ServerError
// - EmailError

// function ECommerceErrorHandling(message) {
//   this.name = {
//     user: "UserError",
//     Payment: "PaymentError",
//     Server: "ServerError",
//     Email: "EmailError",
//   };
//   this.message = message;
//   this.stack = new Error().stack;
// }

// ECommerceErrorHandling.prototype = Object.create(Error.prototype);
// try {
//   let a = 10;
//   if (a !== 5) throw new ECommerceErrorHandling("invalid value");
// } catch (error) {
//   console.log(error.message);
//   console.log(error.name.user);
//   console.log(error.stack);
// }

// ## 4. Simulate an API call function fetchData(url). If the URL does not start
// with "https", throw an "Invalid URL" error.
//  Handle it using try...catch

// function fetchData(url) {
//   try {
//     if (!url.toLowerCase().startsWith("https")) throw new Error("Invalid URL");
//     console.log("valid URL");
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// fetchData("https://chatgpt.com/c/68877965-24a0-800d-973c-341bf63b5023");

// ## 5. Implement a custom error type ValidationError using
//  constructor functions to handle form validation errors

// Example:

// ```js
// const userInput = { username: "", age: -2 };
// validateUser(userInput);

// // Output:
// // ValidationError: Username cannot be empty
// // ValidationError: Age must be a positive number
// ```

// function ValidationError(message) {
//   this.name = "ValidationError";
//   this.message = message;
// }

// function validateUser(userData) {
//   let errors = [];
//   try {
//     if (userData.username === "")
//       errors.push(new ValidationError("Username cannot be empty"));
//     if (userData.age <= 0)
//       errors.push(new ValidationError("Age must be a positive number"));
//     //
//     //
//     //
//     //
//     if (errors.length > 0) {
//       throw new ValidationError("something wrong..!!");
//     }
//   } catch (error) {
//     errors.forEach((error) => {
//       console.error(`${error.name}: ${error.message}`);
//     });
//   }
// }

// const userInput = { username: "", age: -2 };
// validateUser(userInput);

// function foo(name) {
//   try {
//     if (typeof name !== "string") throw new Error("invalid value");
//   } catch (error) {
//     console.error(error.message);
//     throw error;
//   }
// }

// try {
//   foo(42);
// } catch (error) {
//   console.error(`Sorry..!!: ${error.message} try again please.`);
// }
