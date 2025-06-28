// ## 1. Odd or Even?
//  - [ ] Take a number and find if the number is an odd or even number.
//  - [ ] Print the number and result in the console.

function oddOrEvenNumber(num) {
  console.log(num % 2 === 0 ? "even" : "odd");
}

// oddOrEvenNumber(3);

// ## 2. Do you have a Driving License?
// Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

// - [ ] Manage `age` as a variable.
// - [ ] Check if the age is eligible for a driving license and print it on the console accordingly.

function eligibleDrivingLicenseAge(age) {
  console.log(age >= 18 ? "eligible" : "ineligible");
}

// eligibleDrivingLicenseAge(11);

// ## 3. Calculate CTC with a Bonus
// Let's calculate how much you earn from your office.

// - [ ] You get 12,300 rupees as your monthly salary.
// - [ ] You get a 20% bonus on your annual salary.
// - [ ] How much money do you make per annum as a CTC?

function calculateBonus(salary) {
  return (20 / 100) * salary;
}

function calculateFinalSalary(salary) {
  console.log(calculateBonus(salary) + salary);
}

// calculateFinalSalary(12300);

// ## 4. Write a program for the Traffic Light Simulation.
// Red Light... Green Light... Let's Play!

// - [ ] Create a `color` variable.
// - [ ] Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.

function TrafficLightSimulation(color) {
  console.log(color === "red" ? "Stop" : "Go");
}

// TrafficLightSimulation("red");

// ## 5. Create an Electricity Bill Calculator
// Let's calculate how much you pay for electricity bills per month and annually.

// - [ ] Create a `units` variable. Based on this value you will calculate the total electricity bill for a months.
// - [ ] If each day you consume the `units` and each unit cost 150 rupees, how much will you be charged per month?
// - [ ] If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

function calculateDiscount(monthlyCost) {
  return (20 / 100) * monthlyCost;
}
function ElectricityBillCalculator(unit) {
  let monthlyCost = unit * 150;
  let annualCost = 12 * monthlyCost - calculateDiscount(monthlyCost * 12);
  console.log("Monthly Cost ==", monthlyCost);
  console.log("Annual Cost ==", annualCost);
}

// ElectricityBillCalculator(100);

// ## 6. Leap Year Checker
// Is 2025 a Leap Year?

// - [ ] Take `year` as input.
// - [ ] Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

function LeapYearChecker(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log("Leap Year");
  } else {
    console.log("Not Leap Year");
  }
}

// LeapYearChecker(2020);

// ## 7. Max of Three Numbers
// Find the max number from the lot.

// - [ ] Take three numbers and assign them to variables p, q, and r.
// - [ ] Now find the maximum of these three numbers using the comparison operators.

function MaxOfThreeNumbers(p, q, r) {
  if (p > q) {
    if (p > r) {
      console.log("p is max number", p);
    } else {
      console.log("r is max number", r);
    }
  } else {
    if (q > r) {
      console.log("q is max number", q);
    } else {
      console.log("r is max number", r);
    }
  }
}

// MaxOfThreeNumbers(190, 15, 200);

// ## 8. Bitwise Doubling
// A tricky one for you

// - [ ] Create a variable `count` and assign  a value, say, 5.
// - [ ] Now use the Bitwise shift operator to make the number double.
// - [ ] Print it on the console.

function bitwiseDoubling(number) {
  console.log(number << 1); // number << 1   ===  number * 2  => 20
  console.log(number >> 1); // number << 1   ===  number / 2  => 5
}

// bitwiseDoubling(10);
