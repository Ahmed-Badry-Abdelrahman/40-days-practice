// let a = undefined ?? 2;

// let user = { a: { c: null }, b: null };
// console.log(user.b?.c ?? "no", user.b ?? "ff");

// let score = 0;

// console.log(score || 100); // 👉 100 (لأن 0 falsy)
// console.log(score ?? 100); // 👉 0 (لأن مش null أو undefined)

// const obj = Object.freeze({ a: 1 });
// obj.a = 2;
// obj.b = 2;
// console.log(obj.b);

// const {
//   name,
//   company,
//   company: {
//     location: { city },
//   },
// } = person;

// console.log(name, company, city);

// console.log(Object.keys(person));
// console.log(
//   Object.fromEntries([
//     ["a", 34],
//     ["b", 24],
//   ])
// );

const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};
// console.log(Object.hasOwn(person, "name"));
// console.log("age" in person);

// const person = { name: "John" };
// const newPerson = person;
// newPerson.name = "Doe";
// console.log(person.name);

// both referring to tha same memory reference so will print Doe

// const obj = Object.assign({}, person);
// const obj2 = structuredClone(person);

// person.company.name = "ts";
// console.log(obj.company.name);
// console.log(person.company.name);
// console.log(obj.company.name);

// console.log(obj2.company.name);
// console.log(person.company.name);
// console.log(obj2.company.name);

// const users = [
//   {
//     name: "Alex",
//     address: "15th Park Avenue",
//     age: 43,
//   },
//   {
//     name: "Bob",
//     address: "Canada",
//     age: 53,
//   },
//   {
//     name: "Carl",
//     address: "Bangalore",
//     age: 26,
//   },
// ];

// for (let { name, address, age } of users) {
//   console.log(`${name} --- ${address} --- ${age}`);
// }

// const obj = {
//   name: "Carl",
//   address: "Bangalore",
//   age: 26,
// };
// for (let key in obj) {
//   console.log(`${key}`);
//   console.log(`${obj[key]}`);
// }
