// const map = new Map();

// const key = { user: "" };
// const Key = { user: "" };
// map.set(key, { dep: "it" });
// map.set("234", "hello");
// map.set(234, "hello");
// console.log(map.get(key));
// console.log(map);
// console.log(map.get(234) === map.get("234"));
// const obj = {};

// obj[234] = "hello";

// console.log(obj);
// console.log(obj[234] === obj["234"]);

// const users = new Map([
//   ["bob", 20],
//   ["alias", 22],
//   ["aly", 30],
//   ["lila", 26],
//   ["ahmed", 25],
// ]);

// console.log(users);
// const obj = { 1: "a", 2: "b" };
// for (const key in obj) {
//   console.log(`key: ${obj[key]}`);
// }

// users.forEach((name, age) => {
//   console.log(name);
//   console.log(age);
// });

// for (const [name, age] of users) {
//   console.log(name, age);
// }

// const users = new Map([
//   ["bob", 20],
//   ["alias", 22],
//   ["aly", 30],
//   ["lila", 26],
//   ["ahmed", 25],
// ]);

// const obj = {
//   coffee: 200,
//   milk: 100,
//   tea: 98,
// };

// console.log(Object.entries(obj));
// const myMap = new Map(Object.entries(obj));
// console.log(myMap);
// const myObj = Object.fromEntries(users);
// console.log(myObj);
// const myArr = Array.from(users);
// console.log(myArr);

// ===============================================================================================
// ## 1. Create a Map of Student IDs and Names

// - Add at least 5 students.
// - Retrieve a name using a student ID.
// - Delete one entry and print the Map.

{
  const student = new Map([
    [20001, "ahmed"],
    [20002, "aly"],
    [20003, "salem"],
    [20004, "lila"],
    [20005, "bob"],
  ]);

  console.log(student.get(20002));
  student.delete(20005);
  console.log(student);
}

// ===============================================================================================
// ## 2. Create a Set of Programming Languages

// - Add duplicate languages to test uniqueness.
// - Iterate and print all unique entries.
{
  const proLang = new Set(["js", "css", "html", "react", "js", "css"]);
  proLang.forEach((e) => console.log(e));
}

// ===============================================================================================
// ## 3. Compare Object vs Map for Key-Value Storage

// - Store the same data in both.
// - Compare insertion order and key types (e.g., object keys).

{
  const obj1 = { name: "ahmed" };
  const map = new Map([
    [true, "ahmed"],
    [0, "aly"],
    [{ name: "ahmed" }, "ahmed"],
  ]);

  console.log(obj1);
  console.log(map);
}

// ===============================================================================================
// ## 4. Build a Contact List Using Map

// - Use phone numbers as keys and names as values.
// - Add, update, delete contacts.
// - Search for a contact by number.

{
  console.log("contact list");
  const contactList = new Map();
  contactList.set("Ahmed", "01144155089");
  contactList.set("bob", "01144155089");
  contactList.set("alias", "01144155089");
  contactList.set("x", "01144155089");

  console.log(contactList);
  console.log(contactList.get("x"));

  contactList.set("bob", "01148405575");
  console.log(contactList);

  contactList.delete("x");
  console.log(contactList.get("x"));
  console.log(contactList.get("bob"));
}

// ===============================================================================================
// ## 5. Remove Duplicates from Array Using Set
// Convert to a Set and back to an array with only unique values.

{
  const fruits = ["apple", "banana", "apple", "orange", "banana"];
  console.log(new Set(fruits));
  const uniqueFruits = Array.from(new Set(fruits));
  console.log(uniqueFruits);
}

// ===============================================================================================
// ## 6. Track User Logins with Set

// - Add user IDs when users log in.
// - Remove them on logout.
// - Check if a specific user is currently logged in.

{
  const userId = "20001";
  const users = new Set();
  function userLogin(Id) {
    console.log("user logged in ");
    users.add(Id);
  }

  function userLogout(Id) {
    console.log("user logout in ");
    users.delete(Id);
  }

  function isUserLoggedIn(id) {
    return users.has(id);
  }

  userLogin(userId);
  console.log(isUserLoggedIn(userId));
  userLogout(userId);
  console.log(isUserLoggedIn(userId));
}

// ===============================================================================================
// ## 7. Create a Map of Book Titles and Authors

// - Add at least 5 entries.
// - Update an author.
// - Count the number of books.

{
  const booksMap = new Map([
    ["book1", "author1"],
    ["book2", "author2"],
    ["book3", "author3"],
    ["book4", "author4"],
    ["book5", "author5"],
  ]);

  booksMap.set("book3", "Ahmed");
  console.log(booksMap);
  console.log(booksMap.size);
}

// ===============================================================================================
// ## 8. Associate Metadata with DOM Elements Using WeakMap

// - Create fake DOM elements (objects).
// - Store related metadata in a WeakMap.
// - Demonstrate benefits for garbage collection.

{
  let myElement = document.createElement("div");

  const metadataMap = new WeakMap();
  metadataMap.set(myElement, { visibility: false });

  if (!metadataMap.get(myElement)?.visibility) {
    myElement = null;
  }

  console.log(metadataMap);
  // benefits
  // if this element is not displayed or not visible garbage collection will removed it
}

// ===============================================================================================
// ## 9. Track Instances of a Class with WeakSet

// - Define a `Session` class.
// - Add each instance to a WeakSet when created.
// - Discuss how it avoids memory leaks.

{
  const Session = class {
    constructor(create) {
      this.create = create;
    }

    start = false;
    end = false;

    endSession = () => {
      this.end = true;
    };

    isEnd = () => {
      return this.end;
    };

    isStarted = () => {
      return this.start;
    };

    startSession = () => {
      this.start = true;
    };
  };

  const createdSessions = new WeakSet();
  const obj1 = { test: 1 };
  console.log(createdSessions.add(obj1));
  console.log(createdSessions.has(obj1));
  function createSession() {
    console.log("Session has been created");
    let session = new Session("created");

    createdSessions.add(session);
    console.log(createdSessions.has(session));
    console.log(createdSessions);
    console.log("session started");
    startSession(session);
    console.log("session end");
    endSession(session);

    if (session.isEnd()) {
      console.log("session removed");
      session = null;
      console.log(createdSessions.has(session));
    }
  }

  createSession();
  function startSession(session) {
    session.startSession();
  }

  function endSession(session) {
    session.endSession();
  }
}
// ===============================================================================================
// ## 10. Build a Shopping Cart Using Map

// - Product IDs as keys and quantity as values.
// - Add, remove, and update quantities.
// - Calculate total items in the cart.

{
  const cart = new Map();

  cart.set("101", 20);
  cart.set("102", 10);
  cart.set("103", 2);
  cart.set("104", 0);

  cart.set("104", 50);
  cart.delete("101");

  const totalItems = [...cart.values()].reduce((a, c) => {
    return a + c;
  }, 0);

  console.log(totalItems);
}

// ===============================================================================================
// ## 11. Anagram Checker with Set

// - Write a function that checks if two strings are anagrams.
// - Use Sets to compare character presence.

{
  function checks(str1, str2) {
    const s1 = str1.toLowerCase();
    const s2 = str2.toLowerCase();

    const set1 = new Set([...s1]);
    const set2 = new Set([...s2]);
    console.log(set1);
    console.log(set2);

    if (set1.size !== set2.size) return false;

    for (const ch of set1) {
      if (!set2.has(ch)) return false;
    }

    return s1.split("").sort().join("") === s2.split("").sort().join("");
  }

  console.log(checks("ahmed", "Ahmed"));

  // if (checks("ahmed", "ahmed") > 1) {
  //   console.log("the strings are not anagrams");
  // } else {
  //   console.log("the strings are anagrams");
  // }
}

// ===============================================================================================

// ## 12. First Non-Repeating Character with Map

// - Count character frequencies in a string using a Map.
// - Return the first character with count 1.

{
  function firstNonRepeating(str) {
    const myMap = new Map();

    [...str].forEach((char) => {
      myMap.set(char, (myMap.get(char) || 0) + 1);
    });

    for (const ch of str) {
      if (myMap.get(ch) === 1) {
        return ch;
      }
    }
    return null;
  }
  console.log(firstNonRepeating("aahhhmmed"));
}

// ===============================================================================================

// ## 13. Measure Performance: Object vs Map

// - Insert 100,000 key-value pairs into both.
// - Use `console.time()` to benchmark speed.

{
  const myMap = new Map();
  console.time("loop");
  for (let i = 0; i < 100000; i++) {
    myMap.set(i, `${i}`);
  }
  console.timeEnd("loop");
}

{
  const myObj = {};
  console.time("loop");
  for (let i = 0; i < 100000; i++) {
    myObj[i] = `${i}`;
  }
  console.timeEnd("loop");
}

// ===============================================================================================

// ## 14. Voting App with Set to Prevent Duplicate Votes

// - Track user IDs in a Set.
// - Allow each ID to vote only once.

{
  const mySet = new Set();

  function voting(userId) {
    if (mySet.has(userId)) return "you already voting before";
    mySet.add(userId);
    return "you voting successfully";
  }

  console.log(voting("10001"));
  console.log(voting("10002"));
  console.log(voting("10001"));
}

// ===============================================================================================

// ## 15. Employee Registry Using Object Keys in Map

// - Use employee objects as keys.
// - Add and retrieve job-related info.
// - Show that Object keys don't work similarly in plain objects.

{
  const myMap = new Map();

  const emp1 = {
    name: "ahmed",
    age: 20,
    phonNumber: "0112937897",
  };

  const emp2 = {
    name: "bob",
    age: 20,
    phonNumber: "0112937897",
  };

  const obj = {
    [emp1]: { dep: "It" },
    [emp2]: { dep: "CS" },
  };

  myMap.set(emp1, { dep: "It" });
  myMap.set(emp2, { dep: "CS" });

  console.log(myMap);
  console.log(myMap.get(emp1)?.dep);
  console.log(myMap.get(emp2)?.dep);
  console.log("=-------------------------");
  console.log(obj);
  console.log(obj[emp1]?.dep);
  console.log(obj[emp2]?.dep);
}
