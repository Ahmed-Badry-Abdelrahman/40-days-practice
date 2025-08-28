const counterElm = document.getElementById("counter");
const controllerElm = document.getElementById("controller");
const incBtn = document.getElementById("incBtn");
const decBtn = document.getElementById("decBtn");
const resBtn = document.getElementById("resBtn");

// incBtn.onclick = function increaseCounter() {
//   counterElm.textContent = +counterElm.textContent + 1;
// };

// decBtn.onclick = function () {
//   counterElm.textContent = +counterElm.textContent - 1;
// };

// resBtn.onclick = function () {
//   counterElm.textContent = 0;
// };

function clickHandler(e) {
  if (e.target.tagName === "BUTTON") {
    e.target.name === "increase"
      ? (counterElm.textContent = +counterElm.textContent + 1)
      : e.target.name === "decrease"
      ? (counterElm.textContent = +counterElm.textContent - 1)
      : e.target.name === "reset"
      ? (counterElm.textContent = 0)
      : null;
  }
}

// document.onDOMContentLoaded = function () {
//   console.log("content load");
// };

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("content Load");
//   controllerElm.style.backgroundColor = "red";
//   setTimeout(() => {
//     controllerElm.style.backgroundColor = "black";
//   }, 1000);
// });
// controllerElm.addEventListener("click", clickHandler);

// controllerElm.removeEventListener("click", clickHandler);

// controllerElm.addEventListener(
//   "click",
//   (e) => {
//     console.log("Current Target:", e.currentTarget);
//     console.log("Target:", e.target);
//     // e.stopPropagation();
//     console.log("controllerElm is resave the event =========================");
//     setTimeout(() => {
//       controllerElm.style.backgroundColor = "red";
//     });
//   },
//   true
// );
// incBtn.addEventListener("click", (event) => {
//   console.log(event);
//   console.log("Target:", event.target);
//   console.log("Current Target:", event.currentTarget);

//   setTimeout(() => {
//     counterElm.style.backgroundColor = "black";
//   }, 1000);
//   console.log("incBtn is resave the event ============================");
// });

// const faqElem = document.querySelector(".faq");

// faqElem.addEventListener("click", (e) => {
//   if (e.target.classList.contains("question")) {
//     e.stopPropagation();
//     e.target.nextElementSibling.classList.toggle("hidden");
//     console.log("event done");
//   }
// });

// document.addEventListener("click", (e) => {
//   const allAnswers = document.querySelectorAll(".answer");
//   allAnswers.forEach((element) => {
//     element.classList.add("hidden");
//     console.log("event stop done");
//   });
// });
// document.addEventListener("click", function () {
//   const allAnswers = document.querySelectorAll(".answer.hidden");
//   allAnswers.forEach((answer) => answer.classList.remove("hidden"));
// });

const tabsElem = document.querySelector(".tabs");

function switchToTab(tabNumber) {
  document.querySelector(`.tab.active`).classList.remove("active");
  document.querySelector(`.content.active`).classList.remove("active");
  document
    .querySelector(`.tab[data-tab="${tabNumber}"]`)
    .classList.add("active");
  document
    .querySelector(`.content[data-tab="${tabNumber}"]`)
    .classList.add("active");
}
tabsElem.addEventListener("click", (e) => {
  if (e.target.classList.contains("tab")) {
    e.stopPropagation();
    const tabNumber = e.target.getAttribute("data-tab");
    switchToTab(tabNumber);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "1") switchToTab(1);
  if (e.key === "2") switchToTab(2);
  if (e.key === "3") switchToTab(3);
});

// tabsElem.addEventListener("click", (e) => {
//   if (e.target.classList.contains("tab")) {
//     e.stopPropagation();
//     const tabHeaders = e.target.parentElement;
//     const tabContents = tabHeaders.nextElementSibling;
//     Array.from(tabHeaders.children).forEach((tap) => {
//       tap.classList.remove("active");
//     });
//     e.target.classList.add("active");

//     Array.from(tabContents.children).forEach((content) => {
//       content.classList.remove("active");
//       content.classList.add("hidden");
//       if (
//         e.target.getAttribute("data-tab") === content.getAttribute("data-tab")
//       ) {
//         content.classList.remove("hidden");
//         content.classList.add("active");
//       }
//     });
//   }
// });

document.addEventListener("keydown", (e) => {
  if (e.key === "1") switchToTab(1);
  if (e.key === "2") switchToTab(2);
  if (e.key === "3") switchToTab(3);
});
