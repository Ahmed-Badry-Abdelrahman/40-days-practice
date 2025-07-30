// ## 2. What is the problem here? Fix it to log the correct name and explain the fix

// const user = {
//   name: "tapaScript",
//   greet: function () {
//     return () => {
//       console.log(`Hello, ${this.name}!`);
//     };
//   },
// };

// user.greet()();

// ## 3. Can you explain what is the problem here and fix the issue to log the correct name?

// const obj = {
//   name: "Tom",
//   greet: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
// };

// const greetFn = obj.greet;
// greetFn.call(obj);

// ## 4. What is the problem with the following code? Why isn't it logging the name correctly?

// const user = {
//   name: "Alex",
//   greet: function () {
//     return () => {
//       console.log(`Hello, ${this.name}!`);
//     };
//   },
// };

// user.greet()();

// ## 5. Create a `Sports` constructor function that
// takes `name` and `number of players` as arguments and
// assigns them using `this` keyword. Then, create two sports
// instances and log their details

// function Sports(name, numberOfPlayers) {
//   this.name = name;
//   this.numberOfPlayers = numberOfPlayers;
//   this.getInfo = function () {
//     console.log(`${this.name} __ ${this.numberOfPlayers}`);
//   };
// }

// const obj1 = new Sports("zz", 30);
// const obj2 = new Sports("aa", 20);

// obj1.getInfo();
// obj2.getInfo();

// ## 6. Can you attach the car1's `describe()` method to car2 object?
// Give all possible solutions that you can think of

// const car1 = {
//   brand: "Audi",
//   model: "A8",
//   describe: function () {
//     console.log(`This car is a ${this.brand} ${this.model}.`);
//   },
// };

// const car2 = {
//   brand: "BMW",
//   model: "X1",
// };

// car1.describe.call(car2);
// car1.describe.apply(car2);
// car1.describe.bind(car2)();

// Object.assign(car2, car1);

// car2.describe();

// ## 7. What will be the output of the following code and why?

// const person = {
//   name: "Charlie",
//   sayHello: function () {
//     console.log(this.name);
//   },
//   sayHelloArrow: () => {
//     console.log(this.name);
//   },
// };

// person.sayHello();
// person.sayHelloArrow();

// console.log(window.name);
// // Options are:

// - A: "Charlie" and "Charlie"
// - B: "Charlie" and undefined
// - C: "Charlie" and "" (empty string)
// - D: undefined and "Charlie"
