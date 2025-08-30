// const tempCard = document.getElementById("temp-card");
// console.log(tempCard);
// const clone = tempCard.content.cloneNode(true);
// document.body.appendChild(clone);

// const observer = new MutationObserver(callback);
// observer.observe(targetNode, config);

// function change() {
//   document.querySelector(".watch").textContent = "welcome";
// }

// const target = document.querySelector(".watch");

// const observer = new MutationObserver((mutationList, observer) => {
//   for (let mutation of mutationList) {
//     if (mutation.type === "childList") {
//       document.body.style.backgroundColor = "black";
//     }
//   }
// });

// const config = {
//   subtree: true,
//   childList: true,
//   characterData: true,
// };

// observer.observe(target, config);
// observer.takeRecords();

// const listElem = document.querySelector(".list");
// const controllers = document.querySelector(".btns");
// let num = 1;
// const counter = document.getElementById("counter");
// controllers.addEventListener("click", (e) => {
//   if (e.target.classList.contains("add")) {
//     const li = document.createElement("li");
//     li.textContent = `${
//       listElem.children.length === 0 ? (num = 1) : ++num
//     } node added`;
//     listElem.appendChild(li);
//   }

//   if (e.target.classList.contains("remove")) {
//     if (listElem.children.length > 0) {
//       listElem.lastElementChild.remove();
//     }
//   }

//   if (e.target.classList.contains("reset")) {
//     listElem.textContent = "";
//     num = 1;
//   }
// });

// function logChanges(records, observer) {
//   for (const record of records) {
//     for (const addedNode of record.addedNodes) {
//       console.log(`Added: ${addedNode.textContent}`);
//       counter.textContent = +counter.textContent + 1;
//     }
//     for (const removedNode of record.removedNodes) {
//       console.log(`one node is add ${removedNode.textContent}`);
//       counter.textContent = +counter.textContent - 1;
//     }
//     // if (record.target.children.length === 0) {
//     //   console.log(`observer is disconnected ${observer.disconnect()}`);
//     // }
//   }
// }

// const config = {
//   subtree: true,
//   childList: true,
// };

// const observer = new MutationObserver(logChanges);
// observer.observe(listElem, config);
// const mutations = observer.takeRecords();

const controllers = document.querySelector(".controller");
const listElem = document.querySelector(".myList");
const pElem = document.querySelector("#p");
const watch = document.querySelector(".watch");
controllers.addEventListener("click", (e) => {
  if (e.target.getAttribute("info") == "add") {
    const li = document.createElement("li");
    li.textContent = `${listElem.children.length + 1} item`;
    listElem.appendChild(li);
  }

  if (e.target.getAttribute("info") == "remove") {
    if (listElem.children.length > 0) {
      listElem.lastElementChild.remove();
    }
  }

  if (e.target.getAttribute("info") == "change-content") {
    pElem.firstChild.data = "welcome, in 40 days of js";
  }

  if (e.target.getAttribute("info") == "change-att") {
    pElem.setAttribute("info", "new-info");
  }
});

function logChanges(records, observer) {
  for (const record of records) {
    if (record.type === "childList") {
      [...record.addedNodes].forEach((n) => console.log(n.textContent));

      for (let removedNode of record.removedNodes) {
        console.log(`there is node removed :=> ${removedNode.textContent}`);
      }
    }

    if (record.type === "attributes") {
      console.log(
        `this element ${record.target.id} have attribute changed${
          record.attributeName
        } : the new value is ${record.target.getAttribute("info")}`
      );
    }

    if (record.type === "characterData") {
      console.log(
        `Text changed in element <${record.target.parentElement.tagName}>: 
     old value = "${record.oldValue}", 
     new value = "${record.target.data}"`
      );
    }
  }
}

const config = {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true, // راقب تغييرات النصوص
  characterDataOldValue: true, // يخزن القيمة القديمة (اختياري)
};

const observer = new MutationObserver(logChanges);
observer.observe(watch, config);
