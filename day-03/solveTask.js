// ## 1. Odd or Even?
//  - [ ] Take a number and find if the number is an odd or even number.
//  - [ ] Print the number and result in the console.

// let number = "2c";
// try {
//   if (typeof number !== "number") {
//     throw new Error("Input must be a number");
//   }
//   let result = number % 2 === 0 ? "even" : "odd";
//   console.log(`the number is : ${number} and it is a ${result} number`);
// } catch (error) {
//   console.error(error.message);
//   result = "unknown";
// }

// ## 2. Do you have a Driving License?
// Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

// - [ ] Manage `age` as a variable.
// - [ ] Check if the age is elligible for a driving license and print it on the console accordingly.

// let age = 10;

// try {
//   if (typeof age !== "number") {
//     throw new Error("Input must be a number");
//   }

//   result = age > 18 ? "eligible" : "X : elligible";
//   console.log(result);
// } catch (error) {
//   console.log(error.message);
//   result = "unknown";
// }

// try {
//   let monthlySalary = 12300;
//   let yearlySalary = monthlySalary * 12;
//   let bonus = yearlySalary * 0.2;
//   console.log(`Your yearly salary is: ${yearlySalary}`);
//   console.log(`Your bonus is: ${bonus}`);
//   console.log(`Your total salary including bonus is: ${yearlySalary + bonus}`);
// } catch (error) {
//   console.error("An error occurred while calculating the salary and bonus.");
// }

// ## 4. Write a program for the Traffic Light Simulation.
// Red Light... Green Light... Let's Play!

// - [ ] Create a `color` variable.
// - [ ] Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.

// let color = "Green";
// try {
//   if (typeof color !== "string") {
//     throw new Error("Input must be a string");
//   }
//   let result =
//     color.toLocaleLowerCase() === "red"
//       ? "stop "
//       : color.toLocaleLowerCase() === "green"
//       ? "go"
//       : "unknown color";
//   console.log(`The color is: ${color} and the action is: ${result}`);
// } catch (error) {
//   console.error(error.message);
//   result = "unknown";
// }

// ## 5. Create an Electricity Bill Calculator
// Let's calculate how much you pay for electricity bills per month and annually.

// - [ ] Create a `units` variable. Based on this value you will calculate the total electricity bill for a months.
// - [ ] If each day you consume the `units` and each unit cost 150 rupees, how much will you be charged per month?
// - [ ] If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

// let units = 100; // Example value for units consumed per day

// try {
//   if (typeof units !== "number") {
//     throw new Error("Input must be a number");
//   }

//   let dailyCost = units * 150; // Cost per day
//   let monthlyCost = dailyCost * 30; // Cost per month
//   let annualCost = monthlyCost * 12; // Cost per year
//   let annualDiscounted = annualCost * 0.2; // 20% discount on annual payment
//   let totalAnnualCost = annualCost - annualDiscounted; // Total cost after discount
//   console.log(
//     `Monthly Electricity Bill: ${monthlyCost.toLocaleString()} rupees`
//   );
//   console.log(
//     `Annual Electricity Bill before discount: ${annualCost.toLocaleString()} rupees`
//   );
//   console.log(
//     `Annual Electricity Bill after 20% discount: ${totalAnnualCost.toLocaleString()} rupees`
//   );
// } catch (error) {
//   console.error(
//     "An error occurred while calculating the electricity bill:",
//     error.message
//   );
//   totalAnnualCost = "unknown";
// }

// ## 7. Max of Three Numbers
// Find the max number from the lot.

// - [ ] Take three numbers and assign them to variables p, q, and r.
// - [ ] Now find the maximum of these three numbers using the comparison operators.

// let p = 1000;
// let q = 200;
// let r = 3000;
// try {
//   if (typeof p !== "number" || typeof q !== "number" || typeof r !== "number") {
//     throw new Error("All inputs must be numbers");
//   }

//   let maxNumber = p > q ? (p > r ? p : r) : (q > r ? q : r);
//   console.log(`The maximum number among ${p}, ${q}, and ${r} is: ${maxNumber}`);
// } catch (error) {
//   console.error(error.message);
// }

// ## 8. Bitwise Doubling
// A tricky one for you

// - [ ] Create a variable `count` and assign  a value, say, 5.
// - [ ] Now use the Bitwise shift operator to make the number double.
// - [ ] Print it on the console.

// let count = 5; // 101 in binary left shift is 1010 and right shift is 0010
// // 0000 0101 => 0000 1010 (left shift) => 0000 0010 (right shift)
// try {
//   if (typeof count !== "number") {
//     throw new Error("Input must be a number");
//   }

//   let doubledCount = count << 1; // Bitwise left shift to double the value
//   let haveCount = count >> 1; // Bitwise right shift to halve the value

//   console.log(
//     `The original count is: ${count} and the doubled count is: ${doubledCount}`
//   );
//   console.log(
//     `The original count is: ${count} and the halved count is: ${haveCount}`
//   );
// } catch (error) {
//   console.error(error.message);
// }
