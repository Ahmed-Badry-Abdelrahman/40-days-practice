const BULBASAUR_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
const RATICATE_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/raticate";
const KAKUNA_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/kakuna";

const getPromise = (URL) => {
  return fetch(URL).then((response) => {
    if (!response.ok) {
      throw new Error("we have something wrong in the response");
    }

    return response.json();
  });
};

const promise1 = getPromise(BULBASAUR_POKEMONS_URL);
const promise2 = getPromise(RATICATE_POKEMONS_URL);
const promise3 = getPromise(KAKUNA_POKEMONS_URL);

// const allPromises = Promise.all([promise1, promise2, promise3]);
// allPromises
//   .then((responses) => {
//     responses.forEach((response) => {
//       console.log(`Name: ${response.name}`);
//       console.log(`weight: ${response.weight}`);
//       console.log(`-------------------------`);
//     });
//   })
//   .catch((e) => console.log(e));

// const allSettled = Promise.allSettled([promise1, promise2, promise3]);

// allSettled
//   .then((responses) => {
//     console.log(responses);
//     responses.forEach((response) => {
//       if (response.status === "fulfilled") {
//         console.log(`Name: ${response.value.name}`);
//         console.log(`weight: ${response.value.weight}`);
//       } else {
//         console.log(`status: ${response.status}`);
//         console.log(`${response.reason}`);
//       }
//       console.log(`-------------------------`);
//     });
//   })
//   .catch((e) => console.log(e));

// const any = Promise.any([promise1, promise2, promise3]);
// any
//   .then((response) => {
//     console.log(`${response}`);
//     console.log(`Name: ${response.name}`);
//     console.log(`weight: ${response.weight}`);
//     console.log(`-------------------------`);
//   })
//   .catch((e) => console.log(e));

// const race = Promise.race([promise1, promise2, promise3]);
// race
//   .then((response) => {
//     console.log(`${response}`);
//     console.log(`Name: ${response.name}`);
//     console.log(`weight: ${response.weight}`);
//     console.log(`-------------------------`);
//   })
//   .catch((e) => console.log(e));
// promise1
//   .then((response) => {
//     console.log(`Name: ${response.name}`);
//     return response;
//   })
//   .then((response) => {
//     console.log(`weight: ${response.weight}`);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const result = getPromise(BULBASAUR_POKEMONS_URL).then((response) => {
//   return response.name;
// });

// console.log(result);

// let getUser = new Promise(function (resolve, reject) {
//   const user = {
//     name: "John Doe",
//     email: "jdoe@email.com",
//     password: "jdoe.password",
//     permissions: ["db", "dev"],
//   };
//   resolve(user);
// });

// getUser
//   .then((response) => {
//     console.log(`Name is : ${response.name}`);
//     return response.email;
//   })
//   .then((response) => {
//     console.log(`The email is : ${response}`);
//     throw new Error("something wrong");
//   })
//   .catch((error) => {
//     console.error(error.message);
//   })
//   .finally(() => console.log("close db connection"));

// const prom = new Promise((resolve, reject) => {
//   //   reject("promise reject");
//   resolve("promise fullfil");
// });

// prom
//   .then((res) => {
//     return 404;
//   })
//   .then((res) => console.log(res))
//   .catch((res) => console.log(res));

// ## 1. Create Your First Promise

// - Create a Promise that resolves with the string
//  "Hello, Promises!" after 1 second.
// - Log the result using .then().

// const p1 = new Promise((resolve, reject) => {
//   resolve(["heads", "tails"].sort(() => Math.random() - 0.5));
// });

// p1.then((response) => {
//   setTimeout(() => {
//     console.log(response[0]);
//   }, 1000);
// }).catch((error) => console.error(error));

// function checkAge(age) {
//   return new Promise((resolve, reject) => {
//     age >= 18
//       ? resolve("the age is greater than 18")
//       : reject("the age less than 18");
//   })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// checkAge(17);

// const p1 = new Promise((rs, rj) => {
//   rs("step 1 done");
//   return;
// });
// const p2 = new Promise((rs, rj) => {
//   rs("step 2 done");
// });
// const p3 = new Promise((rs, rj) => {
//   rs("step 3 done");
// });

// p1.then((response) => {
//   console.log(response);
//   return new Promise((rs, rj) => {
//     rs("step 2 done");
//   });
// })
//   .then((response) => {
//     console.log(response);
//     return new Promise((rs, rj) => {
//       rs("step 3 done");
//     });
//   })
//   .then((response) => {
//     console.log(response);
//   });

// const promise = new Promise((resolve, reject) => {
//   resolve(5);
// });

// promise
//   .then((response) => {
//     return response * 2;
//   })
//   .then((response) => {
//     console.log(response * response);
//   });

// {
//   const p1 = new Promise((resolve, reject) => {
//     resolve("start");
//   });

//   p1.then((response) => {
//     console.log(response);
//   })
//     .then((response) => {
//       if (Math.random() < 0.5) throw new Error("Error");
//       return "continue";
//     })
//     .catch((error) => console.error(error));
// }

// {
//   const p1 = new Promise((r, j) => {
//     r("done");
//   });

//   p1.then((r) => console.log(r + 1));
//   p1.then((r) => console.log(r + 2));
// }

// {
//   const p = new Promise((r, j) => {
//     setTimeout(() => {
//       console.log("first");
//       r();
//     }, 1000);
//   });

//   p.then((r) => {
//     return new Promise((r, j) => {
//       setTimeout(() => {
//         console.log("first");
//         r();
//       }, 1000);
//     });
//   })
//     .then((r) => {
//       return new Promise((r, j) => {
//         setTimeout(() => {
//           console.log("first");
//           r();
//         }, 1000);
//       });
//     })
//     .catch((e) => console.error(e));
// }

// function dBQuery() {
//   const user = {
//     name: "ahmed",
//     age: 11,
//   };
//   return new Promise((r, j) => {
//     setTimeout(() => {
//       console.log("DB connection done");
//       r(user);
//     }, 2000);
//   });
// }

// dBQuery()
//   .then((r) => {
//     console.log(r.name);
//     return r;
//   })
//   .then((r) => {
//     console.log(r.age);
//   })
//   .catch((e) => {
//     console.error(e);
//   })
//   .finally(() => {
//     console.log("db connection disabled");
//   });
