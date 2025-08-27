// ## 1. Create a form dynamically using JavaScript and manipulate its behavior

// - Add input fields dynamically based on user selection e.g., text, email, number
// - Add a submit button that logs all the input values as an object.
// - Add a reset button that clears the form.
// - Use createElement, appendChild, setAttribute, and addEventListener.

// const fragment = document.createDocumentFragment();
// const form = document.createElement("form");
// form.setAttribute("id", "myForm");

// // create user selection
// const selection = document.createElement("select");
// ["text", "email", "number"].forEach((element) => {
//   const option = document.createElement("option");
//   option.value = element;
//   option.textContent = `${element} Element`;
//   selection.appendChild(option);
// });

// fragment.appendChild(selection);

// // btn to add fields to form

// const addField = document.createElement("button");
// addField.type = "button";
// addField.textContent = "Add Field";
// fragment.appendChild(addField);

// const submitBtn = document.createElement("button");
// submitBtn.type = "submit";
// submitBtn.textContent = "submit";

// const reset = document.createElement("button");
// reset.type = "reset";
// reset.textContent = "reset";

// addField.addEventListener("click", () => {
//   const inputType = selection.value;
//   const input = document.createElement("input");
//   input.setAttribute("type", inputType);
//   input.setAttribute("name", inputType);
//   input.setAttribute("placeholder", `Enter ${inputType}`);
//   form.appendChild(input);
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);
//   const obj = {};
//   formData.forEach((value, key) => {
//     obj[key] = value;
//   });
//   console.log(obj);
// });

// form.addEventListener("reset", () => {});

// form.appendChild(submitBtn);
// form.appendChild(reset);
// fragment.appendChild(form);
// document.body.appendChild(fragment);

// ## 2. Add, delete, and search rows in a dynamic table

// - A form to add rows (Name, Age, Role).
// - Each row should have a “Delete” button to remove it.
// - Add a search input that filters the rows by name.
// - Use insertRow, deleteRow, and textContent/innerText.

// const fragment = document.createDocumentFragment();
// const form = document.createElement("form");
// const form2 = document.createElement("form");
// const table = document.createElement("table");
// const thead = document.createElement("thead");
// const tbody = document.createElement("tbody");
// const th = document.createElement("th");

// form.setAttribute("id", "myForm");
// ["name", "age", "role"].forEach((elem) => {
//   const input = document.createElement("input");
//   input.type = "text";
//   input.name = elem;
//   input.placeholder = `Enter ${elem}`;
//   form.appendChild(input);
// });

// const addRow = document.createElement("button");
// addRow.type = "submit";
// addRow.textContent = "Add row";
// form.appendChild(addRow);

// const headerRow = thead.insertRow(); // create just one header row

// ["name", "age", "role", "operation"].forEach((elem, index) => {
//   const cell = headerRow.insertCell(index); // create cell in that row
//   cell.textContent = elem.toUpperCase(); // set text inside the cell
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);
//   const bodyRow = tbody.insertRow();
//   let i = 0;
//   formData.forEach((value) => {
//     const cell = bodyRow.insertCell(i++);
//     cell.textContent = value;
//   });

//   const deleteBtn = document.createElement("button");
//   deleteBtn.type = "button";
//   deleteBtn.textContent = "Delete";

//   const operationCell = bodyRow.insertCell(-1);
//   operationCell.appendChild(deleteBtn);
//   form.reset();
// });

// const searchInput = document.createElement("input");
// searchInput.type = "text";
// searchInput.name = "search";
// searchInput.placeholder = `Enter name`;
// form2.appendChild(searchInput);

// const search = document.createElement("button");
// search.type = "submit";
// search.textContent = "search";
// form2.appendChild(search);

// form2.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const name = searchInput.value.toLowerCase();
//   if (table) {
//     Array.from(tbody.rows).forEach((row) => {
//       row.cells[0].textContent.toLowerCase() !== name
//         ? (row.style.display = "none")
//         : null;
//     });
//   }
// });

// table.addEventListener("click", (e) => {
//   if (e.target.tagName === "BUTTON") {
//     e.target.parentElement.parentElement.remove();
//   }
// });

// table.appendChild(thead);
// table.appendChild(tbody);
// fragment.appendChild(table);
// fragment.appendChild(form);
// fragment.appendChild(form2);
// document.body.appendChild(fragment);

// ## 3. Theme Switcher with Persistence

// - Toggle theme using a button or switch.
// - Persist the theme in localStorage and apply on page load.
// - Change background and text color based on the theme.

// const themeBtn = document.getElementById("themeBtn");
// const body = document.body;

// const savedTheme = localStorage.getItem("theme") || "light";
// body.classList.add(savedTheme);

// themeBtn.addEventListener("click", () => {
//   const currantTheme = body.classList.contains("light") ? "light" : "dark";
//   const newTheme = currantTheme === "light" ? "dark" : "light";

//   body.classList.remove(currantTheme);
//   body.classList.add(newTheme);
//   document.querySelectorAll(".card").forEach((card) => {
//     card.classList.remove(currantTheme);
//     card.classList.add(newTheme);
//   });
//   localStorage.setItem("theme", newTheme);
// });
