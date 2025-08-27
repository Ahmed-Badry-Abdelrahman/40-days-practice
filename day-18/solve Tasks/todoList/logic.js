// const inputElem = document.querySelector("#taskInput");
// const searchElem = document.querySelector("#searchInput");
// const listElem = document.querySelector("#taskList");

// function addTask() {
//   const task = inputElem.value;
//   if (task) {
//     const li = document.createElement("li");
//     li.textContent = task;

//     const checkBtn = document.createElement("button");
//     checkBtn.type = "button";
//     checkBtn.textContent = "✅";
//     checkBtn.classList.add("compleatTask");

//     const deleteBtn = document.createElement("button");
//     deleteBtn.type = "button";
//     deleteBtn.textContent = "❌";
//     deleteBtn.classList.add("deleteTask");

//     li.appendChild(checkBtn);
//     li.appendChild(deleteBtn);
//     listElem.appendChild(li);
//     console.log(listElem);
//   }
//   inputElem.value = "";
// }

// listElem.addEventListener("click", (e) => {
//   if (e.target.tagName === "BUTTON") {
//     if (e.target.classList.contains("compleatTask")) {
//       e.target.parentElement.classList.toggle("done");
//     }

//     if (e.target.classList.contains("deleteTask")) {
//       e.target.parentElement.remove();
//     }
//   }
// });

// function filterTasks() {
//   const text = searchElem.value;
//   const tasks = listElem.querySelectorAll("li");
//   if (searchElem) {
//     tasks.forEach((li) => {
//       if (!li.textContent.toLowerCase().includes(text)) {
//         li.style.display = "none";
//       } else {
//         li.style.display = "";
//       }
//     });
//   }
// }
