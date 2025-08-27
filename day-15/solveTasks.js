// let students = ["Ahmed", "Aly", "Mohamed"];
// let antherStd = new Array(["Jon, Nader"]);
// let arr = new Array(1000);

// console.log(students);
// console.log(antherStd);
// console.log(arr);

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// console.log("------------------------");

// for (let i of students) {
//   console.log(`form for...of ${i}`);
//   console.log(i);
// }

// console.log("------------------");

// students.forEach((e) => console.log(e));

// console.log("----------------");

// for (let i in students) {
//   console.log(`form for...in ${i}`);
//   console.log(students[i]);
// }

// console.log("----------------");
// console.log("----------------");

// let c = students.push("lila");
// let d = students.unshift("sss");
// console.log(c);
// console.log(d);
// for (let i in students) {
//   console.log(`form for...in ${i}`);
//   console.log(students[i]);
// }

// console.log("----------------");
// console.log("----------------");

// let a = students.pop();
// let b = students.shift();

// console.log(a);
// console.log(b);

// console.log("---------------------");
// console.log("---------------------");

// const stdClone = students.slice();
// console.log(stdClone);
// const stdClone2 = students.slice(1, -2);
// console.log(stdClone2);

// students.push([1, 2, 3,, { age: 30, address: { city: "asyut" } }]]);
// const [
//   name1,
//   ,
//   name3,
//   [
//     ,
//     ,
//     ,
//     [
//       ,
//       {
//         address: { city },
//       },
//     ],
//   ],
// ] = students;

// console.log(name1);
// console.log(city);
// console.log(name3);

// const arr1 = ["a", undefined];
// const arr2 = ["c", "d"];

// const arr3 = arr2.slice();

// console.log(arr2);
// console.log(arr3);

// let arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// for (let i = 0; i < arr.length; i++) {
//   arr.shift();
// }

// arr = arr.slice(0,);
// arr.splice(0, arr.length);
// console.log(arr);

// console.log(arr.splice(3, 3));

// console.log(arr.slice(0, 0));
// console.log(arr.splice(0, arr.length));

// console.log(arr);

// const numbers = [];
// const name1 = [];

// while (numbers.length > 0) {
//   // numbers.pop();
//   // numbers.shift();
// }

// console.log(typeof (numbers + name1));

// const afa = ["d", "e", "a", "c", "b"];

// for (let i = 0; i < afa.length; i++) {
//   for (let j = 1; j < afa.length; j++) {
//     let temp = "";
//     if (afa[i] > afa[j]) {
//       temp = afa[i];
//       afa[i] = afa[j];
//       afa[j] = temp;
//       temp = "";
//     }
//   }
// }

// console.log(afa);

// const arr = [1, 2, 3, 4];
// const [a,s, ...x] = arr;
// console.log(arr2);

// let a = "a";
// let b = "b";
// console.log(a, b);

// [a, b] = [b, a];

// console.log(a, b);

// const a = [1, 2, 3, 4];
// const b = ["a", "b"];

// const c = [...a, ...b];

// console.log(c);

//     - ✅ The concat() array method
//     - ✅ The join() array method
//     - ✅ The fill() array method
//     - ✅ The includes() array method
//     - ✅ The indexOf() array method
//     - ✅ The reverse() array method
//     - ✅ The sort() array method
//     - ✅ The splice() array method
//     - ✅ The at() Method
//     - ✅ The copyWithin() Method
//     - ✅ The flat() Method
//     - ✅ Grouping elements in Array

// const c = ["a", "b", "c"];

// const arr = a.concat(b, c); // return new array
// const arr = a.join(" v "); // return string joined all array elements
// const arr = a.fill("*", 0, a.length); // mutate the original array
// const arr = a.includes(2)
// const arr = a.indexOf(0);
// const arr = a.reverse(); // mutate the original array
// const arr = a.sort() // mutate the original array
// const arr = a.splice(1, 2); // mutate the origiwnal array and return the deleted array
// const arr = a.at(-4);
// const arr = a.copyWithin(2, 2, 5);
// const arr = a.flat().flat();

// console.log(a);
// console.log(arr);

// const arr = [1, 3, 20, 10, 5, 2, 65, 78];

// console.log(arr.sort((a, b) => b - a));
// const a = [1, 2, 3, 4, 5, ["1", ["1", "2", ["3", [0, [0, [0, 0]]]]]]];
// const b = [6, 7, 8, 9, 10];
// // const d = a.splice(1, 0, ...b);
// // console.log(a.sort((a, b) => a - b));
// // console.log(d);

// console.log(a);
// console.log(a.flat(Infinity));

// const employees = [
//   { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
//   { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
//   { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
//   { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
//   { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
//   { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
//   { id: 7, name: "George", departmentId: 3, salary: 5200 },
//   { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
//   { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
//   { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
// ];

// const groupedBySalary = Object.groupBy(
//   employees,
//   ({ salary, departmentId }) => {
//     return salary > 5000 && departmentId === 2
//       ? "dep 2 and salary more than 5000k"
//       : " other dep and  other salary";
//   }
// );

// console.log(groupedBySalary);
// {
//   const c = ["a", "w", "e", "b", "c"];
//   const b = c.toSpliced(1, 1, "AA");
//   const n = c.toSorted();
//   const m = c.toReversed();
//   // console.log(c.splice(1, 1, "A"));
//   // console.log(c);
//   // console.log(b);
//   console.log(m);

//   console.log(n);
//   console.log(c);
// }

// const b = [6, 7, 8, 9, 10];

// b[2] = "a";
// console.log(b.toSpliced(2, 1, "a"));
// console.log(b);

// const n = b.with(2, "^");
// console.log(n);

// - ✅ The Array-Like
// - ✅ The Array.from() array method
// - ✅ The Array.fromAsync() array method
// - ✅ The Array.of() array method

// const li = document.getElementsByTagName("li");

// const arrayLick = {
//   0: "a",
//   1: "b",
//   3: "b",
//   length: 2,
// };

// const arrr = [
//   { name: "ahmed", age: 20, gpa: 3.4 },
//   { name: "ahmed", age: 30, gpa: 3.3 },
//   { name: "ahmed", age: 20, gpa: 3.3 },
//   { name: "ahmed", age: 10, gpa: 2 },
//   { name: "ahmed", age: 20, gpa: 2.5 },
//   { name: "ahmed", age: 22, gpa: 2.9 },
// ];

// console.log(Array.from(arrr));
// console.log(
//   Object.groupBy(arrr, ({ name, age, gpa }) => {
//     return name === "ahmed" && age === 20 && gpa >= 3 ? "accepted" : "rejected";
//   })
// );

// const arr1 = Array.fromAsync(arrayLick);

// // const arr3 = arr1.then((arr) => console.log(arr));

// const arr4 = Array.of(1, 2, 3, 4, 5, 6);
// const arr5 = new Array(1, 2, 3, 4, 5, 6);

// console.log(arr4);
// console.log(arr5);
// console.log(arr);
// console.log(typeof li);
// console.log(li);

// - ✅ The filter() array method
// - ✅ The map() array method
// - ✅ The reduce() array method
// - ✅ The reduceRight() array method
// - ✅ The some() array method
// - ✅ The every() array method
// - ✅ The find() array method
// - ✅ The findIndex() array method
// - ✅ The findLast() array method
// - ✅ The findLastIndex() array method
// - ✅ Array method Chaining
// - ✅ The forEach() array method
// - ✅ The entries() method
// - ✅ The values() method
// - ✅ The flatMap() array method

// let customers = [
//   {
//     id: 001,
//     f_name: "Abby",
//     l_name: "Thomas",
//     gender: "M",
//     married: true,
//     age: 32,
//     expense: 500,
//     purchased: ["Shampoo", "Toys", "Book"],
//   },
//   {
//     id: 002,
//     f_name: "Jerry",
//     l_name: "Tom",
//     gender: "M",
//     married: true,
//     age: 64,
//     expense: 100,
//     purchased: ["Stick", "Blade"],
//   },
//   {
//     id: 003,
//     f_name: "Dianna",
//     l_name: "Cherry",
//     gender: "F",
//     married: true,
//     age: 22,
//     expense: 1500,
//     purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
//   },
//   {
//     id: 004,
//     f_name: "Dev",
//     l_name: "Currian",
//     gender: "M",
//     married: true,
//     age: 82,
//     expense: 90,
//     purchased: ["Book"],
//   },
//   {
//     id: 005,
//     f_name: "Maria",
//     l_name: "Gomes",
//     gender: "F",
//     married: false,
//     age: 7,
//     expense: 300,
//     purchased: ["Toys"],
//   },
// ];

// const result = customers.filter((customer) => customer.age >= 60);

// console.log(result);

// const customersWithFullName = customers.map((customer) => {
//   let title = "";
//   if (customer.gender === "M") {
//     title = "Mr.";
//   } else if (customer.gender === "F" && customer.married) {
//     title = "Mrs.";
//   } else {
//     title = "Miss.";
//   }

//   customer["full_name"] = `${title} ${customer.f_name} ${customer.l_name}`;
//   return customer;
// });

// console.log(customers);
// console.log(customersWithFullName);

// const marriedCustomer = customers.filter((customer) => customer.married);
// console.log(marriedCustomer);
// const changeCustomerState = customers.map((customer) => {
//   let state = "";
//   if (customer.married && customer.age > 20) {
//     state = ":(";
//   } else {
//     state = ":)";
//   }

//   customer.state = state;
//   return customer;
// });

// console.log(changeCustomerState);
// let count = 0;
// const averageAge = customers.reduce((accumulator, currentValue) => {
//   if (currentValue.purchased.includes("Book")) {
//     accumulator += currentValue.age;
//     count++;
//   }
//   return accumulator;
// }, 0);

// console.log(averageAge / count);

// console.log(customers.every((customer) => customer.age > 10));

// - [ ] **T-066**: Find the longest word in this sentence using Array and Array methods: ]
// "40 Days of JavaScript by tapaScript is a powerful initiative".

// let sentence = "40 Days of JavaScript by tapaScript is a powerful initiative";

// console.log(
//   sentence.split(" ").reduce((acc, currentValue) => {
//     return acc.length > currentValue.length ? acc : currentValue;
//   }, "")
// );

// // - [ ] **T-067**: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]

// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];

// let arr3 = arr1.concat(arr2);
// // console.log(arr3);

// // let commonElem = [];
// // arr3.reduce((acc, currentValue) => {
// //   return acc === currentValue ? commonElem.push(acc) : (acc = currentValue);
// // });
// // let commonElem = [];
// // for (let i = 0; i < arr1.length; i++) {
// //   if (arr2.includes(i)) commonElem.push(i);
// // }

// const commonElem = arr1.filter((elem) => arr2.includes(elem));
// console.log(Array.from(["a", "a"]));

// let arr4 = [3, 7, 3, 2, 3, 8, 7, 7, 3];

// const req = arr4.reduce((acc, currentValue) => {
//   acc[currentValue] = (acc[currentValue] || 0) + 1;
//   return acc;
// }, {});

// console.log(
//   Object.keys(req).reduce((a, b) => {
//     return req[a] > req[b] ? a : b;
//   })
// );

// console.log(
//   Object.fromEntries([
//     ["a", 1],
//     ["b", 2],
//     ["c", 3],
//   ])
// );
